/**
 * Mittelstand-Angebot: drei Produktlinien mit je drei Stufen. Einzige Quelle
 * für Preise und Leistungen — Landingpage, Unterseiten und Footer lesen hier.
 *
 * Feldnamen deutsch wie in `preise.ts`. Die Preise sind die Ankerpreise aus dem
 * Angebot; „Website-Reparatur“ und „Rechtssicher-Abo“ nennen Spannen, weil der
 * Aufwand vom Befund abhängt. Nichts hier ist eine Kennzahl oder ein Kundenwort.
 */
import type { Tier } from '@justinguese/astro-kit/lib/pricing';

export type MittelstandId = 'website' | 'digitales-buero' | 'rechtssicher-online';

export interface MittelstandStufe {
  tarifId: string;
  name: string;
  preis: string;
  einheit: string;
  leistungen: string[];
  hervorgehoben?: boolean;
}

export interface MittelstandProdukt {
  id: MittelstandId;
  href: string;
  name: string;
  eyebrow: string;
  /** Der eine Satz, mit dem das Produkt verkauft wird. */
  einzeiler: string;
  problem: string;
  einstieg: string;
  einstiegPreis: string;
  schritte: { titel: string; text: string }[];
  stufen: MittelstandStufe[];
  faq: { q: string; a: string }[];
  /** Was die Unterseite als Hauptaktion zeigt. */
  aktion: 'check' | 'rueckruf';
  aktionLabel: string;
}

export const PRODUKTE_MITTELSTAND: MittelstandProdukt[] = [
  {
    id: 'website',
    href: '/mittelstand/website',
    name: 'Ihre Website',
    eyebrow: 'Website',
    einzeiler: 'Kunden finden Sie bei Google. Ohne Website rufen sie den Nächsten an.',
    problem:
      'Wer nach „Klempner Augsburg“ oder „Steuerberater in meiner Nähe“ sucht, entscheidet in Sekunden. Ohne Website oder mit einer, die am Handy nicht funktioniert, landet der Anruf beim Nächsten in der Liste.',
    einstieg: 'Website Start',
    einstiegPreis: '€0 Aufbau + €49/Monat',
    schritte: [
      { titel: 'Sie schicken uns Ihre Eckdaten', text: 'Firmenname, Leistungen, Einsatzgebiet, Telefonnummer. Fotos, wenn Sie welche haben.' },
      { titel: 'Wir bauen die Seite', text: 'Bei Website Start an einem Tag. Sie sehen den Entwurf, bevor er online geht.' },
      { titel: 'Sie werden gefunden', text: 'Mobil nutzbar, mit Kontaktbutton und Google-Maps-Link. Änderungen laufen über uns.' },
    ],
    stufen: [
      {
        tarifId: 'website-start',
        name: 'Website Start',
        preis: '€0 Aufbau + €49',
        einheit: 'pro Monat',
        leistungen: ['Einseiten-Website, an einem Tag gebaut', 'Für das Handy optimiert', 'Kontaktbutton', 'Google-Maps-Link'],
      },
      {
        tarifId: 'website-plus',
        name: 'Website Plus',
        preis: '€99',
        einheit: 'pro Monat',
        leistungen: [
          'Mehrere Seiten: Leistungen, Einsatzgebiet, Preise',
          'Online-Kontaktformular',
          'Google-Bewertungs-Widget',
          'Kleine Änderungen jeden Monat',
          'Rechtssicher-Abo inklusive',
        ],
        hervorgehoben: true,
      },
      {
        tarifId: 'website-pro',
        name: 'Website Pro',
        preis: '€199',
        einheit: 'pro Monat',
        leistungen: [
          'Online-Terminbuchung',
          'Lokale SEO-Seiten, z. B. „Klempner Augsburg“',
          'Bewertungen einsammeln',
          'Monatsbericht: so viele Anfragen kamen rein',
          'Rechtssicher-Abo inklusive',
        ],
      },
    ],
    faq: [
      { q: 'Muss ich etwas Technisches tun?', a: 'Nein. Sie liefern Eckdaten, wir bauen und betreiben die Seite. Hosting steht im Monatspreis.' },
      { q: 'Wie schnell ist die Seite online?', a: 'Website Start bauen wir an einem Tag. Bei mehr Seiten hängt es davon ab, wie schnell Texte und Fotos bei uns ankommen.' },
      { q: 'Was passiert, wenn ich kündigen will?', a: 'Sie zahlen monatlich. Die genauen Kündigungsfristen stehen in den AGB, bevor Sie etwas bestellen.' },
      { q: 'Was heißt „Rechtssicher-Abo inklusive“?', a: 'Ab Website Plus prüfen wir Ihre Seite laufend technisch auf Cookie-Banner, Impressum, Datenschutzerklärung und KI-Kennzeichnung. Das ist eine technische Prüfung, keine Rechtsberatung.' },
    ],
    aktion: 'rueckruf',
    aktionLabel: 'Website Start anfragen',
  },
  {
    id: 'digitales-buero',
    href: '/mittelstand/digitales-buero',
    name: 'Ihr digitales Büro',
    eyebrow: 'Telefon-Assistent',
    einzeiler: 'Sie stehen auf der Baustelle, wir gehen ans Telefon.',
    problem:
      'Wer auf der Baustelle, in der Werkstatt oder beim Kunden ist, verpasst Anrufe. Der Anrufer versucht es selten ein zweites Mal, er ruft den Nächsten an.',
    einstieg: 'Rückruf-Retter',
    einstiegPreis: '€79/Monat',
    schritte: [
      { titel: 'Anruf verpasst', text: 'Sie konnten nicht rangehen. Das passiert.' },
      { titel: 'Der Anrufer bekommt sofort eine Nachricht', text: 'Per SMS oder WhatsApp: „Wir melden uns gleich.“ Der Anruf wird protokolliert.' },
      { titel: 'Sie rufen zurück, wenn es passt', text: 'Mit Nummer und Uhrzeit im Protokoll. Ab Telefon-Assistent nimmt die KI das Anliegen gleich auf.' },
    ],
    stufen: [
      {
        tarifId: 'rueckruf-retter',
        name: 'Rückruf-Retter',
        preis: '€79',
        einheit: 'pro Monat',
        leistungen: ['Verpasster Anruf → automatische SMS/WhatsApp', '„Wir melden uns gleich“', 'Anrufer wird protokolliert'],
      },
      {
        tarifId: 'telefon-assistent',
        name: 'Telefon-Assistent',
        preis: '€199',
        einheit: 'pro Monat',
        leistungen: [
          'KI nimmt Anrufe rund um die Uhr an',
          'Nimmt die Auftragsdetails auf',
          'Bucht Termine',
          'Schickt Ihnen eine Zusammenfassung',
        ],
        hervorgehoben: true,
      },
      {
        tarifId: 'buero-komplett',
        name: 'Büro-Komplett',
        preis: '€349',
        einheit: 'pro Monat',
        leistungen: [
          'Telefon und E-Mail werden automatisch beantwortet',
          'Anfragen und Terminwünsche werden sortiert',
          'Notfälle gehen direkt auf Ihr Handy',
        ],
      },
    ],
    faq: [
      { q: 'Merkt der Anrufer, dass er mit einer KI spricht?', a: 'Er erfährt es gleich in der Begrüßung. Der KI-Hinweis (Art. 50 KI-Verordnung) ist immer eingebaut.' },
      { q: 'Wo werden die Daten verarbeitet?', a: 'Auf Servern in der EU.' },
      { q: 'Was ist, wenn es ein Notfall ist?', a: 'Bei Büro-Komplett leiten wir Notfälle direkt auf Ihr Handy weiter.' },
      { q: 'Muss ich meine Telefonnummer wechseln?', a: 'Wir klären im Rückruf, wie wir an Ihre bestehende Nummer anschließen. Für den Rückruf-Retter reicht in der Regel eine Rufumleitung bei Nichtannahme.' },
    ],
    aktion: 'rueckruf',
    aktionLabel: 'Rückruf-Retter anfragen',
  },
  {
    id: 'rechtssicher-online',
    href: '/mittelstand/rechtssicher-online',
    name: 'Rechtssicher online',
    eyebrow: 'Website-Prüfung',
    einzeiler: 'Wir prüfen kostenlos, ob Ihre Website in Ordnung ist. Ein Ampelbericht zeigt es Ihnen.',
    problem:
      'Ein fehlender Impressumseintrag, ein Cookie-Banner, das nichts blockiert, oder ein KI-Chatbot ohne Kennzeichnung: Abmahnungen kosten schnell 1.000 € und mehr. Die meisten Fehler lassen sich vorher finden.',
    einstieg: 'Website-Check',
    einstiegPreis: 'kostenlos',
    schritte: [
      { titel: 'Sie geben Ihre Adresse ein', text: 'Nur die Web-Adresse und Ihre E-Mail. Ohne Anmeldung.' },
      { titel: 'Wir prüfen technisch', text: 'Cookie-Banner, Impressum, Datenschutzerklärung, Kennzeichnung von KI-Chatbots.' },
      { titel: 'Sie bekommen den Ampelbericht', text: 'Grün, gelb oder rot je Punkt. Bei gelb und rot bieten wir die Reparatur an, Sie müssen nicht.' },
    ],
    stufen: [
      {
        tarifId: 'website-check',
        name: 'Website-Check',
        preis: 'Kostenlos',
        einheit: 'einmalig',
        leistungen: ['Cookie-Banner', 'Impressum', 'Datenschutzerklärung', 'Kennzeichnung von KI-Chatbots', 'Ampelbericht grün / gelb / rot'],
      },
      {
        tarifId: 'website-reparatur',
        name: 'Website-Reparatur',
        preis: '€290–490',
        einheit: 'einmalig, je nach Befund',
        leistungen: ['Wir beheben alles, was im Check gelb oder rot war', 'Sie bekommen vorher einen Festpreis'],
        hervorgehoben: true,
      },
      {
        tarifId: 'rechtssicher-abo',
        name: 'Rechtssicher-Abo',
        preis: '€39–79',
        einheit: 'pro Monat',
        leistungen: [
          'Monatliche Überwachung',
          'Aktualisierung, wenn sich Vorgaben ändern',
          'Nachweis-Dokument, falls eine Abmahnung oder ein Behördenschreiben kommt',
          'Inklusive ab Website Plus',
        ],
      },
    ],
    faq: [
      { q: 'Ist das Rechtsberatung?', a: 'Nein. Wir prüfen technisch und setzen um. Rechtsberatung darf nur ein Anwalt leisten. Details im RDG-Hinweis.' },
      { q: 'Kann ich nach dem Check einfach nichts tun?', a: 'Ja. Der Bericht gehört Ihnen. Die Reparatur ist ein Angebot.' },
      { q: 'Was passiert mit meiner E-Mail-Adresse?', a: 'Wir senden Ihnen den Bericht und melden uns einmal dazu. Mehr steht in der Datenschutzerklärung.' },
      { q: 'Was ist das Nachweis-Dokument?', a: 'Eine Zusammenstellung, welche Prüfungen wann an Ihrer Website gelaufen sind. Sie können es vorlegen, wenn ein Schreiben kommt.' },
    ],
    aktion: 'check',
    aktionLabel: 'Website kostenlos prüfen',
  },
];

export const findMittelstand = (id: MittelstandId): MittelstandProdukt => {
  const p = PRODUKTE_MITTELSTAND.find((x) => x.id === id);
  if (!p) throw new Error(`Unbekanntes Mittelstand-Produkt: ${id}`);
  return p;
};

/** Adapter auf den Tier-Typ des Kits (`PricingCards`). */
export const stufeAlsTier = (s: MittelstandStufe, cta: { label: string; href: string }): Tier => ({
  id: s.tarifId,
  name: s.name,
  price: s.preis,
  priceNote: s.einheit,
  features: s.leistungen,
  highlight: s.hervorgehoben,
  cta,
});

/** Die drei Wege, wie die Landingpage sie zeigt: nur der Einstieg, nicht die Leiter. */
export const WEGE = [
  { id: 'website' as const, frage: 'Noch keine Website?', antwort: 'Website Start', preis: '€0 Aufbau + €49/Monat' },
  { id: 'rechtssicher-online' as const, frage: 'Schon eine Website?', antwort: 'Kostenloser Website-Check', preis: 'kostenlos' },
  { id: 'digitales-buero' as const, frage: 'Anrufe gehen verloren?', antwort: 'Rückruf-Retter', preis: '€79/Monat' },
];

export const CHECK_PUNKTE = [
  { schluessel: 'cookie', name: 'Cookie-Banner', frage: 'Blockiert das Banner Tracker, bis jemand zustimmt?' },
  { schluessel: 'impressum', name: 'Impressum', frage: 'Ist es auffindbar und vollständig?' },
  { schluessel: 'datenschutz', name: 'Datenschutzerklärung', frage: 'Ist sie da und von jeder Seite erreichbar?' },
  { schluessel: 'ki', name: 'KI-Chatbot', frage: 'Ist er als KI gekennzeichnet?' },
] as const;
