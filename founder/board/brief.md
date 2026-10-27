# Board Brief: konforme-ki.de

## Business Overview
konforme-ki.de is a German SaaS / infrastructure platform targeting professional secret holders (§ 203 StGB: law firms, tax advisors, medical practices, notaries) and regulated organizations who want to use AI (LLMs) without violating professional secrecy or data protection laws.

## Core Products
1. **Deutschland-Inferenz**: Hosted on own German hardware in Nürnberg, backed by a personal § 203 StGB Verschwiegenheitsvereinbarung signed by the company running the servers, with 0-day prompt retention and SHA-256 hash-chained audit trails.
2. **Router**: An OpenAI-compatible API gateway with 4 protection grades backed by an OpenRouter-based gateway for teams needing broader model choice.
3. **Sidecar**: A compliance layer deployed next to existing cloud endpoints (AWS/Azure) to add auditing and logging without migration.

## Positioning & Market Context
- The German market for compliant cloud/AI infrastructure includes major players (IONOS, STACKIT, T-Systems, Aleph Alpha) holding BSI C5 and ISO 27001 certifications.
- konforme-ki.de's specific defensible wedge is the personal § 203 StGB signed confidentiality addendum (which large enterprise legal departments often refuse to sign due to personal criminal liability) combined with transparent, immutable per-request audit trails.
- Pricing spans a free tier (5M tokens/month), a €290/month compliance subscription, and €1,900–9,000 once for tailored compliance setup / Machbarkeits-Checks.

## Constraints & Challenges
- **Credibility & Transparency:** Must not claim exclusive German hosting (competitors exist) or offer legal guarantees (RDG disclaimer).
- **Infrastructure Realities:** Cloudflare tunnels and multi-region routing need careful alignment with zero-US-parent / zero-US-involvement claims for Deutschland-Inferenz.
- **Acquisition / Distribution:** Reaching busy lawyers and doctors through digital marketing and direct trust signals.
