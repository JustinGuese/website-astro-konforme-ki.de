import { createHash } from 'node:crypto';

/**
 * Die Kette — das Signaturelement der Seite.
 *
 * Jeder Abschnitt einer Seite ist ein Glied in einer hash-verketteten Liste,
 * genau wie jede Anfrage im Nachweis-Protokoll. Die angezeigten Hashes werden
 * zur Bauzeit real berechnet:
 *
 *   h₀ = sha256(seite)
 *   hₙ = sha256(hₙ₋₁ + abschnittsId)
 *
 * Sie sind damit nachrechenbar und keine dekorative Zufallsfolge. Ein Produkt,
 * das Beweisbarkeit verkauft, darf seine eigenen Hashes nicht erfinden.
 */

export interface Glied {
  /** DOM-id des Abschnitts, auf den das Glied verweist */
  id: string;
  /** Sichtbare Beschriftung in der Schiene */
  label: string;
  /** Laufende Nummer, ab 1 */
  nummer: number;
  /** Vollständiger sha256-Hex-Hash */
  hash: string;
  /** Hash des vorherigen Glieds ('genesis' beim ersten) */
  vorgaenger: string;
}

const sha256 = (input: string): string =>
  createHash('sha256').update(input, 'utf8').digest('hex');

export function buildChain(
  seite: string,
  abschnitte: { id: string; label: string }[],
): Glied[] {
  let vorher = sha256(seite);
  return abschnitte.map((abschnitt, i) => {
    const vorgaenger = vorher;
    const hash = sha256(vorgaenger + abschnitt.id);
    vorher = hash;
    return {
      id: abschnitt.id,
      label: abschnitt.label,
      nummer: i + 1,
      hash,
      vorgaenger,
    };
  });
}

/** `#0003` */
export const gliedNummer = (n: number): string => `#${String(n).padStart(4, '0')}`;

/** `sha256:7be1c4…904f` — die Darstellung, die auch im Rekord verwendet wird */
export function kurzHash(hash: string, vorn = 6, hinten = 4): string {
  return `sha256:${hash.slice(0, vorn)}…${hash.slice(-hinten)}`;
}
