import { defineSiteConfig } from '@justinguese/astro-kit/lib/site';

/**
 * Everything that identifies this site. All of it is PUBLIC: it compiles
 * into static HTML. Never put an API key or anything secret here.
 */
/**
 * `name` ist die Marke, und die ist die Domain — nicht „Nachweis".
 *
 * Bis 2026-08-26 hieß die Marke „Nachweis", während die Kopfzeile
 * konforme-ki.de zeigte und derselbe Begriff im Fließtext gleichzeitig das
 * Produktversprechen bezeichnete („Wir liefern beiden den Nachweis"). Damit war
 * für Lesende nicht unterscheidbar, ob „Nachweis" die Firma oder die Prüfspur
 * meint. Der Begriff bleibt überall als Substantiv erhalten — genau das macht
 * ihn stark —, nur als Absender nicht mehr.
 */
export const site = defineSiteConfig({
  name: 'konforme-ki.de',
  legalName: 'DataFortress.cloud GmbH',
  url: 'https://konforme-ki.de',
  description:
    'Drei Wege zur selben Compliance-Schicht — Deutschland-Inferenz, Router oder Sidecar. Nie unterhalb der von Ihnen gewählten Schutzstufe. Exportierbare, hash-verkettete Beweiskette für Datenschutzbeauftragte und Betriebsrat.',
  locale: 'de_DE',
  lang: 'de',
  address: {
    streetAddress: 'Gewerbestraße 13',
    postalCode: '82064',
    addressLocality: 'Straßlach-Dingharting',
    addressCountry: 'DE',
  },
  areaServed: 'Deutschland',

  ga4Id: 'G-S1XYB7MX9M',
  metaPixelId: '1590666016030768',
  formspreeId: 'maewgpzk',

  /**
   * Formulare laufen über die eigene Funnel-API statt über Formspree.
   *
   * Damit liegen Kontaktdaten nicht mehr bei einem US-Dienstleister, und jede
   * Einsendung feuert serverseitig eine Conversion — was der Browser-Pixel
   * hinter dem Cookie-Banner für einen großen Teil des Traffics nicht kann.
   * `formspreeId` bleibt als Rückfallebene stehen: ein Formular, das
   * `formsBase` nicht durchreicht, geht weiterhin an Formspree statt ins Leere.
   *
   * `PUBLIC_FORMS_BASE` überschreibt das zur Build-Zeit, damit man lokal gegen
   * eine laufende Funnel-API testen kann, ohne echte Einsendungen zu erzeugen.
   */
  formsBase:
    import.meta.env.PUBLIC_FORMS_BASE ||
    'https://ecommerce-api.datafortress.cloud/v1/forms/konforme-ki',

  privacyHref: '/datenschutz',
});

/**
 * Einheitlicher API-Hostname. Vorher liefen `/integrationen` und
 * `/deutschland-inferenz` mit zwei verschiedenen Namen (`gateway.` bzw. `api.`) für
 * denselben Endpunkt — hier auf einen konsolidiert.
 */
export const API_HOST = 'api.konforme-ki.de';
export const apiUrl = (path: string) => `https://${API_HOST}${path}`;

/**
 * Die Funnel-API: Formulare, Verteiler und Checkout für alle Properties.
 *
 * Bewusst ein anderer Host als `API_HOST`. Der ist der Inferenz-Endpunkt —
 * `/v1/chat/completions`, den `werkzeuge.ts` in Code-Beispiele zum Kopieren
 * druckt. Marketing-Endpunkte auf demselben Hostnamen wären die falsche Naht:
 * beides sind „die API", aber sie gehören verschiedenen Diensten.
 */
export const MARKETING_HOST = 'ecommerce-api.datafortress.cloud';
export const marketingUrl = (path: string) => `https://${MARKETING_HOST}${path}`;

/** Schlüssel dieser Website in der Funnel-Registry (`sites.yaml`). */
export const FUNNEL_SITE = 'konforme-ki';
