Fine — the funnel can answer the ingestion question. It just costs €8k instead of two weeks. Building it so the questionnaire actually extracts that answer is the whole design job below.

## Page structure

| #   | Section                                                                                      | Purpose             |
| --- | -------------------------------------------------------------------------------------------- | ------------------- |
| 1   | Hero + headline + one CTA                                                                    | Hook                |
| 2   | Drei Szenarien (Pflegegrad-Prüfung, §275 SGB V Abrechnungsprüfung, Stellungnahmen mit Frist) | Recognition         |
| 3   | Vergleichstabelle                                                                            | Differentiation     |
| 4   | So funktioniert es — 3 Schritte, mit Art. 26 AI Act / §630a BGB Hinweis                      | Expectation-setting |
| 5   | **Was es NICHT ist**                                                                         | Trust engine        |
| 6   | Die drei Stufen (pricing ladder)                                                             | Conversion          |
| 7   | Takeaway-Banner: _"Die Software macht die Arbeit schnell. Der Vertrag macht sie erlaubt."_   | Close               |
| 8   | Impressum, Datenschutzerklärung, RDG-Hinweis                                                 | Legal + credibility |

One CTA above the fold, repeated at sections 4 and 6. Nothing else clickable.

## The product ladder

|                    | **Kostenlose Starthilfe**                                                                              | **Stufe 1 — KI-Prüfvorbereitung**                                                                                                       | **Stufe 2 — Human-Check-Paket**                                                                                                        | **Stufe 3 — Compliance- & Workflow-Check**                                                                                                             |
| ------------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Preis              | €0                                                                                                     | **3 Fälle kostenlos, dann €49/Fall**                                                                                                   | **€390 (5 Fälle inkl. Pflegefachkraft-Review, ~€78/Fall)**                                                                             | **€1.900**                                                                                                                                             |
| Was sie bekommen   | §203-Muster­vereinbarung, Muster-AVV, 1-Seiten MDR-Abgrenzungsnotiz | Sie laden eine geschwärzte Prüfanfrage hoch, erhalten in ~5 Werktagen einen KI-Entwurf mit Quellenverweisen. Sie prüfen & versenden. | Dasselbe wie Stufe 1, **plus** Prüfung durch registrierte Pflegefachkraft pro Fall. Bundle, 6 Monate gültig.                         | Vor-Ort/Remote-Audit: Posteingang, Export­wege aus dem Pflegedoku-System, §203/AVV-Reife, MDR-Einordnung, ROI-Rechnung, **5 bearbeitete Prüfanfragen** |
| Gate               | Block A (Firmenidentifikation)          | Block A + Block B (Ingestion-Fragen) + Fall hochladen                                                                                  | Kontaktformular mit Interesse=stufe2, Vorkasse                                                                                       | Kontaktformular mit Interesse=stufe3, Rechnung                                                                                                       |
| Was **Sie** lernen | Marktgröße, Systemlandschaft            | **Echte Prüfanfragen + echte Ingestion-Realität + erste Arbeitsersparnis**                                                             | Skalierbarkeit der KI-Lösung + Qualitätssicherung                                                                                     | Ob ein Pilot (€8–15k) wirtschaftlich machbar ist                                                                                                       |

Three design decisions worth naming:

- **Kostenlose Starthilfe gives unsigned Muster, not an executed contract.** No criminal obligation because you haven't signed anything. That unblocks immediate adoption.
- **Stufe 1 is the core product and is payable per-case after 3 free.** The first 3 free cases hand you real ingestion problems at zero friction. Each paid case (€49, invoice on delivery) trains you on the workflow; most customers will naturally upsell to Stufe 2 once they see the margin.
- **Stufe 2 is the quality layer** (5-case bundle, €78/case effective, 6-month window). De-risks bigger cases for customers who've learned the workflow. Stufe 3 is the gate to the €8–15k pilot.

## The onboarding questionnaire

Progressive: 3 questions to unlock Stufe 1, 3 more to unlock the demo. Never more than 6 total.

**Block A — before the download**

1. Einrichtungsart? _ambulanter Pflegedienst / stationäre Pflege / MVZ / Arztpraxis / sonstige_
2. Prüfanfragen pro Monat? _0–5 / 6–20 / über 20_
3. Wer beantwortet sie heute? _GF / PDL / QMB / externe Beratung_

**Block B — before the demo**

4. Wie kommen Prüfanfragen bei Ihnen an? _Post / Fax / E-Mail / Kassenportal / gemischt_
5. In welchem System liegt Ihre Pflegedokumentation? _MediFox / Vivendi / Snap / DAN / Papier / anderes_
6. Können Sie daraus einzelne Vorgänge als PDF exportieren? _ja / nein / weiß ich nicht_

**What each buys you:** Q2 sizes the market. Q3 identifies the actual buyer — if the answer is mostly "externe Beratung," you're competing with a consultant, not with manual work, and the pitch changes. **Q4 + Q5 + Q6 are the ingestion question.** If "weiß ich nicht" dominates Q6, your onboarding cost is unknowable and the pilot must be priced defensively.

## Flow

```
Ad → Landing Page
      └─ CTA: "KI-Prüfvorbereitung kostenlos ausprobieren"
           ├─ Kostenlose Starthilfe (separate path)
           │    └─ Block A (3 Fragen) → Vorlagen heruntergeladen
           │
           └─ Stufe 1 — KI-Prüfvorbereitung (primary path)
                └─ Block A (3 Fragen) + Block B (3 Fragen)
                     └─ Fall hochladen & verarbeiten (3 kostenlos)
                          ├─ Fall 1–3: €0 (Ingestion-Lernen)
                          │
                          ├─ Fall 4+: €49/Fall (zahlbar per Rechnung)
                          │    └─ Angebot Stufe 2: Human-Check-Paket (€390, 5 Fälle)
                          │
                          └─ Angebot Stufe 3: Compliance & Workflow Check (€1.900)
                               └─ Pilot (€8–15k)
```

## Instrument these four numbers

1. Cost per completed Block A
2. Block A → Block B completion rate _(if this collapses, the demo isn't worth 3 more questions)_
3. Stufe 1 → Stufe 2 paid conversion — **the number that matters**
4. Q6 answer distribution

## Kill criteria

- **€4k spent, <20 completed Block A** → message is wrong, rewrite before scaling
- **€8k spent, 0 paid Stufe 2** → stop
- **≥60% answer "nein" or "weiß ich nicht" on Q6** → the product doesn't work at these customers regardless of demand; that's a pivot signal, not a marketing one

Two technical notes: static HTML or Astro, not Flutter. And the questionnaire must post to your own backend, not a LinkedIn Lead Gen Form — Lead Gen Forms are cheaper per lead but won't carry six custom questions, and the answers are the actual product of this phase.
