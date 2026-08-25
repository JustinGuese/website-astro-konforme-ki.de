/** `2026-08-07` -> `7. August 2026`. UTC pinned so a date-only ISO string never shifts a day from the local timezone. */
export function formatDeDatum(iso: string): string {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
