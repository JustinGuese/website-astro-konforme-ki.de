/**
 * Die vier Schutzstufen — aus der Backend-Architektur übernommen, nicht als
 * eigene Marketing-Erfindung. Jede Stufe kompiliert dort zu einem harten
 * Pre-Egress-Allowlist UND zum Anhangstext des AVV — Vertrag und
 * Laufzeitverhalten können also nicht auseinanderlaufen.
 *
 * Namen, Zusagen und Caveats sind gegen die live laufende Instanz abgeglichen
 * (`GET https://ai-sidecar-api.datafortress.cloud/v1/presets`, geprüft
 * 2026-08-26) — nicht nur gegen den Quelltext. Das Backend selbst liefert
 * pro Stufe ein `satisfiable`-Feld; `aktuellErreichbar` unten spiegelt genau
 * das, damit eine Stufe, die heute keinen einzigen zulässigen Anbieter hat
 * (siehe Stufe 2), auf der Seite nicht als normal verfügbar erscheint.
 *
 * Stufe 1 ist die einzige, die NICHT über ein Gateway lieferbar ist: eine
 * Prüfung des vollständigen Anbieterkatalogs ergab, dass kein deutscher
 * Endpunkt existiert. Stufe 1 gibt es nur, weil DataFortress eigene Hardware
 * betreibt — deshalb kann /sidecar (der eine bestehende Cloud vorschaltet)
 * Stufe 1 strukturell nicht erreichen, nur /deutschland-inferenz.
 */

export type StufeKey = 'de-only' | 'eea-region' | 'eu' | 'global-audited';

export interface Stufe {
  key: StufeKey;
  nummer: 1 | 2 | 3 | 4;
  name: string;
  fuerWen: string;
  egress: string;
  modellauswahl: string;
  zusage: string;
  /** Was diese Stufe nicht leistet — wird immer mit angezeigt, nicht nur im Backend. */
  caveats: string[];
  /** Nur über eigene Hardware lieferbar — kein Gateway kann diese Stufe erreichen. */
  nurEigeneHardware?: boolean;
  /** Live gegen /v1/presets geprüft — hat diese Stufe aktuell mindestens einen zulässigen Anbieter? */
  aktuellErreichbar: boolean;
  akzent: 'premium' | 'accent' | 'neutral';
}

export const STUFEN: Stufe[] = [
  {
    key: 'de-only',
    nummer: 1,
    name: 'Nur Deutschland',
    fuerWen: 'Berufsgeheimnisträger, § 203 StGB — Kanzleien, Praxen, Steuerberatung, Notariate',
    egress: 'Eigene deutsche GPU. Kein Gateway, kein Transfer.',
    modellauswahl: 'Ein Modell (Qwen3.8-27B)',
    zusage: 'Verlässt Deutschland nicht — absolut, kein Fallback.',
    caveats: [
      'Ein Modell — keine Auswahl zwischen mehreren Anbietern oder Modellgrößen; eine Anfrage nach einem anderen Modell wird abgelehnt, nicht umgeleitet.',
      'Physischer Zugriff: sitzt die Hardware nicht in eigenen Räumlichkeiten, ist der Hosting-Anbieter ein Subprozessor mit physischem Zugriff und gehört in den AVV — „unter eigener Kontrolle" beschreibt den Software-Stack, nicht automatisch das Gebäude.',
      'Die §203-Verpflichtungserklärung ist ein zu unterzeichnender Vertrag, kein automatisches Produkt dieser Stufe.',
      'Null-Aufbewahrung gilt nur, wenn der Inferenzserver entsprechend konfiguriert ist — Beleg dazu steht in den TOM, nicht als Behauptung hier.',
    ],
    nurEigeneHardware: true,
    aktuellErreichbar: true,
    akzent: 'premium',
  },
  {
    key: 'eea-region',
    nummer: 2,
    name: 'EWR-Region',
    fuerWen: 'Unternehmen mit bestehendem Azure-/AWS-AVV',
    egress: 'Rechenzentrum auf ein EWR-Land gepinnt — Deutschland selbst steht hier nicht zur Wahl.',
    modellauswahl: 'Irland oder Schweden',
    zusage: 'Nie unterhalb dieser Region — kein Fallback in ein anderes Land.',
    caveats: [
      'Aktuell kein zulässiger Anbieter: die einzigen zwei Länder-Endpunkte im Katalog (Amazon Bedrock/Irland, Azure/Schweden) haben eine ungeklärte Aufbewahrungsfrist — ungeklärt gilt als nicht-konform, die Stufe liefert deshalb derzeit null zulässige Anbieter.',
      'Eine EWR-Region hebt die Transfer-Frage nicht auf: eine US-kontrollierte Entität kann trotz EWR-Serverstandort dem CLOUD Act unterliegen.',
      'Löst Art. 28/32 DSGVO, nicht automatisch Kapitel V — bei Drittlandbezug zusätzlich SCC/TIA prüfen.',
      'Die Verifikation ist schwächer als bei Stufe 1 oder 3: manche Anbieter melden nur den Basisnamen zurück, nicht die tatsächlich bedienende Region — solche Anfragen werden als „Region unverifiziert" aufgezeichnet, nicht stillschweigend als konform gezählt.',
    ],
    aktuellErreichbar: false,
    akzent: 'accent',
  },
  {
    key: 'eu',
    nummer: 3,
    name: 'EU-Anbieter',
    fuerWen: 'Reguläre Geschäftsnutzung ohne Berufsgeheimnis-Bindung',
    egress: 'Ausschließlich EWR-ansässige Entitäten.',
    modellauswahl: '4 Anbieter (Mistral FR, Nebius NL, NextBit ES, Inceptron SE)',
    zusage: 'Nie außerhalb dieser vier Anbieter — kein Fallback in ein Land ohne EWR-Sitz.',
    caveats: [
      'Nur 4 von 103 im Katalog erreichbaren Anbietern sind EWR-ansässig — schmaler, als der Name vermuten lässt.',
      'Eine EWR-Entität kann eigene Subprozessoren außerhalb der EWR beauftragen — das schränkt nur ein, mit wem wir vertraglich stehen, nicht deren eigene Lieferkette.',
      'Training auf übermittelten Inhalten ist auf dieser Stufe standardmäßig nicht ausgeschlossen — eine EWR-Entität allein ist keine Zusage dazu. Wer das braucht, muss Nicht-Training gesondert verlangen; die Trainingsbedingungen der vier Anbieter sind noch nicht abschließend geklärt.',
    ],
    aktuellErreichbar: true,
    akzent: 'accent',
  },
  {
    key: 'global-audited',
    nummer: 4,
    name: 'Global, protokolliert',
    fuerWen: 'Forschung, Evaluation, nicht-personenbezogene Daten',
    egress: 'Uneingeschränkt — aufgezeichnet, nicht blockiert.',
    modellauswahl: 'Alle verfügbaren Anbieter',
    zusage: 'Jede Anfrage protokolliert und dem tatsächlich antwortenden Anbieter zugeordnet — auch wenn dieser nicht eingeschränkt wird.',
    caveats: [
      'Das ist ein Nachweis, kein Schutz: nichts wird blockiert, das Register hält nur fest, wohin die Daten gingen — nachdem sie schon dort waren.',
      'Ohne dokumentierte Übermittlungsgrundlage nur für nicht-personenbezogene Daten geeignet — protokolliert zu sein macht eine Verarbeitung allein nicht zulässig.',
      'Startet im Beobachtungsmodus: Verstöße werden aufgezeichnet, die Anfrage aber trotzdem bedient, bis eine Allowlist definiert und auf „warn" oder „enforce" umgestellt wird.',
      'Training ist auf dieser Stufe nicht kontrollierbar — kein Feld in der Anfrage drückt das aus; die einzige Kontrolle wäre, Anbieter komplett auszuschließen, was diese Stufe bewusst nicht tut.',
    ],
    aktuellErreichbar: true,
    akzent: 'neutral',
  },
];

export const findStufe = (key: StufeKey): Stufe => STUFEN.find((s) => s.key === key)!;
