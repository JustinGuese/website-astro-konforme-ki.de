# Nachweis (konforme-ki.de) — business plan

## The niche

EU-hosted inference is already a commodity: Lyceum, IONOS, SimpleLLM, Berget, Cortecs, EUrouter, Infercom, Nebius, Scaleway, Mistral, regolo and others all sell tokens from EU datacenters with a PDF AVV. We don't compete on tokens, price, or "sovereign" — sovereignty is an objection-handler, not a buying trigger, and none of these fifteen-plus providers will ever build the thing that actually unblocks a Datenschutzbeauftragter: **a per-request, exportable proof trail.**

That's the product. Per request: model, sub-processor, datacenter region, retention flag, token count, timestamp, hash. Auto-generated Art. 30 VVT entry. AI Act Art. 12 logging shape. One-click signed export, PDF + CSV. Infra companies won't build this — it's compliance UX, not infra. That's the moat, and it's application-layer work.

Positioning: **„Der KI-Endpunkt, der Ihrem Datenschutzbeauftragten die Freigabe schreibt."**

## One vertical, not three

Automotive is a trap (TISAX, 12–24-month cycles, OEMs building in-house). Banking under DORA fails a one-person GmbH at vendor due diligence. **§ 203 StGB Berufsgeheimnisträger** — Ärzte, Kanzleien, Steuerberater, Notare, Psychotherapeuten, Pflegedienste — is the one open lane: a real, narrow, unserved, _legally forced_ buyer. They cannot legally use most AI tooling without a §203-compliant processor arrangement. That's the entire wedge; don't dilute it with broad "German Mittelstand CTO" copy.

## Upstreams — and the mistake that would kill the AVV

OpenRouter cannot be the backend. It's US infrastructure with a two-hop path (client → OpenRouter → downstream provider); `eu.openrouter.ai` is enterprise-only, contract-gated, and a vendor self-assertion rather than an audited fact. Naming "OpenRouter Inc., US" in a sub-processor list to a bank or Klinik is disqualifying on the first read.

Fixed upstream list, all EU-jurisdictional with real AVVs, all self-serve: **Scaleway, IONOS AI Model Hub, Mistral AI, OVHcloud AI Endpoints.** Fail closed — no fallback outside this list. If none of them can serve a request, the request fails; it is never silently rerouted outside the EU list. This is demonstrated live in the playground (the "was passiert bei einem US-Modell?" prompt).

## MVP stack

| Piece     | Choice                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Gateway   | LiteLLM proxy on k8s. OpenAI-compatible, key mgmt + budgets + logging built in.                                                                                                      |
| Upstreams | Scaleway + IONOS + Mistral + OVHcloud, fail closed                                                                                                                                   |
| Logging   | Postgres, append-only, hash-chained — this _is_ the product                                                                                                                          |
| Landing   | Astro/static, German only (this repo)                                                                                                                                                |
| Signup    | Formspree waitlist → manual key issuance, honest "binnen 24h" copy, not a fake `<60s` claim until the automation actually exists                                                     |
| Trial     | 5M free tokens, no card                                                                                                                                                              |
| Legal     | AVV + TOM + Subprozessorenliste + §203-Zusatzvereinbarung + VVT-Muster as downloadable Markdown, **ungated, before signup** — the DSB downloading the AVV is the qualification event |

## Business model

Don't sell tokens — price them at cost + 15 % and say so on the page ("Wir verdienen nicht an Ihren Token"). Revenue is the compliance layer:

- **Frei** — €0, 5M tokens, EU routing, browser log view, no card
- **Compliance — €290/Monat** — signed audit exports, Art. 30 VVT entry, sub-processor change notifications, countersigned AVV, §203-Zusatzvereinbarung
- **Onboarding — €1.900–9.000 einmalig** — §203-/DSGVO-Machbarkeits-Check + integration. Paid. This is the only real validation signal.

Margin doesn't depend on self-hosting — Hetzner/Contabo GPUs would cost more per token than Scaleway's serverless plus add ops burden. Only self-host once a signed customer requires dedicated hardware and pays for it.

## De-risking the biggest assumption

The biggest risk: building a gateway and discovering the buyer wanted a finished application, not an endpoint. That's why the **Sidecar** offer exists (see homepage, section 9) — the compliance-log product as a sidecar next to a customer's _existing_ Azure OpenAI usage, same value prop, zero inference cost. If that converts and the full gateway doesn't, the paperwork was the product all along, and that's a two-week finding instead of an eight-week one.

## Page structure (this repo)

| #    | Route/Section                                                                                                                               | Purpose                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1–14 | `/` (hero → problem → nachweis → playground → export → eu → für-wen → integrationen → sidecar → preise → nicht → unterlagen → zugang → faq) | Full argument, single scroll, one signature element (the hash-chain rail) threading every section |
| —    | `/playground`                                                                                                                               | Scripted (no-backend) proof that the Nachweis-Panel is real, incl. the fail-closed US-model demo  |
| —    | `/integrationen`                                                                                                                            | Channel status + the `base_url`-swap pitch to a CTO                                               |
| —    | `/eu-ki-recht`                                                                                                                              | AI Act / DSGVO / §203 explainer, the SEO/authority page                                           |
| —    | `/preise`                                                                                                                                   | The three tiers, spelled out                                                                      |
| —    | `/unterlagen`                                                                                                                               | The lead magnet — ungated                                                                         |
| —    | `/kontakt`                                                                                                                                  | Secondary, reached via `?interesse=`                                                              |

## Instrument these numbers

1. `file_download` events per document under `/unterlagen` — the primary top-of-funnel signal (a downloaded AVV means a DSB is evaluating you)
2. Zugang-form submissions (`generate_lead`, `form_name=zugang`)
3. Playground engagement — which of the four canned prompts get clicked, especially the fail-closed one
4. Onboarding-tier paid conversions — **the number that matters**

## Kill criteria

- **No downloaded AVV** → wrong audience, message is off
- **<10 API keys activated in 4 weeks** → landing page isn't converting
- **<3 paid Onboardings in 8 weeks** → stop, don't iterate on copy — re-test the sidecar-first framing instead

## Two technical notes carried over

Static Astro, not Flutter — Flutter Web bundle size would tank CPC on this kind of page. And leads post to Formspree, not a third-party lead-gen form product — the qualification signal (which document was downloaded, which interesse param) is the actual product of this phase and can't be captured by a generic form widget.
