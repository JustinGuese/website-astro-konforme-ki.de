import type { CompareColumn, CompareRow } from '@justinguese/astro-kit/lib/compare';

/**
 * Daten für /eu-inferenz — die gehostete Qwen3.8-27B-Inferenz, betrieben von
 * der DataFortress.cloud GmbH auf eigener Hardware in Nürnberg. Getrennt von
 * `preise.ts`, weil die Spalten hier (Enthalten/Überschreitung) nicht in die
 * `Tarif`/`PricingCards`-Form passen und ein Umbiegen dort mehr verschleiert
 * als vereinfacht.
 */

export interface InferenzTarif {
  tarifId: string;
  name: string;
  preis: string;
  einheit: string;
  enthalten: string;
  ueberschreitung: string;
  /**
   * Pro Stufe verschieden: „Anfragen" ist für einen €0-Tarif ohne
   * Zahlungsmittel die teuerste denkbare Formulierung — der Test-Tarif
   * verlangt genau das nicht und sagt das auch.
   */
  ctaLabel: string;
  hervorgehoben?: boolean;
}

export const inferenzHref = (tarifId: string) => `/kontakt?interesse=eu-inferenz-${tarifId}`;

export const INFERENZ_TARIFE: InferenzTarif[] = [
  {
    tarifId: 'test',
    name: 'Test',
    preis: '€0',
    einheit: '/ Monat',
    enthalten: '5 Mio. Token/Monat',
    ueberschreitung: 'Drosselung — keine automatische Abrechnung',
    ctaLabel: 'Kostenlos testen',
  },
  {
    tarifId: 'compliance',
    name: 'Compliance',
    preis: '€290',
    einheit: '/ Monat',
    enthalten: '25 Mio. Token/Monat',
    ueberschreitung: '€1,00 / Mio. Eingabe, €7,50 / Mio. Ausgabe',
    ctaLabel: 'Zugang anfragen',
    hervorgehoben: true,
  },
  {
    tarifId: 'dediziert',
    name: 'Dediziert',
    preis: 'ab €2.900',
    einheit: '/ Monat',
    enthalten: 'Reservierte GPU, ~20 Mrd. Token/Monat',
    ueberschreitung: '—',
    ctaLabel: 'Gespräch vereinbaren',
  },
];

/**
 * Vergleich gegen die Standard-API-Angebote von OpenAI, Anthropic, Google und
 * Azure OpenAI — bewusst nur auf Jurisdiktion/Compliance beschränkt, nicht auf
 * Modell-Leistungsfähigkeit oder Preis: Das lässt sich für die Angebote
 * anderer Anbieter nicht verlässlich pflegen, die Rechtslage schon.
 */
export const INFERENZ_VERGLEICH_SPALTEN: CompareColumn[] = [
  { id: 'konforme', label: 'konforme-ki.de', note: 'DataFortress.cloud GmbH', highlight: true },
  { id: 'openai', label: 'OpenAI' },
  { id: 'anthropic', label: 'Anthropic' },
  { id: 'google', label: 'Google' },
  { id: 'azure', label: 'Azure OpenAI', note: 'Microsoft' },
];

export const INFERENZ_VERGLEICH_ZEILEN: CompareRow[] = [
  {
    label: 'Betreiber-Sitz',
    values: {
      openai: 'USA',
      anthropic: 'USA',
      google: 'USA',
      azure: 'USA',
      konforme: 'Deutschland',
    },
  },
  {
    label: 'Unterliegt US CLOUD Act',
    values: { openai: true, anthropic: true, google: true, azure: true, konforme: false },
  },
  {
    label: 'AVV nach Art. 28 DSGVO',
    values: {
      openai: 'Standard-AVV',
      anthropic: 'Standard-AVV',
      google: 'Standard-AVV',
      azure: 'Standard-AVV',
      konforme: 'individuell gegenzeichenbar',
    },
  },
  {
    label: '§203-StGB-Zusatzvereinbarung',
    values: { openai: false, anthropic: false, google: false, azure: false, konforme: true },
  },
  {
    label: 'Kein Fallback außerhalb der EU im Störfall',
    values: { openai: false, anthropic: false, google: false, azure: false, konforme: true },
  },
];
