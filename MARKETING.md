# Nachweis (konforme-ki.de) — business plan

i want to rephrase my homepage to offer 3 clearly defined products.

1. usage of my germany hosted LLm as described in /eu-inference, no logging, no training, german company, all documents signed targeted for clinics, law, finance companies in germany with strict regulation
2. the router, in which you can set the required compliance layer (see text later, the 4 different grades), this can be done easy with a little questionnaire we provide (you have to program it) taking only 5 mins and we will guide you through the required documents to sign and you are ready to go. backend described at /home/jguese/code/openrouter-sidecar-compliance/README.md
3. the sidecar concept, use your AWS; Azure and whatever, and just run our easy to install sidecar next to (your endpoint? is it a proxy?), so basically easy plug and play of your public API where we add the required compliance, auditing, logging.

in general these three offers should be easily visible in header, and show some visual queue like a triangle (heavy regulations -> lightly regulated, cost/setup high -> cost/setup low) but in nice marketing speech

in general the "freebie" and first CTA should be the quiz in which you can find out which regulations apply to you, which recommend the matching product.

also mention that changing providers to us is suuuuuper easy as you only need to swap out the base_url.
in an examples/plugins section show in tabs how easy it is to swap different tools to us

- claude code -> base_url env param
- cursor, windsurf, copilot examples same way
- we provide a chatgpt like UI
- we can also connect to teams, whatsapp, slack, email, whatever (custom contact)

the offer should be very very clear. we will aim to be a simple plug an dplay auditing/compliacne solution with minimal, very very easy setup

also mention that this way you will prevent vendor lock in, or lets say anthropic suddenly gets banned by your company, then our endpoint will easily switch over to another provider without you having to roll out a new tool

## The niche

EU-hosted inference is already a commodity: Lyceum, IONOS, SimpleLLM, Berget, Cortecs, EUrouter, Infercom, Nebius, Scaleway, Mistral, regolo and others all sell tokens from EU datacenters with a PDF AVV. We don't compete on tokens, price, or "sovereign" — sovereignty is an objection-handler, not a buying trigger, and none of these fifteen-plus providers will ever build the thing that actually unblocks a Datenschutzbeauftragter: **a per-request, exportable proof trail.**

That's the product. Per request: model, sub-processor, datacenter region, retention flag, token count, timestamp, hash. Auto-generated Art. 30 VVT entry. AI Act Art. 12 logging shape. One-click signed export, PDF + CSV. Infra companies won't build this — it's compliance UX, not infra. That's the moat, and it's application-layer work.

Positioning: **„Der KI-Endpunkt, der Ihrem Datenschutzbeauftragten die Freigabe schreibt."**

## One vertical, not three — superseded 2026-08-24, kept for the reasoning

Automotive is a trap (TISAX, 12–24-month cycles, OEMs building in-house). Banking under DORA fails a one-person GmbH at vendor due diligence. **§ 203 StGB Berufsgeheimnisträger** — Ärzte, Kanzleien, Steuerberater, Notare, Psychotherapeuten, Pflegedienste — is the one open lane: a real, narrow, unserved, _legally forced_ buyer. They cannot legally use most AI tooling without a §203-compliant processor arrangement. That original reasoning still holds as a read of which verticals are reachable _right now_ (see the procurement critique's vertical-gate table below — healthcare is still the cheapest gate) — but "don't dilute it with broad copy" is superseded. Two decisions this session changed the actual homepage:

1. **Audience: broad, not narrow.** The homepage hero no longer opens on §203 alone — it leads with the blockers a _general_ EU company actually has (Art. 28 DSGVO, US CLOUD Act/GeschGehG, §87 Abs. 1 Nr. 6 BetrVG Betriebsrat-Mitbestimmung), with §203/Berufsgeheimnisträger kept as a named, still-served niche rather than the whole pitch. Broad top-of-funnel messaging and narrow near-term deal-closing focus aren't in tension — see the note in the procurement critique section.
2. **Primary offer: Sidecar, not hosted Compliance.** See "Infra & architecture critique" below in full — raw hosted EU inference is a commodity fight against better-capitalized GPU operators; Sidecar (governance/attestation layer over a customer's _existing_ Azure OpenAI/Bedrock/own cloud, zero migration, zero GPU capex) is what's actually differentiated and immediately sellable. The homepage now leads with Sidecar; the hosted Compliance tier is the explicit escalation path for cases a customer's own cloud can't cover.

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

## Procurement critique (2026-08-24) — what's actually missing is the DSB folder, not more product

The hard part is already shipped: the attestation endpoint proves _where a call executed_.
What's missing is procurement surface, not inference capacity. Read this alongside "One
vertical, not three" above rather than as a replacement for it — the two operate at
different altitudes. The homepage-messaging decision this session (broadening the hero away
from a pure §203 hook) is about not needlessly excluding non-Berufsgeheimnisträger visitors
at the top of the funnel; the vertical-prioritization read below is about which deals are
actually closable _right now_ given real compliance gates, and it argues for leaning on
§203/healthcare first regardless of how broad the homepage headline reads. Those aren't in
tension — broad top-of-funnel messaging, narrow near-term deal focus.

**1. The blocker that voids the sale silently.** The attestation endpoint proves where a
call _executed_. It says nothing about where mandate/ledger/prompt-log _data rests_. If any
part of the stack still falls back to OpenRouter, that gap surfaces the moment a
Rechtsabteilung requests the Subunternehmerverzeichnis — which they always do, before
signing. State the distinction upfront on the page ("Inferenz in Deutschland, Metadaten in
X"). Discovered proactively it's a sale; discovered in audit it's a dead account and a
referral never earned.

**2. The DSB/procurement pack — the actually-missing asset.** Nobody buys an endpoint, they
buy a folder they can forward to Legal. Should be ungated, downloadable PDF, alongside the
existing AVV/TOM/Subprozessorenliste/§203-Zusatzvereinbarung/VVT-Muster in `/unterlagen`:

- **DSFA-Baustein nach Art. 35** — 80% pre-filled. Highest-leverage single asset to build;
  every regulated buyer must produce one, nobody wants to write it from scratch.
- **Löschkonzept** — log-TTL, kein Training auf Kundendaten, Prompt-Retention = 0, spelled
  out as its own document rather than scattered claims.
- **Rollenzuordnung AI Act** — who is Anbieter, who is Betreiber, what Art. 50/Art. 4 mean
  for each role.
- **Muster-Betriebsvereinbarung KI-Nutzung** — unblocks §87 Abs. 1 Nr. 6 BetrVG
  (Betriebsrat's co-determination right over AI systems used for behavior/performance
  monitoring — the actual reason a rollout stalls internally at a broad-market buyer).

**3. Each of the three verticals has a hard compliance gate — they are not equally reachable
today:**

| Vertical          | Gate                                                            | Reality                                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Healthcare (§203) | Verpflichtungserklärung nach §203 Abs. 4 per mitwirkende Person | Cheap, doable now — do it first                                                                                                                                             |
| Banking           | DORA + §25b KWG / MaRisk AT 9                                   | Needs Ausstiegsplan, Prüfrechte, Informationsregister-Eintrag, Konzentrationsrisiko-Analyse before a bank can legally onboard us                                            |
| Automotive        | TISAX / VDA ISA                                                 | OEM supplier onboarding is hard-gated on a TISAX label we don't have and won't have this year — drop from the near-term ICP, ad spend against this vertical dies in Einkauf |

**4. Enterprise table stakes still missing:** public per-1M-token pricing (a "Preis auf
Anfrage" line loses by default against IONOS/StackIT/Telekom/Mistral, all of whom publish),
Frankfurt latency numbers + model list + context length + rate limits stated plainly, an SLA
with uptime + deutschsprachiger Support + Gerichtsstand Deutschland + deutscher Vertrag,
SSO/SAML + RBAC + IP-Allowlist. Audit-log export we already have — that's the
differentiator, lead with it, don't bury it next to the checkbox items.

**5. The strategic reframe.** Raw EU inference is a commodity fight against better-capitalized
GPU operators (Nebius, IONOS, Telekom, StackIT, Scaleway, OVH, Mistral) — not a fight to try
to win on tokens. The win is the Nachweis layer: the attestation endpoint plus the DSB
folder. Sell the dossier, deliver the tokens as the delivery mechanism underneath it. This
also means **Sidecar (governance over a customer's existing Azure OpenAI usage) should be
positioned as the lead product, not a side-channel offer** — it converts buyers who won't
migrate their existing stack, requires zero GPU capex, and is the one thing nobody else in
that competitor list offers. Currently Sidecar sits as section 9 of 16 on the homepage; this
reframe argues it deserves a much more prominent position, possibly co-equal with the main
gateway pitch rather than a "for the cautious" aside.

## Infra & architecture critique (2026-08-24) — no README.md exists in this repo; filed here as the canonical business-context doc per AGENTS.md

This addendum supersedes nothing above by itself, but it changes the "Sidecar deserves more
prominence" note in the procurement critique into something stronger: Sidecar-equivalent
delivery should likely become **the primary offer**, not just a promoted aside. That is a
bigger pivot than what's been implemented on the homepage so far this session — flagged
explicitly, not silently reconciled, see the note at the end of this section.

**Kill vast.ai / consumer-GPU marketplaces for anything Nachweis hosts and attests to.**
Not a cost optimization call, a compliance-disqualification call, for exactly the buyers
this project targets (banking, healthcare):

- **Art. 28(2)+(4) DSGVO** — every sub-processor must be named and disclosed, and the
  customer must be able to object. Marketplace hosts are pseudonymous individuals; none of
  that is possible.
- **Art. 32 DSGVO** (TOMs, physical access control) and **DORA Art. 30** (audit rights,
  on-site inspection) — structurally impossible on a stranger's hardware. A bank cannot
  sign off on this.
- **Löschnachweis** — weights and KV-cache sit on a stranger's SSD with no proof of
  deletion. **Data residency** — "EU" on a marketplace listing is a self-declared checkbox,
  not audit evidence.
- **Supply-chain problem a vendor review will find on its own**: NVIDIA's GeForce/Titan
  consumer-GPU EULA restricts datacenter deployment of that software; a marketplace's
  40-series supply commonly runs on top of that restriction. Building a regulated-industry
  backend on hardware whose own licensing terms forbid the deployment is a discoverable
  problem, not a hidden one.
- Practically: 24GB/no-NVLink 40-series caps model size (~14B at FP8 realistically),
  cold-start weight re-pulls (16–140GB) eat the price advantage, and preemptible capacity
  can't carry an SLA.
- **Not worthless overall** — see "Plane B" below. The disqualification is specifically for
  anything sensitive/attested, not for all possible use.

**Kill or reframe the "PII-swap proxy" idea (mask names before forwarding to a third-country
provider) — as originally framed, it's a company-ending liability, not a shortcut:**

- Pseudonymised ≠ anonymised (Recital 26 DSGVO) — the data is still personal data, the
  transfer to a third-country provider is still a Chapter V Drittlandtransfer needing
  SCCs + a TIA. Masking names doesn't exit GDPR scope at all.
- Re-identification from free text is trivial ("der Werksleiter unseres Standorts mit 340
  Mitarbeitern in Ingolstadt" survives any NER pass), §203 protects the _content_ not the
  _name_ (masking a patient's name and sending the diagnosis is still `Offenbaren`), and
  GeschGehG protects the substance of a secret, not its identifiers.
- NER recall is never 100% — one miss is a `meldepflichtige Datenpanne` at a bank.
- **Positioning suicide**: the entire site argues data must not leave the EU; this routes
  it out. A competitor or journalist finding the real sub-processor list ends the company
  in an afternoon.
- **The defensible version**: ship it as a DLP/Datenminimierungs-Layer _inside_ Sidecar, for
  customers already on Azure OpenAI/OpenAI who want a mask+audit layer over their existing
  stack — positioned explicitly as a supporting measure under Art. 5(1)(c), **explicitly
  not** a legal basis for third-country transfer, with mask/unmask events written into the
  Prüfspur. Real, defensible, and nobody else ships it with an attached audit trail.

**Two-plane architecture for whatever compute Nachweis itself hosts** (this only applies
within "Mode C" of the three deployment modes below — see how they compose):

- **Plane A — Vertrauensebene.** Dedicated EU hardware Nachweis controls (Hetzner dedicated
  GPU or German colo), named in the AVV, per-tenant cache isolation, attestation on every
  response, FP8/SGLang, right-sized models. Expensive per token — sold as a subscription,
  not metered, and that's fine.
- **Plane B — Volumenebene.** Spot/marketplace capacity, vast.ai included, but
  contractually restricted by an explicit `Zweckbeschränkung` baked into the API key: no
  personal data, no Geschäftsgeheimnisse. Batch classification, code, synthetic data,
  public-document processing only. Customer opts in per key, sees the price difference.
- **The router between them is the actual product** — classifies each request, picks a
  plane, enforces the tenant's policy, writes an immutable line saying which plane ran it
  and why. "Smartest EU AI provider" means provable routing, not cheaper GPUs — nobody else
  sells that. The existing k8s box is the control plane for this (router/policy/classifier/
  ledger), never the data plane.
- **The metric to watch is Plane A utilization, not €/token.** A dedicated GPU at 25% duty
  cycle costs ~4× per served token versus the same box at 90% — that swamps every
  quantization/caching gain. Don't buy a second GPU until the first is saturated; use Plane
  B as the burst valve instead of over-provisioning Plane A.

**Three deployment modes — a separate axis from the two planes above** (the planes describe
_where hosted inference compute comes from_; the modes describe _who runs the gateway and
whether Nachweis ever touches customer data at all_):

| Mode                | Gateway runs          | Inference runs                        | Nachweis's legal role                                                                                                                              |
| ------------------- | --------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A — Self-hosted** | In customer's VPC/k8s | Their own Bedrock/Azure OpenAI/Vertex | Not a processor at all — pure software licence, no AVV needed, no new sub-processor for their DSB, no DORA third-party registration, no TISAX gate |
| **B — Managed**     | Nachweis's k8s (DE)   | Customer's cloud                      | Auftragsverarbeiter for metadata + logs only                                                                                                       |
| **C — Hosted**      | Nachweis's k8s (DE)   | Nachweis's GPUs (Plane A/B above)     | Full Auftragsverarbeiter                                                                                                                           |

Mode A is currently missing from the product and is argued to be the strongest door:
because the gateway never touches customer data, procurement collapses from a six-month
vendor review to a software purchase order — the only door open this year for verticals
this project currently can't serve at all (automotive/TISAX, per the procurement critique
above).

**Messaging implication:** current framing is "your cloud is illegal, buy ours" (high
objection load, narrow TAM, asks a CTO to rip out a working stack day one). Proposed
reframe: **"Wir machen beweisbar, was Sie schon haben. Und hosten das, was sich nicht
beweisbar machen lässt."** Sidecar/Mode-A/Mode-B stop being a promoted-but-secondary section
and become the primary offer; the fully-hosted Mode C becomes the escalation path for
workloads a customer's own cloud genuinely can't cover (§203 cases, no-EU-region models,
air-gap requirements) — not the opening ask.

**Competitive honesty**: Mode A/B is a thin gateway, and gateways are commoditized (LiteLLM,
Portkey, Kong AI Gateway, Cloudflare AI Gateway, Azure APIM policies all do proxy/routing/
logging, several for free — don't try to out-feature them). What's actually sellable: German
GmbH / deutscher Vertrag / Gerichtsstand Deutschland, the DSB-Dossier mapped to the
customer's actual setup (AVV, TOMs, DSFA-Baustein, Löschkonzept), the §203/DORA/§87 BetrVG
mappings, and the attestation semantics already built. **The code is the delivery
mechanism, the artifacts are the product** — price per governed volume or per seat, not as
a cheap infra add-on (pricing it low would anchor below the €290/mo hosted tier and
cannibalize it).

**Precision requirement, must ship before launch of any self-/managed-hosted mode**: the
attestation claim differs by mode and must be stated explicitly wherever attestation is
described — Mode A/B can attest what was received, what policy fired, and what was
forwarded where, but **cannot** attest what the customer's own cloud did internally; only
Mode C can attest execution location end to end. Same failure class as the OpenRouter-
fallback risk already flagged above: an overclaim a competent DSB will find, on a product
whose only asset is being trustworthy.

**Build order**: Mode B first (fastest to demo, most of it already exists), then Mode A
(packaging + Helm chart — mostly docs/licensing work, not new engineering), then Mode C only
once Mode A/B customers start asking for workloads their own cloud can't serve — that
request is the actual demand signal for buying the first GPU, rather than guessing.
**Sequencing**: Phase 0 (now–8 weeks) — buy zero GPUs, sell Sidecar + the DSB dossier
against customers' existing Azure OpenAI, validates willingness-to-pay for the compliance
artifact (the entire thesis) with no capex/residency risk; if Sidecar doesn't sell, Mode C
won't either. Phase 1 — one dedicated EU GPU node (Plane A live). Phase 2 — Plane B on spot
capacity, non-sensitive workloads only. Phase 3 — ISO 27001 (ride the datacenter's cert,
build a thin ISMS on top), then TISAX only once automotive is actually converting.

**Open tension with the in-progress homepage rewrite (this session):** the homepage
implementation underway as this was written still centers the hosted Compliance tier
("Zugangsschlüssel sichern") as the primary CTA everywhere, with Sidecar as a promoted
section rather than the lead offer. This addendum argues Sidecar/Mode-A-B should become the
primary homepage offer instead. That's a further, larger pivot than what's currently being
implemented — not folded in automatically, flagged here for an explicit decision before
more homepage copy work is built around the wrong primary offer.
