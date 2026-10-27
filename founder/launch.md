# Launch Plan: konforme-ki.de

## 1. Test Before You Spend (The Pre-Launch Validation)
- **The Test:** A professional landing page pre-sale / waitlist offer for the **§203-Freigabedossier (€39)** and priority onboarding for the **Compliance tier (€290/mo)**, driven by our Meta Instant Form campaign and professional newsletter outreach.
- **Success Metric:** At least **30 paid pre-orders** for the dossier or **15 qualified compliance waitlist signups** within 14 days before committing full capital to scaling ad spend and dedicated hardware expansion.
- **Rule:** If real conversion falls significantly short of simulated panel projections, iterate on the legal framing and objection handling in `founder/offer.md` before increasing spend.

---

## 2. The Countdown to Launch (Target Launch Date: November 15, 2026)

### Week 1: T-28 to T-22 (Legal, Compliance & Infrastructure)
- **Task 1:** Finalize legal review of Anlage 1 (§ 203 StGB confidentiality agreement) and Art. 28 AVV templates. *(Owner: Legal / Founder)* **[CRITICAL PATH]**
- **Task 2:** Verify bare-metal Nürnberg server provisioning, TLS termination, and cryptographic hash-chaining verification script in production. *(Owner: Engineering)* **[CRITICAL PATH]**
- **Task 3:** Wire funnel API webhooks and Meta Conversions API (CAPI) deduplication for `Lead`, `FreeDownload`, and `Purchase` events. *(Owner: Engineering)*

### Week 2: T-21 to T-15 (Brand, Content & Funnel Assets)
- **Task 1:** Complete copy freeze on `/deutschland-inferenz`, `/einstufung`, and `/preise`. *(Owner: Marketing)*
- **Task 2:** Produce Meta ad creative assets and set up Kampagne 1, 2, and 5 ad sets with Instant Forms. *(Owner: Growth)* **[CRITICAL PATH]**
- **Task 3:** Finalize PDF checklist and the €39 §203-Freigabedossier download package. *(Owner: Product)*

### Week 3: T-14 to T-8 (Soft Open & Pre-Launch Outreach)
- **Task 1:** Launch Meta ad campaigns in soft-test mode (€20/day) to verify tracking, event firing, and instant form submissions. *(Owner: Growth)*
- **Task 2:** Invite 20 pilot users (friendly law and medical practices) for a closed beta run of the Nürnberg AI endpoint and compliance dashboard. *(Owner: Founder)* **[CRITICAL PATH]**
- **Task 3:** Gather initial feedback on onboarding friction and document clarity. *(Owner: Product)*

### Week 4: T-7 to T-1 (Final Polish & Go-Live Prep)
- **Task 1:** Address any beta user feedback regarding API key generation or documentation. *(Owner: Engineering)*
- **Task 2:** Scale Meta ad budget to target level (€100/day). *(Owner: Growth)*
- **Task 3:** Send launch announcement to professional newsletter subscribers and founder network. *(Owner: Marketing)*

---

## 3. Launch Day Run Sheet (November 15, 2026)
- **08:00 CET:** Full system health check: verify Nürnberg inference endpoint status, Funnel API response times, and Meta CAPI event ping. *(Engineering)*
- **09:30 CET:** Activate main Meta ad campaigns (Kampagne 1, 2, 5) at full budget. *(Growth)*
- **11:00 CET:** Publish founder launch announcement on LinkedIn and relevant professional channels. *(Founder)*
- **14:00 CET:** Monitor real-time conversion rates on `/einstufung` and instant form submissions for anomalies or broken webhook links. *(Support / Growth)*
- **18:00 CET:** End-of-day review: check CPL, lead volume, and successful API key provisionings. *(All Leads)*

---

## 4. The First 30 Days (Metrics & Review Schedule)

### Weekly Targets
- **Leads (Freigabe-Checkliste / Quiz):** 150+ qualified professional signups per week.
- **Paid Dossier Orders (€39):** 15+ orders per week.
- **Compliance Subscriptions (€290/mo):** 5+ new recurring subscribers per week.

### Trigger Thresholds for Intervention
- **If CPL exceeds €40:** Pause broad ad sets, review first-line hook messaging in ad creatives.
- **If quiz-to-access conversion drops below 10%:** Streamline quiz steps or clarify value proposition on result screen.

### Review Schedule
- **Day 7 Review:** Funnel conversion audit — check drop-off between ad click, instant form completion, and API key generation.
- **Day 14 Review:** Pricing and offer adjustment — evaluate whether dossier buyers are successfully converting to the €290/mo Compliance tier.
- **Day 30 Review:** Full business model review against unit economics; decide on scaling ad spend or expanding professional media partnerships.
