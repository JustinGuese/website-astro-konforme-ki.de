import type { Transport, TransportHandlers } from './types';
import type { SaeuleId } from '../saeulen';
import { findTurn } from './script';

const TOKEN_DELAY_MS = 18;

function reducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Der Zeitstempel im aufgezeichneten Rekord wird beim Abspielen durch die
 * aktuelle Zeit ersetzt. Die Seite ist statisch: ein fest einkompiliertes
 * Datum wäre schon wenige Wochen nach dem Build sichtbar veraltet und würde
 * die Demo unglaubwürdig machen. Alle übrigen Felder bleiben unverändert —
 * erfunden wird hier nichts, nur der Zeitpunkt ist echt.
 */
function mitJetztStempel<T extends { zeitstempel: string }>(record: T): T {
  return { ...record, zeitstempel: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z') };
}

/**
 * Aufgezeichnete Antworten, typewriter-gestreamt. Läuft ohne Backend.
 * Dies ist der Standardtransport, solange kein Gateway erreichbar ist.
 */
export const scriptedTransport: Transport = {
  name: 'scripted',
  sendPrompt(turnId, saeule: SaeuleId, { onToken, onRecord, onDone }: TransportHandlers) {
    const turn = findTurn(turnId);
    const variante = turn?.varianten[saeule];
    if (!variante) {
      onDone();
      return;
    }

    if (reducedMotion()) {
      onToken(variante.antwort);
      onRecord(mitJetztStempel(variante.record));
      onDone();
      return;
    }

    const woerter = variante.antwort.split(/(\s+)/);
    let i = 0;
    let ausgabe = '';

    const step = () => {
      if (i >= woerter.length) {
        onRecord(mitJetztStempel(variante.record));
        onDone();
        return;
      }
      ausgabe += woerter[i];
      onToken(ausgabe);
      i += 1;
      setTimeout(step, TOKEN_DELAY_MS);
    };

    step();
  },
};

/**
 * Echter Transport gegen ein laufendes Gateway. Wird nur verwendet, wenn
 * PUBLIC_GATEWAY_URL gesetzt ist — bis das Gateway live ist, bleibt dieser
 * Pfad unbenutzt, aber die UI muss beim Umschalten nicht angefasst werden.
 */
export const httpTransport = (gatewayUrl: string): Transport => ({
  name: 'http',
  sendPrompt(turnId, saeule: SaeuleId, { onToken, onRecord, onDone }: TransportHandlers) {
    const turn = findTurn(turnId);
    fetch(`${gatewayUrl.replace(/\/$/, '')}/v1/playground`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ prompt: turn?.prompt ?? turnId, saeule }),
    })
      .then((res) => res.json())
      .then((data) => {
        onToken(data.antwort ?? '');
        if (data.record) onRecord(data.record);
        onDone();
      })
      .catch(() => onDone());
  },
});

export function getTransport(): Transport {
  const gatewayUrl = import.meta.env.PUBLIC_GATEWAY_URL as string | undefined;
  return gatewayUrl ? httpTransport(gatewayUrl) : scriptedTransport;
}
