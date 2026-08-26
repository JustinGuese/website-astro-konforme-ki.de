import type { ProduktId } from './produkte';
import { findStufe, type StufeKey } from './stufen';

/**
 * Das Einstufungs-Quiz empfiehlt ein Produkt und eine Schutzstufe — es
 * bewertet keine Rechtslage. `rdg-hinweis.md` sagt ausdrücklich: „Wir prüfen
 * keine Sach- oder Rechtslage im Einzelfall und erteilen keine
 * Rechtsauskunft." Eine Ausgabe wie „für Sie gilt § 203 StGB" wäre eine
 * Rechtsdienstleistung nach § 2 RDG. Das Ergebnis bleibt deshalb immer in der
 * Form „empfohlenes Produkt + diese Unterlagen gehören in Ihre Akte", nie
 * „diese Vorschrift gilt für Sie".
 */

export interface EinstufungAntworten {
  berufsgeheimnistraeger: boolean;
  bestehendeInfrastruktur: boolean;
  personenbezogeneDaten: boolean;
  modellpraeferenz: 'de-only' | 'eu' | 'global';
}

export interface EinstufungFrage {
  id: keyof EinstufungAntworten;
  frage: string;
  hinweis?: string;
  optionen: { wert: boolean | string; label: string }[];
}

export const FRAGEN: EinstufungFrage[] = [
  {
    id: 'berufsgeheimnistraeger',
    frage: 'Sind Sie oder Ihr Unternehmen ein Berufsgeheimnisträger nach § 203 StGB?',
    hinweis: 'Kanzlei, Arzt-/Zahnarztpraxis, Steuerberatung, Notariat, Psychotherapie, Pflegedienst.',
    optionen: [
      { wert: true, label: 'Ja' },
      { wert: false, label: 'Nein' },
    ],
  },
  {
    id: 'bestehendeInfrastruktur',
    frage: 'Nutzen Sie bereits eine KI-Infrastruktur, die Sie behalten möchten?',
    hinweis: 'Azure OpenAI, AWS Bedrock oder eine eigene Cloud-Anbindung.',
    optionen: [
      { wert: true, label: 'Ja, die soll bleiben' },
      { wert: false, label: 'Nein, wir starten neu' },
    ],
  },
  {
    id: 'personenbezogeneDaten',
    frage: 'Verarbeiten Ihre Anfragen personenbezogene Daten?',
    hinweis: 'Mandanten-, Patienten- oder Mitarbeitendendaten zählen dazu.',
    optionen: [
      { wert: true, label: 'Ja' },
      { wert: false, label: 'Nein' },
    ],
  },
  {
    id: 'modellpraeferenz',
    frage: 'Was ist Ihnen wichtiger: freie Modellwahl oder maximale Standortkontrolle?',
    optionen: [
      { wert: 'de-only', label: 'Standortkontrolle ist entscheidend — ein deutsches Modell reicht.' },
      { wert: 'eu', label: 'EU-Anbieter reichen mir.' },
      { wert: 'global', label: 'Volle Auswahl, auch außerhalb der EU — solange es protokolliert wird.' },
    ],
  },
];

export interface EinstufungErgebnis {
  stufe: StufeKey;
  produkt: ProduktId;
  unterlagen: string[];
  begruendung: string[];
}

function unterlagenFuer(mitZusatzvereinbarung: boolean): string[] {
  const alle = ['avv', 'tom', 'subprozessoren', '203-zusatzvereinbarung', 'vvt-muster'];
  return mitZusatzvereinbarung ? alle : alle.filter((id) => id !== '203-zusatzvereinbarung');
}

/**
 * Reine Funktion, ohne DOM-Bezug — jede Antwortkombination lässt sich
 * unabhängig vom Quiz-Widget durchrechnen und prüfen.
 */
export function empfehleStufe(a: EinstufungAntworten): EinstufungErgebnis {
  const begruendung: string[] = [];

  // Stufe 1 ist nur über eigene Hardware lieferbar (siehe stufen.ts) — der
  // Sidecar legt sich vor eine BESTEHENDE Cloud und kann sie strukturell
  // nicht erreichen. Deshalb führt dieser Zweig immer zu /deutschland-inferenz,
  // unabhängig von der Antwort auf „bestehende Infrastruktur".
  const brauchtDeOnly = a.berufsgeheimnistraeger || a.modellpraeferenz === 'de-only';

  if (brauchtDeOnly) {
    begruendung.push(
      a.berufsgeheimnistraeger
        ? 'Als Berufsgeheimnisträger passt die höchste Schutzstufe als Grundlage — kein Gateway, kein Transfer.'
        : 'Sie haben die höchste Schutzstufe gewählt — die verlässt Deutschland nicht.'
    );
    if (a.bestehendeInfrastruktur) {
      begruendung.push('Diese Stufe liefert kein Gateway und damit auch kein Sidecar über Ihre bestehende Cloud — nur eigene Hardware erreicht sie.');
    }
    return {
      stufe: 'de-only',
      produkt: 'deutschland-inferenz',
      unterlagen: unterlagenFuer(a.berufsgeheimnistraeger),
      begruendung,
    };
  }

  const produkt: ProduktId = a.bestehendeInfrastruktur ? 'sidecar' : 'router';
  if (a.bestehendeInfrastruktur) {
    begruendung.push('Sie möchten Ihre bestehende Infrastruktur behalten — der Sidecar legt die Schicht davor, ohne Migration.');
  }

  let stufe: StufeKey;
  if (a.modellpraeferenz === 'global' && !a.personenbezogeneDaten) {
    stufe = 'global-audited';
    begruendung.push('Ohne personenbezogene Daten ist die volle Modellauswahl möglich — protokolliert statt eingeschränkt.');
  } else if (a.modellpraeferenz === 'global') {
    // eea-region wäre die eigentlich passende Antwort (bestehender
    // Azure-/AWS-Vertrag, auf ein EWR-Land gepinnt), hat aber aktuell keinen
    // zulässigen Anbieter (ungeklärte Aufbewahrungsfrist bei den beiden
    // einzigen Länder-Endpunkten — siehe stufen.ts). Das Quiz empfiehlt nie
    // eine Stufe, die heute nicht liefert; es fällt auf die nächstbeste
    // tatsächlich erreichbare Stufe zurück, statt in eine Sackgasse zu führen.
    if (findStufe('eea-region').aktuellErreichbar) {
      stufe = 'eea-region';
      begruendung.push('Personenbezogene Daten und uneingeschränkte Modellwahl vertragen sich nicht — die Region wird auf den EWR gepinnt.');
    } else {
      stufe = 'eu';
      begruendung.push(
        'Die eigentlich passende Stufe — EWR-Region für einen bestehenden Azure-/AWS-Vertrag — hat aktuell keinen zulässigen Anbieter. Empfohlen wird stattdessen die EU-Anbieter-Stufe, die heute tatsächlich liefert.'
      );
    }
  } else {
    stufe = 'eu';
    begruendung.push('EU-ansässige Anbieter reichen Ihnen — die Auswahl bleibt auf EWR-ansässige Anbieter begrenzt.');
  }

  return {
    stufe,
    produkt,
    unterlagen: unterlagenFuer(false),
    begruendung,
  };
}
