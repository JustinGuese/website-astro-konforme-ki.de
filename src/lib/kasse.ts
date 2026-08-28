import { FUNNEL_SITE, marketingUrl } from '../config/site';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export type CheckoutResult = { ok: true } | { ok: false; message: string };

/**
 * Startet eine Stripe-Checkout-Session für `produkt` und leitet dorthin
 * weiter. `event_id` wird auch an den Browser-Pixel gegeben, damit Meta den
 * clientseitigen und den serverseitigen InitiateCheckout dedupliziert, statt
 * zwei Conversions zu zählen.
 */
export async function startCheckout(produkt: string): Promise<CheckoutResult> {
  const eventId = crypto.randomUUID();
  const fbp = readCookie('_fbp');
  const fbc = readCookie('_fbc');

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', { content_name: produkt }, { eventID: eventId });
  }

  let response: Response;
  try {
    response = await fetch(marketingUrl('/v1/checkout/session'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        site: FUNNEL_SITE,
        produkt,
        event_id: eventId,
        fbp,
        fbc,
        page: window.location.href,
      }),
    });
  } catch {
    return { ok: false, message: 'Verbindung zum Server fehlgeschlagen. Bitte versuchen Sie es erneut.' };
  }

  if (!response.ok) {
    const message =
      response.status === 404
        ? 'Dieses Produkt ist derzeit nicht über den Kauf-Assistenten verfügbar.'
        : 'Checkout ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.';
    return { ok: false, message };
  }

  const data = (await response.json()) as { url: string };
  window.location.href = data.url;
  return { ok: true };
}
