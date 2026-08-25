export type SaeuleId = 1 | 2 | 3;

export interface Saeule {
  id: SaeuleId;
  kurzname: string;
  name: string;
  beschreibung: string;
  kosten: string;
  eignung: string;
  subprozessor: string;
  rechenzentrum: string;
  akzent: 'neutral' | 'accent' | 'premium';
}

/**
 * Die drei Säulen — wie eine Anfrage tatsächlich verarbeitet wird.
 *
 * Säule 2 und 3 lösen die Subprozessor-Frage nicht durch eine bessere Wahl,
 * sondern indem es keinen externen Subprozessor mehr gibt. Das ist der
 * eigentliche Unterschied zu "wir haben einen guten EU-Anbieter ausgesucht".
 */
export const SAEULEN: Saeule[] = [
  {
    id: 1,
    kurzname: 'Säule 1',
    name: 'EU-Anbieter-Autorouting',
    beschreibung:
      'Ihre Anfrage wird automatisch an einen von vier geprüften EU-Anbietern geroutet — Scaleway, IONOS, Mistral AI, OVHcloud — je nach Verfügbarkeit und Modell.',
    kosten: '€',
    eignung: 'Einstieg und Standardfälle ohne besondere Sensibilität.',
    subprozessor: 'wechselnd — Scaleway SAS, IONOS SE, Mistral AI oder OVHcloud',
    rechenzentrum: 'Frankreich / Deutschland, je nach Anbieter',
    akzent: 'neutral',
  },
  {
    id: 2,
    kurzname: 'Säule 2',
    name: 'DataFortress.cloud GmbH, geteilte Server',
    beschreibung:
      'Ihre Anfrage verlässt EU-Anbieter vollständig und läuft ausschließlich auf eigener Infrastruktur der DataFortress.cloud GmbH in Frankfurt — geteilt mit anderen Nachweis-Kunden, aber ohne jeden Drittanbieter.',
    kosten: '€€',
    eignung: 'Wenn Sie keinen externen Subprozessor mehr wollen, aber keine dedizierte Hardware brauchen.',
    subprozessor: 'Keiner — DataFortress.cloud GmbH direkt',
    rechenzentrum: 'Frankfurt, DE (eigenes Rechenzentrum, geteilt)',
    akzent: 'accent',
  },
  {
    id: 3,
    kurzname: 'Säule 3',
    name: 'DataFortress.cloud GmbH, dediziert in Ihrem Rechenzentrum',
    beschreibung:
      'Dedizierte Server, betrieben von DataFortress.cloud GmbH, physisch in Ihrem eigenen Rechenzentrum oder Ihrer Colocation platziert.',
    kosten: '€€€',
    eignung: 'Besonders sensible Mandate oder wenn Ihr Datenschutzbeauftragter physische Kontrolle verlangt.',
    subprozessor: 'Keiner — Hardware in Ihrem eigenen Rechenzentrum',
    rechenzentrum: 'Ihr Rechenzentrum / Ihre Colocation',
    akzent: 'premium',
  },
];

export const findSaeule = (id: SaeuleId): Saeule => SAEULEN.find((s) => s.id === id)!;

/**
 * Die Säule, die überall vorausgewählt und in den Beispiel-Rekorden gezeigt
 * wird: eigene Infrastruktur der DataFortress.cloud GmbH, kein externer
 * Subprozessor. Säule 1 bleibt wählbar, ist aber nicht das Aushängeschild —
 * ein fremder Anbietername im Rekord der Startseite würde genau die Frage
 * aufwerfen, die das Produkt beantwortet.
 */
export const STANDARD_SAEULE: SaeuleId = 2;
