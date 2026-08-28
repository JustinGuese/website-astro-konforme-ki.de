# ADS.md - Meta-Kampagnen für konforme-ki.de (konsolidiert)

Ersetzt die vorherige Fassung mit 6 Kampagnen × 5 Texten × 5 Headlines (150 Kombinationen).
Neue Struktur: **5 Kampagnen, je 1 Ad Set, je 5 Headlines und 5 Primary Texts.**

**Sprache:** Anzeigentexte Deutsch. Targeting wird bewusst **breit** gefahren - die
Qualifizierung passiert in der ersten Zeile des Textes, nicht im Interessen-Stack.

---

## Was sich gegenüber der alten Fassung geändert hat - und warum

| Änderung                                                     | Grund                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6 Kampagnen → 5, je genau **1 Ad Set**                       | Meta braucht ~50 Conversions pro Ad Set und Woche, um die Lernphase zu verlassen. Mehrere Ad Sets pro Kampagne teilen dasselbe knappe Signal auf und keins lernt je aus.                                                                                                                                |
| Interessen-Stacks (30 Keywords) → **breit, ohne Interessen** | Interessen wie „lawyer" oder „medical practice" treffen Leute, die sich _für_ das Thema interessieren, nicht Betriebsinhaber. In deutschem B2B ist das überwiegend Streuverlust.                                                                                                                        |
| Checkliste jetzt als **Meta Instant Form**                   | Die Conversion feuert auf der Plattform - unabhängig von Cookie-Consent. Das ist der größte Einzelhebel im ganzen Plan.                                                                                                                                                                                 |
| Erst-Conversion `Lead` statt Quiz-Abschluss                  | Der Quiz-Abschluss ist zu selten, um darauf zu optimieren. Quiz bleibt der inhaltliche Erst-CTA, ist aber nicht das Optimierungsziel.                                                                                                                                                                   |
| Kampagne „Betriebsrat" und „Souveränität" gestrichen         | Beide sind laut `MARKETING.md` Einwand-Auflöser, keine Kaufauslöser. Sie funktionieren als Retargeting-Inhalt, nicht als kalte Kampagne. Ihre stärksten Winkel sind in Kampagne 5 aufgegangen.                                                                                                          |
| Textlängen variieren jetzt bewusst                           | Mobil bricht Meta nach ~125 Zeichen ab. Wenn alle 5 Texte dieselbe Länge und dasselbe Skelett haben, testet Meta nur den Winkel - die Formatvarianz bleibt ungetestet. Pro Kampagne laufen jetzt 3 mittlere, 1 kurzer und 1 sehr kurzer Text.                                                           |
| Ortsangabe entfernt                                          | Die alte Fassung schrieb durchgehend „Nürnberg", die Produktnotizen sagen Frankfurt. In einer Souveränitäts-Anzeige ist genau das der Fehler, den diese Zielgruppe bemerkt. Steht jetzt überall „auf eigener Hardware in Deutschland". Wenn der Standort gesichert ist: Find-and-Replace, nicht vorher. |

---

## Setup vor dem ersten Euro

1. **Instant Form** für die Freigabe-Checkliste anlegen (Kampagne 3 und 5 nutzen sie).
   Felder: E-Mail, Vorname, Unternehmen. Nicht mehr. Webhook in den ESP.
2. **Conversions API** server-seitig für `Lead` und `Contact`, mit `event_id`-Deduplizierung
   gegen den Browser-Pixel. Ohne CAPI sieht Meta durch den Consent-Banner einen Bruchteil der
   echten Conversions und optimiert auf den falschen Ausschnitt.
3. **Events:** `Lead` (Zugang, Quiz-Ergebnis), `Contact` (Kontaktformular),
   `CompleteRegistration` (Zugangsschlüssel), `InitiateCheckout` und `Purchase`
   (Kauf). Ansonsten keine eigenen Event-Namen - mit **einer** bewussten
   Ausnahme, siehe Punkt 5.
4. **Ein Pixel, ein Werbekonto, eine Kampagnenstruktur.** Keine Duplikate zum „Neustart der
   Lernphase" - das setzt nur das Signal zurück.
5. **Die kostenlose Checkliste feuert `FreeDownload`, nicht `Lead`.** Ein Gratis-Download
   und ein Kaufinteresse sind verschiedene Conversions. Meldet man beides als `Lead`,
   optimiert Meta auf das häufigere - und das ist immer der Gratis-Download. Das ist
   vermutlich der grössere Hebel als das Purchase-Tracking selbst.
6. **`Lead` bleibt das Optimierungsziel, auch wenn `Purchase` jetzt sauber ankommt.**
   Bei 39 € / 290 € erreicht kein Ad Set ~50 Käufe pro Woche, und ohne die verlässt es
   die Lernphase nie. `Purchase` verdient sich seinen Platz als Reporting, echter ROAS
   und später als Quelle für ein value-based Lookalike - nicht als Optimierungsziel.

Die Punkte 2, 3 und 5 laufen serverseitig über die Funnel-API
(`shared-marketing-email-ecommerce-endpoint`), die auch die Formulare entgegennimmt.
`Purchase` kommt aus dem Stripe-Webhook, `CompleteRegistration` aus dem Sidecar beim
Klick auf den Bestätigungslink - beides Conversions, die **kein** Browser je sehen kann.

### Budgetregel

Pro Ad Set unter ~40 €/Tag lohnt sich getrenntes Testen in dieser Nische nicht.

- **< 100 €/Tag gesamt:** nur Kampagne 1, 2 und 5 laufen lassen.
- **100–250 €/Tag:** Kampagne 1–3 plus 5.
- **> 250 €/Tag:** alle fünf.

Alle Primary Texts einer Kampagne laufen als eigenständige Anzeigen **im selben Ad Set**.
Meta verteilt intern. Nicht manuell pausieren vor Tag 7.

---

## Meta-Safety-Scrub (unverändert gültig)

Kommt in keiner Anzeige vor: **Bußgeldhöhen** · **garantierte Ergebnisse** („rechtssicher",
„garantiert konform") · **Kundenstimmen, Prozentwerte, Fallzahlen** (§ 5 UWG, es gibt noch
keine freigegebenen Zitate) · **Rechtsberatungs-Sprache** (§ 2 RDG - das Quiz gibt eine
Produktempfehlung, nie eine Rechtsauskunft) · **Rückschlüsse auf den Leser**
(„Sie als Anwalt haben ein Problem" → immer die Situation ansprechen, nie die Identität).

Die Praxis-Kampagne adressiert die **Praxis als Betrieb**, nie den Leser als Patienten.

---

# Kampagne 1 - Kanzlei & Steuerberatung

**Ziel-URL:** `https://konforme-ki.de/einstufung`
**Ad Set:** 1 · Deutschland · 30–60 · **keine Interessen** · Advantage+ Placements
**Optimierung:** Conversions → `Lead`
**Warum zuerst:** Berufsgeheimnisträger dürfen die meisten KI-Werkzeuge ohne
§ 203-konforme Vereinbarung schlicht nicht einsetzen. Erzwungener Bedarf, nicht geweckter.

> Falls das Ad Set nach 7 Tagen kein Signal liefert: **ein** zusätzliches Ad Set mit engem
> Interessen-Stack als Kontrolle (law firm, tax advisor, DATEV, notary public, GDPR,
> data protection officer, legal tech). Erwartung: breit gewinnt.

### 5 Headlines

1. Der Kollege tippt Mandantendaten in ChatGPT
2. Vier Fragen. Dann wissen Sie, was gilt. ✅
3. KI in der Kanzlei - ohne § 203 zu brechen
4. Ihr Datenschützer will einen Beleg. Hier ist er. 📄
5. Kein US-Server. Kein Training. Deutscher Gerichtsstand. 🇩🇪

### 5 Primary Texts

**① Das Dokument, das niemand hochladen wollte** 📄

Elf Anwältinnen, kein KI-Verbot - aber auch keine Erlaubnis. Bis auffiel, dass der Schriftsatz eines Mandanten zur Zusammenfassung in ein amerikanisches Chatfenster kopiert worden war. 😶

Niemand war hier leichtsinnig. Das Werkzeug war da, der Termin war eng, und niemand hatte je gesagt, welches Werkzeug denn erlaubt wäre.

📋 Vier Fragen, rund 60 Sekunden, ohne Anmeldung
🔒 Kein Logging, kein Training auf Ihren Inhalten
📝 AVV, TOM, § 203-Zusatzvereinbarung - die Unterlagen für Ihre Akte
⚖️ Wir sind Auftragsverarbeiter nach Art. 28 DSGVO und zeichnen die Zusatzvereinbarung gegen

⚡ Das Ergebnis ist eine Produktempfehlung, keine Rechtsauskunft - aber es ist die Seite Papier, die Ihr Datenschutzbeauftragter sehen will.

👉 https://konforme-ki.de/einstufung

---

**② „Wir dachten, das wird ein IT-Projekt."** 🙃

Die Kanzlei hatte den KI-Einsatz auf nächstes Jahr geschoben: erst Ausschreibung, dann Datenschutzprüfung, dann Migration. Ein halbes Jahr, mindestens.

Dann stellte sich heraus, dass sich an ihrer Software überhaupt nichts ändert. 📦

🔧 Eine Zeile in der Konfiguration: `base_url` austauschen
🧾 Requests, Antworten, Streaming bleiben identisch - dieselben Werkzeuge, derselbe Code
🔒 Schutzstufe einmal festlegen, danach gilt sie hart bei jeder Anfrage
📑 AVV, TOM, Subprozessorenliste und VVT-Muster liegen fertig zum Download

⚡ Der schwierigste Teil an konformer KI ist nicht die Technik. Es ist das Papier - und das liegt hier schon fertig.

👉 Unterlagen ansehen, ohne Anmeldung: https://konforme-ki.de/unterlagen

---

**③ Was passiert, wenn jemand ein US-Modell anfordert?** 🚫

Das ist die Frage, an der Anbietergespräche kippen. Die ehrliche Antwort der meisten lautet: dann wird umgeleitet, und Sie erfahren es nicht.

Hier lautet sie anders - die Anfrage **schlägt fehl**. 🛑

🇩🇪 Nur Deutschland - eigene Hardware, kein Gateway, kein Transfer
🇪🇺 Nur EWR-ansässige Anbieter - namentlich benannt, keine Ausweichroute
🌍 Oder volle Auswahl, dafür lückenlos protokolliert
📄 Jede Stufe zeigt offen, was sie _nicht_ leistet - nicht nur das Versprechen

⚡ Eine Zusage, die im Ernstfall nachgibt, war nie eine Zusage.

👉 Welche Stufe zu Ihnen passt: https://konforme-ki.de/einstufung

---

**④ Konform sein und es belegen können sind zwei Dinge** ⚖️

In der Prüfung wird nicht gefragt, ob Sie sich an die Regeln gehalten haben. Dort wird ein Nachweis verlangt - und den schließt ein PDF-Vertrag nicht, er regelt die Absicht, nicht den einzelnen Vorgang.

Hier schreibt jede Anfrage ihre eigene Zeile: welches Modell geantwortet hat, welcher Subprozessor beteiligt war, Zeitstempel, verketteter Hash.

👉 Eine echte Anfrage ansehen: https://konforme-ki.de/playground

---

**⑤ Darf das in die KI?** 🤔

Vier Fragen, 60 Sekunden, ohne Anmeldung. Danach wissen Sie, welche Schutzstufe für Ihre Kanzlei gilt - und welche Unterlagen in Ihre Akte gehören.

👉 https://konforme-ki.de/einstufung

### Creatives

**Foto-Prompt:** Editorial documentary photograph, 35mm at f/2.0. A German law-office interior in late afternoon: heavy oak desk, a stack of closed paper case files bound with red ribbon, one laptop pushed aside with a dark screen. Cool northern daylight rakes across the paper. Understated, serious, no people. Palette limited to deep navy-ink (#0d1526), cool paper grey (#f1f3f7), one restrained deep-green accent (#1e6b58) on a folder spine. Generous empty space in the upper third for a text overlay. Natural grain, no HDR, no gloss.
**Negative:** no text, no logos, no visible screen content, no people, no scales of justice, no gavel, no glowing blue circuitry, no robot.

**Overlay (oberes Drittel):** **„Darf das in die KI?"** / Vier Fragen. Dann wissen Sie es.

**Zusätzlich in diesem Ad Set laufen lassen:** Video A und das Plain-Text-Creative (siehe
„Creative-Formate" unten). Ein einzelnes Editorial-Foto ist in Reels und Stories unsichtbar.

---

# Kampagne 2 - Arztpraxis, MVZ & Pflege

**Ziel-URL:** `https://konforme-ki.de/einstufung`
**Ad Set:** 1 · Deutschland · 30–60 · **keine Interessen** · Advantage+ Placements
**Optimierung:** Conversions → `Lead`
**Warum früh:** Kurze Entscheidungswege, ein einzelner Entscheider, und Patientendaten
fallen unter Art. 9 DSGVO - die strengste Kategorie. Günstigstes Einkaufstor.

> **Meta-Hinweis:** Die Anzeige spricht die **Praxis als Betrieb** an, nie den Leser als
> Patienten. Keine Formulierung darf einen Rückschluss auf die Gesundheit des Lesers
> nahelegen - das ist der schnellste Weg zur automatischen Ablehnung.

### 5 Headlines

1. Patientendaten gehören nicht in ein US-Chatfenster
2. KI in der Praxis - mit Beleg für die Aufsicht 📄
3. Vier Fragen, dann wissen Sie, was gilt ✅
4. Kein Training auf Ihren Praxisdaten. Nie. 🔒
5. Diktat, Brief, Befund - auf deutscher Hardware 🇩🇪

### 5 Primary Texts

**① Der Brief war in vier Minuten fertig. Das war das Problem.** ⏱️

In einer Praxis mit zwölf Mitarbeitenden fing es harmlos an: jemand ließ einen Arztbrief von einem kostenlosen Chatbot glätten. Es sparte eine halbe Stunde. Also machten es bald alle. 😬

Niemand wollte etwas Verbotenes. Das Werkzeug war kostenlos, die Warteliste lang - und es hatte nie jemand gesagt, welches Werkzeug erlaubt gewesen wäre.

📋 Vier Fragen, rund 60 Sekunden, ohne Anmeldung
🇩🇪 Auf Wunsch ein Modell auf eigener Hardware in Deutschland - kein Gateway, kein Transfer
🔒 Kein Logging, kein Training auf Ihren Inhalten
📝 Die Unterlagenliste für Ihre Akte: AVV, TOM, § 203-Zusatzvereinbarung, VVT-Muster

⚡ Es ist eine Produktempfehlung, keine Rechtsauskunft. Aber es ist die Seite, die in Ihrer Akte fehlt.

👉 https://konforme-ki.de/einstufung

---

**② Art. 9 DSGVO ist nicht „DSGVO mit mehr Papier"** 🧬

Gesundheitsdaten sind eine eigene Kategorie. Ein Auftragsverarbeitungsvertrag, der für einen Onlineshop reicht, reicht hier nicht - und ein Anbieter, dessen Verarbeitung sich nicht prüfbar nachvollziehen lässt, lässt sich schwer in ein Verarbeitungsverzeichnis eintragen. 🧱

📑 AVV nach Art. 28 DSGVO - herunterladbar, ohne Formular
🛡️ TOM nach Art. 32 - die tatsächlichen Maßnahmen, nicht eine Zusammenfassung
🏢 Subprozessorenliste mit Änderungshistorie
✍️ § 203-Zusatzvereinbarung für Berufsgeheimnisträger
🗂️ VVT-Muster, Feld für Feld vorbereitet

📨 Kein Formular, keine E-Mail-Pflicht. Zum Weiterleiten an Ihren Datenschutzbeauftragten gedacht.

⚡ Wer die Unterlagen erst nach dem Vertragsabschluss zeigt, hat die Reihenfolge falsch herum.

👉 https://konforme-ki.de/unterlagen

---

**③ „Und wo genau liegen die Daten dann?"** 🇩🇪

Die Frage, bei der die meisten Gespräche stocken - weil die ehrliche Antwort oft „bei einem Anbieter, der einem US-Konzern gehört" lautet, auch wenn der Server in Europa steht.

Deshalb gibt es hier eine Stufe, die gar kein Gateway benutzt: 🖥️

🇩🇪 Eigene Hardware in Deutschland, betrieben von einer deutschen GmbH
🚫 Kein Subprozessor, kein Transfer, kein Umleiten
🔒 Keine Speicherung Ihrer Prompts, kein Training darauf
🎁 Zum Ausprobieren: 5 Mio. Token im Monat, ohne Zahlungsmittel

⚖️ Deutscher Gerichtsstand. Deutsches Recht. Ein Ansprechpartner mit Namen.

👉 https://konforme-ki.de/deutschland-inferenz

---

**④ KI ist im Haus. Die Frage ist nur, welche.** 🤷

Praxisleitungen haben selten die Wahl, _ob_ KI eingesetzt wird - die Werkzeuge sind kostenlos und auf jedem privaten Handy. Die Wahl ist, ob es einen erlaubten Weg gibt oder nur einen inoffiziellen.

💬 Eine Weboberfläche wie ChatGPT, ohne dass jemand etwas einrichten muss
🔒 Vorab festgelegte Schutzstufe, die bei jeder Anfrage hart greift
📄 Jede Nutzung protokolliert - auch fürs Gespräch mit der Aufsicht

⚡ Ein Verbot, an das sich niemand hält, schützt keine einzige Akte.

👉 https://konforme-ki.de/einstufung

---

**⑤ Der Prüfer fragt nicht, ob. Er fragt, womit Sie es belegen.** 🔍

Jede Anfrage schreibt automatisch mit: welches Modell geantwortet hat, welcher Subprozessor beteiligt war, Zeitstempel, verketteter Hash. Ein Klick: Art. 30-Eintrag, signiertes PDF oder CSV.

👉 https://konforme-ki.de/playground

### Creatives

**Foto-Prompt:** Editorial documentary photograph, 50mm at f/2.2. A quiet German medical-practice back office after hours - not a treatment room. Clean desk, a closed paper folder, a dictation microphone, a monitor switched off. Soft cool overcast daylight from a side window; calm, orderly, unglamorous. No people, no patient information visible. Palette: deep navy-ink (#0d1526), cool paper grey (#f1f3f7), clinical white, one muted deep-green accent (#1e6b58). Wide framing, clear empty space in the upper third. Fine natural grain, restrained contrast.
**Negative:** no text, no logos, no people, no patients, no body parts, no medication, no syringes, no stethoscope cliché, no glowing blue AI graphics, no robot, no before/after framing.

**Overlay:** **Praxisdaten. Und ein Chatfenster.** / Es gibt einen erlaubten Weg.

---

# Kampagne 3 - Datenschutzbeauftragte & Compliance

**Ziel:** **Meta Instant Form** - Freigabe-Checkliste (nicht die Website)
**Ad Set:** 1 · Deutschland · 28–60 · **keine Interessen** · Advantage+ Placements
**Optimierung:** Conversions → `Lead` (On-Platform, consent-unabhängig)
**Warum eigene Kampagne:** Der DSB ist nicht der Käufer, sondern der Blocker - und damit
die Person, die den Kauf freigibt. Diese Gruppe will kein Produkt, sondern Papier.

> Die ungated Unterlagen bleiben im Text erwähnt, sind aber **nicht** der CTA. Ein Download
> ohne E-Mail erzeugt kein Conversion-Ereignis, auf das Meta optimieren kann. Die Checkliste
> als Instant Form erzeugt eins - und der Download der Unterlagen passiert danach ohnehin.

### 5 Headlines

1. AVV, TOM, VVT - ungated, ohne Formular 📑
2. Sie prüfen den Anbieter. Fangen Sie hier an.
3. Jede Anfrage mit benanntem Subprozessor 🏢
4. Der Art. 30-Eintrag schreibt sich selbst
5. Was diese Schutzstufe _nicht_ leistet, steht dabei

### 5 Primary Texts

**① Die Unterlagen kommen vor dem Verkaufsgespräch, nicht danach** 📑

Externe Datenschutzbeauftragte verbringen ihre Woche damit, Anbieter um Dokumente zu bitten, die es angeblich gibt - und drei Termine später ein PDF zu bekommen, das die Hälfte der Fragen offenlässt. 😮‍💨

Das ist kein böser Wille. Es ist eine Vertriebsreihenfolge, die davon ausgeht, dass Papier ein Abschlussthema ist.

📄 AVV nach Art. 28 DSGVO
🛡️ TOM nach Art. 32 - konkrete Maßnahmen, keine Zusammenfassung
🏢 Subprozessorenliste mit Änderungshistorie
✍️ § 203-Zusatzvereinbarung für Berufsgeheimnisträger
🗂️ VVT-Muster, Feld für Feld vorbereitet

📋 Dazu die einseitige Freigabe-Checkliste: 12 Punkte in der Reihenfolge, in der sie anfallen.

⚡ Ein Anbieter, der seine Unterlagen erst nach dem Termin zeigt, hat die Reihenfolge falsch herum.

👉 Checkliste anfordern

---

**② „Wir nutzen einen Gateway-Verbund" ist kein Subprozessorenverzeichnis** 🏢

Ein reiner Gateway wählt den Subprozessor pro Anfrage zur Laufzeit - aus über hundert Anbietern. Wer tatsächlich geantwortet hat, steht in der Antwort standardmäßig nicht drin. Ein Verzeichnis, das Sie nicht führen können, ist keins. 🧱

🔒 Deshalb bekommt hier jede Anfrage _vorab_ eine harte Zuordnung zu Ihrer Schutzstufe, statt sich im Nachhinein zu zeigen, wer geantwortet hat.
🏢 Der antwortende Subprozessor steht namentlich in jedem Datensatz
📄 Dieselbe Stufe erzeugt die Laufzeitregel **und** den Anhangstext Ihres AVV

⚡ Vertrag und Laufzeitverhalten können nicht auseinanderlaufen, weil sie aus derselben Definition kommen.

👉 Die Checkliste dazu

---

**③ Wir schreiben auch hin, was die Stufe nicht leistet** 🚧

Ungewöhnlich genug, dass es Erklärung braucht: neben jeder Schutzstufe steht ihre Einschränkung. Nicht im Kleingedruckten - direkt neben dem Versprechen. 📋

⚠️ Eine EWR-Region hebt die Transfer-Frage nicht auf - eine US-kontrollierte Entität kann trotz EU-Standort dem CLOUD Act unterliegen
⚠️ „Global, protokolliert" ist ein Nachweis, kein Schutz: nichts wird blockiert, das Register hält nur fest, wohin die Daten gingen
⚠️ Eine Stufe ohne aktuell zulässigen Anbieter wird als solche ausgewiesen statt stillschweigend gefüllt
⚠️ Unbekannte Trainingsbedingungen zählen als nicht-konform - nicht als „vermutlich in Ordnung"

⚖️ Ihre Berufspflichten bleiben bei Ihnen. Wir liefern die Infrastruktur und den Beleg dazu.

⚡ Ein Anbieter, der keine Grenzen nennt, hat sie nur nicht aufgeschrieben.

👉 12-Punkte-Checkliste

---

**④ Der Art. 30-Eintrag, der sich pro Anfrage selbst fortschreibt** 🗂️

Ein statischer Eintrag beschreibt einen Sollzustand. Er beweist nicht, dass er eingehalten wurde. Hier fällt der Beleg als Nebenprodukt an: Art. 30-Eintrag automatisch generiert, Protokollformat vorbereitet auf Art. 12 AI Act, hash-verkettet und mit einem eigenständigen Skript unabhängig nachprüfbar.

⚡ Kein „vertrauen Sie uns". Die Kette lässt sich ohne uns nachrechnen.

👉 Checkliste holen

---

**⑤ Kaum ein DSB will KI verhindern.** 🤝

Die meisten wollen eine Frage beantworten können, wenn sie gestellt wird: wer hat wann worauf zugegriffen, mit welchem Modell, bei welchem Anbieter. Solange das niemand beantworten kann, ist „nein" die einzige verantwortbare Antwort.

👉 Die 12 Punkte, kostenlos

### Creatives

**Foto-Prompt:** Editorial still-life photograph, 60mm macro at f/4. Close overhead-angled view of a printed compliance dossier on a matte desk: a stack of stapled A4 documents fanned so several headed pages read as texture, reading glasses, a fine-tipped pen across the top sheet. Text on the pages must be illegible - printed grey texture only. Cool even north light; archival, precise, calm. Palette: deep navy-ink (#0d1526), paper grey (#f1f3f7), off-white, one deep-green accent (#1e6b58) on a tab divider. Clean negative space along the top edge. Subtle paper grain, soft shadows, no gloss.
**Negative:** no readable text, no logos, no official-looking seals or stamps, no people, no hands, no gavel, no padlock icon, no glowing circuitry, no checkmark graphics.

**Overlay:** **AVV. TOM. VVT. Subprozessoren.** / Ungated. Vor dem Verkaufsgespräch.

---

# Kampagne 4 - CTO & Plattform-Team

**Ziel-URL:** `https://konforme-ki.de/router`
**Ad Set:** 1 · Deutschland · 25–50 · **keine Interessen** · Advantage+ Placements
**Optimierung:** Conversions → `CompleteRegistration` (Zugangsschlüssel).
Fällt das Volumen unter ~15/Woche: auf `Lead` umstellen.
**Warum:** Größere Zielgruppe, längerer Zyklus, dafür der stärkste Produktbeweis. Das
Angebot ist hier nicht das Quiz, sondern der kostenlose Zugang - für diese Gruppe ist
Ausprobieren der kürzeste Weg.

### 5 Headlines

1. Eine Zeile. `base_url`. Fertig. ✅
2. Ihr Azure bleibt. Der Nachweis kommt dazu. 🔌
3. Fail-closed statt stiller Umleitung 🛑
4. Per Helm im eigenen Cluster - keine Migration
5. Claude Code, Cursor, Copilot - alle sofort dran

### 5 Primary Texts

**① Der Rollout war fertig. Dann kam die Freigabe nicht.** 🧱

Prompts getestet, Kosten kalkuliert, Team geschult. Blockiert wurde es nicht von der Technik, sondern von einer Frage: _wer genau verarbeitet die Anfrage, und wie weisen wir das nach?_ 😩

Kein Architekturproblem. Ein Beweisbarkeitsproblem - und dafür gibt es in keinem SDK ein Flag.

🔧 `base_url` austauschen. Sonst nichts.
🧾 Requests, Responses und Streaming bleiben identisch - OpenAI-kompatibel
🛑 Schutzstufe als harte Vorab-Regel, bevor die Anfrage das Haus verlässt
🧮 Pro Anfrage: Modell, Subprozessor, Zeitstempel, verketteter Hash
📤 Export als Art. 30-Eintrag, signiertes PDF oder CSV - für die Leute, die die Freigabe geben

⚡ Der schwierigste Teil ist nicht die Integration. Es ist der Beleg - und der fällt hier automatisch an.

👉 https://konforme-ki.de/router

---

**② Sie müssen Ihre Cloud nicht verlassen** 🔌

Der übliche Vorschlag lautet „migrieren Sie zu uns". Bei laufendem Azure-OpenAI- oder Bedrock-Vertrag ist das kein Angebot, sondern ein Projekt. 📦

⎈ Per Helm-Chart im eigenen Kubernetes-Cluster
🔀 Proxied an den Anbieter, den Sie ohnehin nutzen - Ihr Vertrag bleibt unberührt
🛑 Jede Anfrage wird gegen Ihre Schutzstufe geprüft, bevor sie den Cluster verlässt
🔐 Inhalte Ende-zu-Ende-verschlüsselt, eigener Schlüssel pro Kunde
🚦 Einführung in drei Stufen: `observe` → `warn` → `enforce`

⚡ Keine Migration, kein Anbieterwechsel, kein neuer Vertrag. Nur eine Schicht davor.

👉 https://konforme-ki.de/sidecar

---

**③ Was passiert, wenn kein Anbieter Ihrer Stufe verfügbar ist?** 🛑

Die meisten Gateways beantworten das mit einem Fallback. Bequem - und genau der Moment, in dem jede Zusicherung zum Verarbeitungsort bricht, ohne dass es jemand mitbekommt. 🧱

Hier schlägt die Anfrage fehl. Sie wird nie auf eine niedrigere Stufe heruntergestuft.

🇩🇪 Nur Deutschland - eigene Hardware, kein Gateway
🇪🇺 EWR-Region - Rechenzentrum auf ein Land gepinnt
🌍 EU-Anbieter - ausschließlich EWR-ansässige Entitäten, namentlich
🌐 Global, protokolliert - volle Auswahl, lückenlos aufgezeichnet

⚙️ Dieselbe `base_url` für jede Stufe - nur der Schlüssel entscheidet, welche gilt.

👉 https://konforme-ki.de/router

---

**④ Zwei Umgebungsvariablen, und der Agent läuft compliant** 🖥️

Es scheitert selten am Backend. Es scheitert daran, dass die halbe Firma längst mit eigenen Schlüsseln arbeitet - in Cursor, in Claude Code, in irgendeinem Copilot-Setup - und niemand weiß, wohin diese Anfragen gehen. 📱

🖥️ Claude Code: `ANTHROPIC_BASE_URL` und `ANTHROPIC_API_KEY` setzen - fertig
🧑‍💻 Cursor und Windsurf: eingebauter Base-URL-Override
🐍 Python / TypeScript: offizielles OpenAI-SDK, nur die `base_url` ändert sich
🔍 Jede Anfrage protokolliert - mit Nutzer, Modell und tatsächlichem Subprozessor

🎁 5 Mio. Token im Monat, ohne Zahlungsmittel.

⚡ Schatten-IT verschwindet nicht durch Verbote, sondern durch einen erlaubten Weg, der genauso bequem ist.

👉 https://konforme-ki.de/router

---

**⑤ `base_url` tauschen. Das war der ganze Wechsel.** ⚙️

OpenAI-kompatibel, Streaming identisch, Schutzstufe als harte Pre-Egress-Regel, Prüfspur pro Anfrage. 5 Mio. Token im Monat kostenlos, ohne Zahlungsmittel.

👉 https://konforme-ki.de/router

### Creatives

**Foto-Prompt:** Editorial photograph, 35mm at f/2.0, shallow depth of field. A developer's desk at dusk in a German office: mechanical keyboard, external monitor showing an out-of-focus dark-navy code editor (text unreadable, pure blur), coffee cup, small potted plant. Overhead lights off; only cool monitor glow and warm window light. A working desk, not a staged studio. Palette anchored in deep navy-ink (#0d1526) and cool grey (#f1f3f7) with a single teal-green accent (#37a98c) from the screen. Composition weighted right, clean dark negative space on the left third.
**Negative:** no readable code or text, no logos, no brand names on hardware, no people, no glowing AI brain, no circuit-board overlay, no robot, no neon cyberpunk, no hologram.

**Overlay (linkes Drittel):** **Der ganze Wechsel:** / `base_url` - sonst nichts.

**Wichtig:** In diesem Ad Set ist die **Bildschirmaufnahme** (Video B) das wichtigste
Creative, nicht das Foto. Diese Zielgruppe glaubt einem Screenshot mehr als jedem Satz.

---

# Kampagne 5 - Retargeting

**Ziel:** je nach Zielgruppe `/unterlagen`, Instant Form (Checkliste) oder `/einstufung`
**Ad Set:** 1 · Custom Audiences, kombiniert:

- Website-Besucher 180 Tage
- Quiz gestartet, nicht abgeschlossen (30 Tage) - höchste Priorität
- Instant Form geöffnet, nicht abgeschickt (90 Tage)
- Video 25 % gesehen (180 Tage)
- FB/IG-Interaktion (365 Tage)

**Optimierung:** Conversions → `Lead`
**Warum diese Kampagne die alten Kampagnen 5 und 6 ersetzt:** Souveränität und
Mitbestimmung sind Einwand-Auflöser. Auf kaltem Traffic erzeugen sie Zustimmung, aber keine
Handlung. Auf warmem Traffic lösen sie genau den Einwand auf, an dem der erste Besuch
hängengeblieben ist.

### 5 Headlines

1. Sie waren schon da. Hier fehlte noch etwas. 📄
2. Serverstandort EU. Eigentümer USA. Zwei Fragen. 🌍
3. „Kann das System Leistung erfassen?" 🤝
4. Wenn der Anbieter wegfällt, merkt Ihr Tool nichts 🔌
5. Die vier Fragen dauern 60 Sekunden ✅

### 5 Primary Texts

**① „Unsere Daten bleiben in Europa" beantwortet nur die halbe Frage** 🌍

Serverstandort und Eigentümerstruktur sind zwei verschiedene Dinge. Ein Anbieter, der einem US-Konzern gehört, kann dem US CLOUD Act unterliegen - auch wenn das Rechenzentrum in Frankfurt steht. 🧱

Für personenbezogene Daten ist das eine DSGVO-Frage. Für Konstruktionsunterlagen, Kalkulationen und Lieferantenkonditionen ist es eine Frage nach dem GeschGehG, und die löst eine EU-AVV allein nicht.

🇩🇪 Eigene Hardware in Deutschland, betrieben von einer deutschen GmbH
🚫 Kein Subprozessor, kein Transfer, keine Ausweichroute
🔒 Kein Logging, kein Training auf Ihren Inhalten
⚖️ Deutscher Gerichtsstand, deutsches Recht, ein Ansprechpartner mit Namen

⚡ Die einzige Stufe, die kein Gateway der Welt liefern kann - dafür braucht es eigene Rechner.

👉 https://konforme-ki.de/deutschland-inferenz

---

**② Es lag nicht am Datenschutz. Es lag am Betriebsrat.** 🤝

AVV unterschrieben, Verzeichnis gepflegt, DSB zufrieden. Der Rollout kippte trotzdem, in einer Sitzung, in der jemand fragte: _kann dieses System Verhalten oder Leistung von Mitarbeitenden erfassen?_ 😶

Keine Schikane. Bei einem System, das das _kann_, greift § 87 Abs. 1 Nr. 6 BetrVG - unabhängig davon, ob es jemand vorhat.

📋 Eine einseitige Checkliste, die AI Act, DSGVO und § 203 in der Reihenfolge abarbeitet, in der sie anfallen
🔍 Pro Anfrage nachvollziehbar: wer, wann, welches Modell, welcher Anbieter
📄 Als Grundlage für eine Betriebsvereinbarung verwendbar, nicht als Ersatz dafür

⚡ Ein Betriebsrat blockt selten die Technik. Er blockt fehlende Antworten.

👉 Checkliste anfordern

---

**③ Der Tag, an dem der Konzern den Anbieter sperrte** 🔁

Eine neue Richtlinie, ein Sicherheitsvorfall, eine geänderte Nutzungsbedingung - und ein Werkzeug, das gestern freigegeben war, ist es heute nicht mehr. Normalerweise heißt das: neu auswählen, ausrollen, schulen, neu freigeben lassen. 😩

🔌 Ihre Werkzeuge zeigen auf eine `base_url`, nicht auf einen Anbieter
🔁 Fällt einer aus Ihrer Stufe, tauschen wir die Zuordnung dahinter
📄 Die Prüfspur bleibt dieselbe - also auch die erteilte Freigabe

⚡ Kein Lock-in heißt nicht „Sie könnten wechseln". Es heißt: der Wechsel kostet Sie keinen Rollout.

👉 https://konforme-ki.de/einstufung

---

**④ Sie hatten die Unterlagen offen. Hier sind sie nochmal - ohne Formular.** 📑

AVV nach Art. 28, TOM nach Art. 32, Subprozessorenliste mit Änderungshistorie, § 203-Zusatzvereinbarung, VVT-Muster. Herunterladen, lesen, weiterleiten. Auch wenn Sie sich am Ende gegen uns entscheiden.

👉 https://konforme-ki.de/unterlagen

---

**⑤ Vier Fragen. Sie sind bei der zweiten stehengeblieben.** ✅

Rund 60 Sekunden, ohne Anmeldung. Am Ende steht, welche Schutzstufe für Sie gilt und welche Unterlagen in Ihre Akte gehören. Eine Produktempfehlung, keine Rechtsauskunft.

👉 https://konforme-ki.de/einstufung

### Creatives

**Foto-Prompt:** Editorial architectural photograph, 24mm at f/5.6. A German data-centre cold aisle head-on: two rows of dark server racks receding to a vanishing point, neat visible cable management, faint green status LEDs. Cool blue-grey ambient light, slightly desaturated, industrial and serious rather than futuristic. Real infrastructure, not a science-fiction render. Palette: deep navy-ink (#0d1526) dominant, cool grey (#f1f3f7) on the floor, single teal-green LED accent (#37a98c). Strong central symmetry, clean darker negative space across the upper third.
**Negative:** no text, no logos, no people, no holograms, no floating data visualisations, no neon cyberpunk, no fire or drama, no flags, no map graphics, no robot.

**Overlay:** **Serverstandort EU. Eigentümer USA.** / Das sind zwei verschiedene Fragen.

---

# Creative-Formate - was in jedem Ad Set laufen sollte

Der größte Schwachpunkt der alten Fassung war nicht der Text, sondern dass alle sechs
Bildkonzepte dasselbe Bild waren: leerer Raum, gedecktes Navy, keine Menschen. Sauber im
Feed, unsichtbar in Reels und Stories - und dort liegt das günstige Inventar.

Pro Ad Set mindestens drei Formate:

### Video A - Gründer, Kamera, kein Skript-Politur (20–30 s, hochkant 9:16)

> „Ich baue ein Werkzeug für Kanzleien und Praxen, die KI nutzen wollen - aber nicht dürfen.
> Das Problem ist selten die Technik. Es ist, dass niemand belegen kann, wo die Anfrage
> tatsächlich hingegangen ist. Genau das schreibt hier jede einzelne Anfrage mit: Modell,
> Subprozessor, Zeitstempel, ein Hash, der sich nachträglich nicht ändern lässt.
> Vier Fragen auf der Seite sagen Ihnen, welche Stufe für Sie gilt. Dauert eine Minute."

Direkt gefilmt, kein Studio, Untertitel eingebrannt (85 % sehen ohne Ton). Das ist
erfahrungsgemäß das stärkste B2B-Format auf Meta - und aktuell fehlt es komplett.

### Video B - Bildschirmaufnahme des Prüfdatensatzes (15–20 s)

Die Anfrage abschicken, die entstandene Zeile zeigen, den Export klicken, das signierte PDF
öffnen. Keine Musik, keine Animation, Untertitel als Beschriftung. Ihr gesamter Pitch lautet
„hier ist der Beleg" - dann zeigen Sie ihn. Das ist das am stärksten differenzierte Asset,
das Sie haben.

### Plain-Text-Creative (statisch, 4:5)

Navy-Hintergrund, weiße Serifenlose, kein Foto, keine Grafik:

> **„Darf das in die KI?"**
> Vier Fragen. Dann wissen Sie es.
> konforme-ki.de

Liest sich wie eine Nachricht, nicht wie eine Anzeige. Konsistent unterschätzt, konsistent
günstig.

---

# Auswertung

**Nicht vor Tag 7 anfassen.** Vorher ist jede Zahl Lernphasen-Rauschen.

Reihenfolge der Entscheidungen:

1. **Ad Set ohne Signal nach 7 Tagen** → Kampagne pausieren, Budget auf die Gewinner.
   Nicht duplizieren, nicht „neu starten".
2. **Ad Set mit Signal** → Budget erhöhen, maximal 20 % pro Tag.
3. **Einzelne Anzeigen** erst nach 14 Tagen bewerten, und nur, wenn eine Anzeige den
   Großteil der Impressionen bekommen hat.

**Erwartung:** Kampagne 2 liefert die günstigsten Leads, Kampagne 3 die qualifiziertesten,
Kampagne 5 den mit Abstand besten CPA (warmer Traffic, deshalb nicht mit den kalten
Kampagnen vergleichen). Kampagne 4 hat den längsten Zyklus - nicht nach CPA im ersten Monat
beurteilen.

**Kanal-Hinweis:** Bei den Berufsgeheimnisträgern ist der Bedarf rechtlich erzwungen, also
wird aktiv gesucht. „DSGVO konforme KI Kanzlei", „AVV ChatGPT", „KI Betriebsvereinbarung"
auf Google Search dürften pro Euro besser laufen als diese fünf Kampagnen zusammen, und
LinkedIn besser bei der DSB-Gruppe. Bei begrenztem Budget ist Meta die Retargeting- und
Reichweiten-Schicht, nicht der Hauptkanal.

---

# Wenn Meta ablehnt - sicherste Schnitte in dieser Reihenfolge

1. **Kampagne 2 zuerst prüfen.** Gesundheitsnähe ist die häufigste automatische Ablehnung.
   Falls markiert: Variante ① (der Arztbrief) pausieren - sie ist die konkreteste
   Gesundheitsszene im Set. „Patientendaten" ist bereits durchgehend „Praxisdaten".
2. **Kampagne 5, Variante ②** (Betriebsrat / Leistungserfassung) - Überwachung am
   Arbeitsplatz ist sensibel. Ersatzlos pausieren, die anderen vier tragen die Kampagne.
3. **Paragrafen aus Headlines nehmen.** § 203 und BetrVG lesen sich für automatische Prüfung
   gelegentlich wie Rechtsberatung. Im Fließtext sind sie unproblematischer.

**Was nie in eine Anzeige darf:** Bußgeldhöhen · erfundene Kundenstimmen oder Prozentwerte ·
„garantiert konform" oder „rechtssicher" · jede Formulierung, die eine Rechtsauskunft im
Einzelfall verspricht · Zusagen zu Kanälen oder Stufen, die gerade nicht liefern.
Im Zweifel: lieber die Einschränkung mitschreiben als sie weglassen.

---

# Offene Punkte vor dem Start

- [ ] **Standort verifizieren.** Im Text steht durchgehend „auf eigener Hardware in
      Deutschland". Sobald gesichert (Frankfurt oder Nürnberg): Find-and-Replace. Eine
      falsche Stadt in einer Souveränitäts-Anzeige bemerkt genau diese Zielgruppe.
- [ ] Instant Form für die Checkliste angelegt und per Webhook am ESP
- [ ] Conversions API für `Lead` und `Contact` mit `event_id`-Deduplizierung
- [ ] Video A und B gedreht - ohne sie fehlt jedem Ad Set das stärkste Format
- [ ] Custom Audiences für Kampagne 5 angelegt (mindestens Website 180 Tage)
- [ ] Anbieterzahlen auf `/router` aktuell - sie stehen nicht mehr in den Anzeigen, werden
      aber nach dem Klick geprüft
