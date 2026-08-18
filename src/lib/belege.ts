/**
 * Belege — Sozialer Nachweis.
 *
 * ACHTUNG — rechtlich relevant, nicht nur Marketing:
 * Erfundene Kundenstimmen sind in Deutschland wettbewerbswidrig
 * (§ 5 Abs. 1 UWG, irreführende geschäftliche Handlung; seit Umsetzung der
 * Omnibus-Richtlinie zusätzlich § 5b Abs. 3 UWG zur Kennzeichnung von
 * Bewertungen). Für ein Compliance-Produkt wäre eine erfundene Referenz
 * außerdem der teuerste denkbare Glaubwürdigkeitsschaden — deshalb gibt es
 * hier bewusst keine Kundenzitate, solange keine echten, freigegebenen
 * vorliegen. Sobald welche freigegeben sind: als eigenes, einzeln
 * geprüftes Modul ergänzen, nie als Platzhalter mit erfundenen Namen.
 */

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
