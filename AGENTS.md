# pflegenachweis.de — Compliance sales funnel

German-only, single-page B2B lead-gen funnel (Astro + Tailwind v4, static site on GitHub Pages, no backend). Target audience: ambulante Pflegedienste, stationäre Pflege, MVZ, Arztpraxen dealing with Pflegegrad-Prüfungen, §275 SGB V Abrechnungsprüfungen, and Prüfanfragen.

Business context and the full funnel/copy spec live in `MARKETING.md` at the repo root — read it before making content changes.

## Structure

- `src/pages/index.astro` — the entire funnel, single file, 8 sections (hero → drei Szenarien → Vergleichstabelle → so funktioniert es → was es nicht ist → die drei Stufen → takeaway → footer via layout).
- `src/pages/kontakt.astro` — secondary contact form, reached only via Stufe 2/3 CTAs (`?interesse=stufe2|stufe3`), not linked from nav.
- `src/pages/{impressum,datenschutz,agb,rdg-hinweis}.astro` — legal pages, render markdown from `src/content/legal/*.md` via Astro content collections.
- `src/layouts/Site.astro` — shared shell: head/meta/OG, GA4 + Meta Pixel base install, cookie banner, sticky mobile CTA. Nav is intentionally minimal (logo + one CTA) — the funnel has exactly one CTA, repeated identically at three points on the page; don't add nav links or dropdowns back in.
- `src/components/BlockAForm.astro` / `BlockBForm.astro` — the two-step progressive lead-gate (POST to Formspree, client-side reveal on redirect query param, no real backend). See MARKETING.md for what each question is for.
- `src/components/StufenLadder.astro` — the €0 / €390 / €1.900 pricing ladder. Stufe 1's CTA is the repeated primary CTA; Stufe 2/3 are secondary text links to `/kontakt`.
- `public/downloads/*.md` — the Stufe-1 deliverables (§203-Mustervereinbarung, Muster-AVV, MDR-Abgrenzungsnotiz). These are first-draft templates flagged "Entwurf — vor Verwendung juristisch prüfen" — don't remove that disclaimer.

## Conventions

- **No i18n.** The site is German-only (`lang="de"` hardcoded). Don't reintroduce locale routing.
- **Lead capture is Formspree-only**, no custom backend. Gating (revealing Stufe-1 downloads / demo) is a client-side query-param check after a Formspree redirect — this can be bypassed by hand-editing the URL; that's an accepted limitation of the static-site approach, not a bug to fix with more client JS.
- **Event tracking**: GA4 events per funnel step (`block_a_submit`, `stufe1_viewed`, `block_b_submit`, `demo_unlocked`, `stufe2_cta_click`, `stufe3_cta_click`, `generate_lead`) — keep these names stable, they're read out of GA4 manually to compute funnel conversion.
- **Formspree IDs** are read from `PUBLIC_FORMSPREE_BLOCK_A_ID` / `PUBLIC_FORMSPREE_BLOCK_B_ID` / `PUBLIC_FORMSPREE_KONTAKT_ID` env vars (see `.env.example`) — three distinct endpoints, not one shared form.
- **Legal accuracy matters here.** This business handles §203 StGB-relevant documents; changes to `datenschutz.md`, `agb.md`, `rdg-hinweis.md`, or the retention period should be treated as legal content, not marketing copy — flag material changes rather than silently editing.

## Deploy

GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`, `withastro/action@v6`), triggered on push to `main`.
