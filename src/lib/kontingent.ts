/**
 * Kontingent — die Verknappung auf der Startseite.
 *
 * Zwei bewusste Entscheidungen:
 *
 * 1. KEIN automatisch hochlaufender Fake-Zähler. Zugangsschlüssel werden
 *    tatsächlich manuell vergeben, die Knappheit ist also echt und die Zahl
 *    muss nur gepflegt werden. Ein erfundener Countdown wäre nach § 5 UWG
 *    angreifbar — eine tatsächlich begrenzte Vergabe ist es nicht.
 *
 * 2. KEIN konkreter Monat oder Datum. Die Seite ist statisch und wird nicht
 *    bei jedem Aufruf neu gebaut: „August 2026" wäre im September schlicht
 *    falsch und würde die Verknappung unglaubwürdig machen. „Pro Monat" und
 *    „diesen Monat" gelten dagegen zu jedem Zeitpunkt. Wer je ein konkretes
 *    Datum anzeigen will, muss es clientseitig aus `new Date()` erzeugen —
 *    nicht hier hartkodieren.
 *
 * Pflege: `vergeben` nach jeder Vergaberunde anpassen.
 */
export const KONTINGENT = {
  plaetze: 20,
  vergeben: 13,
} as const;

export const frei = KONTINGENT.plaetze - KONTINGENT.vergeben;
export const belegtProzent = Math.round((KONTINGENT.vergeben / KONTINGENT.plaetze) * 100);
