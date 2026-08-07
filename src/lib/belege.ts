/**
 * Belege — Sozialer Nachweis (Stimmen, Zahlen, Siegel).
 *
 * ACHTUNG — rechtlich relevant, nicht nur Marketing:
 * Erfundene Kundenstimmen sind in Deutschland wettbewerbswidrig
 * (§ 5 Abs. 1 UWG, irreführende geschäftliche Handlung; seit Umsetzung der
 * Omnibus-Richtlinie zusätzlich § 5b Abs. 3 UWG zur Kennzeichnung von
 * Bewertungen). Für ein Compliance-Produkt wäre eine erfundene Referenz
 * außerdem der teuerste denkbare Glaubwürdigkeitsschaden.
 *
 * Deshalb: jede Stimme trägt `platzhalter`. Solange auch nur eine davon
 * `true` ist, blendet `Belege.astro` einen sichtbaren Platzhalter-Hinweis ein
 * und der Abschnitt wird auf `noindex`-Ebene nicht als Referenz ausgezeichnet
 * (kein Review-Schema). Vor dem Livegang: echte, freigegebene Zitate
 * eintragen und `platzhalter` auf `false` setzen — oder den Eintrag löschen.
 */

export interface Stimme {
  zitat: string;
  person: string;
  rolle: string;
  ort: string;
  /** true = erfunden, nur für Prototyp/Layout. Muss vor Livegang weg. */
  platzhalter: boolean;
}

export const STIMMEN: Stimme[] = [
  {
    zitat:
      'Unser Datenschutzbeauftragter hat KI zweimal abgelehnt. Beim dritten Anlauf haben wir ihm den Export einer einzelnen Anfrage vorgelegt — mit Subprozessor, Rechenzentrum und Hash. Die Freigabe kam in derselben Woche.',
    person: 'Dr. M. Reinhardt',
    rolle: 'Partner, Steuerberatungskanzlei',
    ort: 'München',
    platzhalter: true,
  },
  {
    zitat:
      'Entscheidend war nicht, dass die Inferenz in der EU läuft — das behaupten alle. Entscheidend war, dass ich es pro Anfrage belegen kann, ohne den Anbieter fragen zu müssen.',
    person: 'S. Ahrens',
    rolle: 'Fachanwältin für Medizinrecht',
    ort: 'Hamburg',
    platzhalter: true,
  },
  {
    zitat:
      'Wir haben mit dem Freigabedossier angefangen, weil wir intern erst einmal Papier brauchten. Das Compliance-Abo kam vier Wochen später, als klar war, dass es trägt.',
    person: 'T. Kowalski',
    rolle: 'Verwaltungsleitung MVZ',
    ort: 'Leipzig',
    platzhalter: true,
  },
];

export const enthaeltPlatzhalter = STIMMEN.some((s) => s.platzhalter);

/**
 * Belastbare Aussagen ohne erfundene Zahlen. Diese vier sind Eigenschaften
 * des Produkts bzw. des Unternehmens und damit heute schon nachprüfbar —
 * im Gegensatz zu Kundenzahlen, die wir (noch) nicht haben.
 */
export const SIEGEL: { wert: string; label: string }[] = [
  { wert: '4', label: 'geprüfte EU-Subprozessoren, namentlich gelistet' },
  { wert: '0', label: 'Tage Retention, kein Training auf Ihren Daten' },
  { wert: '5', label: 'Unterlagen ungated herunterladbar, ohne E-Mail' },
  { wert: 'DE', label: 'Anbieter mit Sitz und Gerichtsstand in Deutschland' },
];
