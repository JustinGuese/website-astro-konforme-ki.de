import { defineSiteConfig } from '@justinguese/astro-kit/lib/site';

/**
 * Everything that identifies this site. All of it is PUBLIC: it compiles
 * into static HTML. Never put an API key or anything secret here.
 */
export const site = defineSiteConfig({
  name: 'Nachweis',
  legalName: 'DataFortress.cloud GmbH',
  url: 'https://konforme-ki.de',
  description:
    'Sidecar-Prüfspur über Ihre bestehende KI — oder gehostete EU-Inferenz. Exportierbare, hash-verkettete Beweiskette für Datenschutzbeauftragte und Betriebsrat. Kein US-Fallback, kein Training auf Ihren Daten.',
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

  privacyHref: '/datenschutz',
});
