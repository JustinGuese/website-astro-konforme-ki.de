import type { Tier } from '@justinguese/astro-kit/lib/pricing';

export interface Tarif {
  /**
   * Stabiler Bezeichner, der als `?tarif=` an das Zugangsformular übergeben
   * und dort als verstecktes Feld mitgesendet wird. Ohne ihn lässt sich aus
   * einer Formspree-Einsendung nicht ablesen, welches Angebot angeklickt
   * wurde — alle CTAs landen sonst ununterscheidbar auf /#zugang.
   */
  tarifId: string;
  name: string;
  preis: string;
  einheit: string;
  beschreibung: string;
  leistungen: string[];
  cta: { label: string; href: string };
  hervorgehoben?: boolean;
  hinweis?: string;
}

/** `/#zugang` mit Tarif-Attribution — siehe `Tarif.tarifId`. */
export const zugangHref = (tarifId: string) => `/?tarif=${tarifId}#zugang`;

/**
 * Das §203-Freigabedossier (€39) läuft vorerst über dasselbe
 * Formspree-Zugangsformular wie alle anderen Stufen — kein Zahlungsanbieter
 * angebunden. Die Bestellung ist über `tarif=dossier` eindeutig zuordenbar;
 * Rechnung und Auslieferung erfolgen manuell. Sobald ein Payment-Link
 * existiert, wird nur diese eine Konstante ausgetauscht.
 */
export const dossierHref = zugangHref('dossier');

/**
 * Die Angebotsleiter — das, was ein Besucher der Startseite vergleichen soll.
 * Bewusst getrennt von NUTZUNGSMODELLE (wie Token abgerechnet werden): das
 * hier ist die Kaufentscheidung, das andere ein Abrechnungsdetail.
 */
export interface Stufe extends Tarif {
  /** Ledger-Nummerierung im Leiter-Raster, z. B. „01". */
  nummer: string;
  /** Ein Satz: für wen diese Stufe die richtige ist. */
  eignung: string;
}

export const LEITER: Stufe[] = [
  {
    nummer: '01',
    tarifId: 'checkliste',
    name: 'Freigabe-Checkliste',
    preis: '€0',
    einheit: 'PDF, eine Seite',
    beschreibung: 'Die 12 Punkte, die Ihr Datenschutzbeauftragter prüft, bevor er KI freigibt.',
    eignung: 'Wenn Sie noch klären, ob KI bei Ihnen überhaupt zulässig ist.',
    leistungen: [
      'AI Act, DSGVO und § 203 StGB auf einer Seite',
      'Prüfschritte in der Reihenfolge, in der sie anfallen',
      'Direkt an Ihren DSB weiterleitbar',
      'Nur E-Mail, keine weiteren Angaben',
    ],
    cta: { label: 'Checkliste anfordern', href: '/#checkliste' },
  },
  {
    nummer: '02',
    tarifId: 'dossier',
    name: '§203-Freigabedossier',
    preis: '€39',
    einheit: 'einmalig',
    beschreibung: 'Der komplette Dokumentensatz, mit dem Sie die Freigabe intern durchbekommen — ausfüllbar, nicht nur zum Lesen.',
    eignung: 'Wenn Sie die Freigabe aktiv betreiben und Papier brauchen, das unterschriftsreif ist.',
    leistungen: [
      'AVV-Vorlage nach Art. 28 DSGVO',
      '§ 203 Abs. 3 StGB-Zusatzvereinbarung',
      'Vorausgefüllter Art. 30 VVT-Eintrag',
      'DSB-Freigabevorlage mit Begründungstext',
      'TOM-Beschreibung und Subprozessorenliste',
    ],
    cta: { label: 'Dossier bestellen', href: dossierHref },
    hervorgehoben: true,
    hinweis: 'Wird bei einem späteren Compliance-Abo vollständig verrechnet.',
  },
  {
    nummer: '03',
    tarifId: 'compliance',
    name: 'Compliance',
    preis: '€290',
    einheit: '/ Monat',
    beschreibung: 'Die laufende Prüfspur: jede Anfrage nachweisbar, jederzeit exportierbar, gegengezeichnet.',
    eignung: 'Wenn KI bei Ihnen produktiv läuft und die Nachweispflicht dauerhaft besteht.',
    leistungen: [
      'Signierte Audit-Exporte (PDF + CSV)',
      'Automatischer Art. 30 VVT-Eintrag pro Anfrage',
      'Subprozessor-Änderungsbenachrichtigung',
      'Gegengezeichneter AVV',
      'Individuelle §203-Zusatzvereinbarung',
    ],
    cta: { label: 'Zugangsschlüssel sichern', href: zugangHref('compliance') },
  },
];

/** Die Preisanker-Stufe unter der Leiter — hohes Ticket, persönlich. */
export const ANKER: Tarif = {
  tarifId: 'onboarding',
  name: 'Machbarkeits-Check & Integration',
  preis: '€1.900–9.000',
  einheit: 'einmalig',
  beschreibung:
    'Wir prüfen Ihre bestehenden Systeme, integrieren den Endpunkt in Ihren primären Kanal und begleiten Sie persönlich bis zur schriftlichen Freigabe durch Ihren Datenschutzbeauftragten.',
  leistungen: [
    'Prüfung Ihrer bestehenden Systeme',
    'Integration in Ihren primären Kanal',
    'Individuelle §203-Zusatzvereinbarung',
    'Begleitung bis zur DSB-Freigabe',
    'Optional: dedizierte Server in Ihrem Rechenzentrum (Säule 3)',
  ],
  cta: { label: 'Machbarkeits-Check anfragen', href: '/kontakt?interesse=onboarding' },
};

/**
 * Wie Sie für Token zahlen — Pay-per-Token oder Abo. Beide gelten für
 * Säule 1 (EU-Anbieter-Autorouting); Säule 2 ist ein Aufpreis auf Anfrage,
 * Säule 3 ist Teil des Onboardings (siehe SERVICE_TARIFE).
 */
export const NUTZUNGSMODELLE: Tarif[] = [
  {
    tarifId: 'pay-per-token',
    name: 'Pay-per-Token',
    preis: '€3,50',
    einheit: '/ Mio. Eingabe-Token',
    beschreibung: 'Kein Abo, ab dem ersten Token abgerechnet.',
    leistungen: [
      'Erste 5 Mio. Token kostenlos',
      'Ausgabe-Token: €16,00 / Mio.',
      'EU-Routing (Säule 1) inklusive',
      'Log-Ansicht im Browser',
    ],
    cta: { label: 'Zugangsschlüssel sichern', href: zugangHref('pay-per-token') },
  },
  {
    tarifId: 'chat',
    name: 'Chat',
    preis: '€29',
    einheit: '/ Monat',
    beschreibung: 'Web-Oberfläche wie ChatGPT/Claude — für den Einstieg in Kanzlei oder Praxis.',
    leistungen: [
      '~15 Mio. Token/Monat inklusive',
      'Chat-Oberfläche, kein API-Setup nötig',
      'EU-Routing (Säule 1)',
      'Fair-Use Nachrichtenlimit',
    ],
    cta: { label: 'Zugangsschlüssel sichern', href: zugangHref('chat') },
    hervorgehoben: true,
  },
  {
    tarifId: 'pro',
    name: 'Pro',
    preis: '€99',
    einheit: '/ Monat',
    beschreibung: 'API- und CLI-Zugriff für Entwickler-Teams — Claude-Code-artiger Agenten-Workflow.',
    leistungen: [
      '~60 Mio. Token/Monat inklusive',
      'API + CLI/Agenten-Zugriff',
      'Säule 1 oder 2 wählbar',
      'Priorisierte Warteschlange',
    ],
    cta: { label: 'Zugangsschlüssel sichern', href: zugangHref('pro') },
  },
];

/** Die Compliance-Schicht — orthogonal zum Nutzungsmodell, oben. */
export const SERVICE_TARIFE: Tarif[] = [
  {
    tarifId: 'compliance',
    name: 'Compliance',
    preis: '€290',
    einheit: '/ Monat',
    beschreibung: 'Die Freigabe, die Ihr Datenschutzbeauftragter braucht.',
    leistungen: [
      'Signierte Audit-Exporte (PDF + CSV)',
      'Automatischer Art. 30 VVT-Eintrag',
      'Subprozessor-Änderungsbenachrichtigung',
      'Gegengezeichneter AVV',
      '§203-Zusatzvereinbarung',
    ],
    cta: { label: 'Zugangsschlüssel sichern', href: zugangHref('compliance') },
    hervorgehoben: true,
  },
  {
    tarifId: 'onboarding',
    name: 'Onboarding',
    preis: '€1.900–9.000',
    einheit: 'einmalig',
    beschreibung: 'Persönlicher §203-/DSGVO-Machbarkeits-Check und Integration.',
    leistungen: [
      'Prüfung Ihrer bestehenden Systeme',
      'Integration in Ihren primären Kanal',
      'Individuelle §203-Zusatzvereinbarung',
      'Begleitung bis zur Freigabe durch Ihren DSB',
      'Optional: dedizierte Server in Ihrem Rechenzentrum (Säule 3) — individuell kalkuliert',
    ],
    cta: { label: 'Machbarkeits-Check anfragen', href: '/kontakt?interesse=onboarding' },
  },
];

/**
 * Adapter für `@justinguese/astro-kit`'s `PricingCards`, das seine eigene
 * `Tier`-Form erwartet. Die `Tarif[]`-Daten selbst bleiben unverändert (mit
 * deutschen Feldnamen), weil `ZugangForm.astro` `LEITER`, `ANKER` und
 * `NUTZUNGSMODELLE` gemeinsam über dieselben Feldnamen durchläuft — eine
 * Umbenennung hier würde das dortige generische Mapping zerbrechen.
 */
export function tarifAlsTier(tarif: Tarif): Tier {
  return {
    id: tarif.tarifId,
    name: tarif.name,
    price: tarif.preis,
    priceNote: tarif.einheit,
    tagline: tarif.beschreibung,
    cta: tarif.cta,
    highlight: tarif.hervorgehoben,
    features: tarif.leistungen,
  };
}
