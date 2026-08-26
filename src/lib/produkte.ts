import type { StufeKey } from './stufen';

/**
 * Die drei Bezugswege für dieselbe Compliance-Schicht. Speist das Dreieck im
 * Hero, den Header-Aufklapper und den Footer — eine Quelle statt drei Kopien.
 *
 * Reihenfolge ist die Dreiecks-Reihenfolge: oben schmal (höchste Schutzstufe,
 * höchster Aufwand), unten breit (volle Modellauswahl, geringster Aufwand).
 */

export type ProduktId = 'deutschland-inferenz' | 'router' | 'sidecar';

export interface Produkt {
  produktId: ProduktId;
  nummer: '01' | '02' | '03';
  name: string;
  href: string;
  eyebrow: string;
  /** Ein Satz auf der Karte — was es ist. */
  einzeiler: string;
  /** Für wen, in einer Zeile. */
  zielgruppe: string;
  /** Die drei konkreten Versprechen, die auf der Karte als Liste stehen. */
  punkte: string[];
  beschreibung: string;
  /** Welche Schutzstufen dieses Produkt tatsächlich liefern kann. */
  stufen: StufeKey[];
  aufwand: string;
  /**
   * Einstiegspreis mit Einheit. Jede Zahl hier hat ihr Gegenstück in
   * `preise.ts` (`pay-per-token` €3,50/Mio., `compliance` €290/Monat) — nie
   * eine eigene Zahl erfinden, sonst driften Startseite und /preise
   * auseinander. Die drei Produkte rechnen bewusst in verschiedenen Einheiten
   * ab; `kostenZusatz` trägt die Nuance, damit die Karte trotzdem vergleichbar
   * bleibt, statt sie in eine falsche gemeinsame Einheit zu zwingen.
   */
  kosten: string;
  kostenZusatz: string;
  cta: { label: string; href: string };
  akzent: 'premium' | 'accent' | 'neutral';
}

export const PRODUKTE: Produkt[] = [
  {
    produktId: 'deutschland-inferenz',
    nummer: '01',
    name: 'Deutschland-Inferenz',
    href: '/deutschland-inferenz',
    eyebrow: 'In Deutschland gehostet · kein Logging',
    einzeiler: 'Unser eigenes Modell auf eigener Hardware in Nürnberg — kein Logging, kein Training, deutsche GmbH.',
    zielgruppe: 'Kliniken, Kanzleien, Finanzdienstleister unter strenger Regulierung',
    punkte: ['Kein Logging, kein Training auf Ihren Daten', 'Deutsche GmbH, deutscher Gerichtsstand', 'Alle Unterlagen gegengezeichnet'],
    beschreibung:
      'Gehostete Inferenz auf eigener Hardware der DataFortress.cloud GmbH. Kein Gateway, kein Drittanbieter, kein Transfer — die einzige Stufe, die kein Gateway der Welt liefern kann, weil es dafür keinen deutschen Endpunkt gibt.',
    stufen: ['de-only'],
    aufwand: 'Zugangsschlüssel anfordern, keine Infrastrukturänderung nötig.',
    kosten: 'ab €0 / Monat',
    kostenZusatz: '5 Mio. Token inklusive, ohne Zahlungsmittel',
    cta: { label: 'Kostenlos testen', href: '/kontakt?interesse=de-inferenz-test' },
    akzent: 'premium',
  },
  {
    produktId: 'router',
    nummer: '02',
    name: 'Router',
    href: '/router',
    eyebrow: 'Wählbare Schutzstufe',
    einzeiler: 'Vier Schutzstufen — Sie wählen eine, wir führen Sie durch die passenden Unterlagen.',
    zielgruppe: 'Unternehmen, die Modellauswahl brauchen, aber nachweispflichtig sind',
    punkte: ['Vier Fragen statt Beratungstermin', 'Fail-closed: nie unterhalb Ihrer Stufe', 'base_url wechseln, sonst nichts'],
    beschreibung:
      'Ein Endpunkt, vier Schutzstufen. Sie wählen die Stufe im Onboarding — Fail-closed: ist kein Anbieter Ihrer Stufe verfügbar, schlägt die Anfrage fehl, statt herabgestuft zu werden.',
    stufen: ['eea-region', 'eu', 'global-audited'],
    aufwand: 'base_url wechseln, Stufe im Fragebogen bestimmen.',
    kosten: 'ab €3,50 / Mio. Token',
    kostenZusatz: 'Einkaufspreis ohne Marge, Compliance-Ebene ab €290/Monat',
    cta: { label: 'Passende Stufe finden', href: '/einstufung' },
    akzent: 'accent',
  },
  {
    produktId: 'sidecar',
    nummer: '03',
    name: 'Sidecar',
    href: '/sidecar',
    eyebrow: 'Ihre Infrastruktur bleibt',
    einzeiler: 'Ihr AWS, Azure oder eigenes Modell bleibt — unser Sidecar läuft daneben und liefert den Nachweis.',
    zielgruppe: 'Teams mit bestehendem Cloud-Vertrag, die nicht migrieren wollen',
    punkte: ['Per Helm in Ihrem eigenen Cluster', 'Plug and Play vor Ihre bestehende API', 'Compliance, Audit und Protokoll dazu'],
    beschreibung:
      'Per Helm in Ihrem eigenen Kubernetes-Cluster installiert, neben Azure OpenAI, AWS Bedrock oder was auch immer Sie bereits betreiben. Der Sidecar erzwingt die vereinbarte Schutzstufe vor jeder Anfrage und schreibt dieselbe geprüfbare Kette wie die anderen beiden Wege — ohne Migration.',
    stufen: ['eea-region', 'eu', 'global-audited'],
    aufwand: 'Helm-Chart in Ihrem Cluster installieren, keine Migration.',
    kosten: 'ab €290 / Monat',
    kostenZusatz: 'Ihre Inferenzkosten bleiben bei Ihrem Anbieter',
    cta: { label: 'Sidecar einrichten', href: '/kontakt?interesse=sidecar' },
    akzent: 'neutral',
  },
];

export const findProdukt = (id: ProduktId): Produkt => PRODUKTE.find((p) => p.produktId === id)!;
