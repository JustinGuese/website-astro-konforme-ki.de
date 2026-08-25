---
title: 'DSGVO-konforme Alternativen zu ChatGPT: Was EU-Hosting wirklich bedeutet'
metaTitle: 'DSGVO-konforme ChatGPT-Alternativen — EU-KI im Vergleich | Nachweis'
description: 'DSGVO-konforme KI Alternative zu ChatGPT: EU-Hosting ist eine Stufenleiter mit vier Ebenen, kein Ja/Nein-Siegel. Was Sie jedem Anbieter abverlangen sollten.'
kurz: 'EU-Hosting wird als Ja/Nein-Frage verkauft, ist aber eine Leiter mit vier sehr unterschiedlichen Stufen. Was Sie einem Anbieter konkret abverlangen sollten, bevor Sie ihm vertrauen.'
keyword: 'DSGVO-konforme KI Alternative ChatGPT'
category: 'Auswahl & Technik'
updated: '2026-08-07'
readingTime: 11
order: 6
related: ['avv-ki-anbieter', 'chatgpt-kanzlei-datenschutz', 'ki-arztpraxis-datenschutz']
---

Wer erkannt hat, dass ChatGPT für sensible Daten nicht infrage kommt, landet meist auf derselben Suche: „DSGVO-konforme Alternative". Das Problem an dieser Suche ist der Begriff selbst. „EU-Hosting" wird im Marketing fast jedes Anbieters als binäres Merkmal verkauft — entweder ein Häkchen oder keins. Tatsächlich ist es eine Leiter mit mehreren Sprossen, und die Garantien auf den einzelnen Stufen unterscheiden sich fundamental. Wer das nicht auseinanderhält, kauft im Zweifel ein Versprechen statt eine Eigenschaft.

## Die EU-Hosting-Leiter: vier Stufen, keine binäre Entscheidung

Bevor Sie einen Anbieter vergleichen, lohnt es sich, die Frage „EU-Hosting: ja oder nein?" durch eine präzisere zu ersetzen: Auf welcher Stufe steht dieser Anbieter tatsächlich? Die folgenden vier Stufen sind nicht gleichwertig — sie unterscheiden sich darin, wer im Zweifel Zugriff auf Ihre Daten verlangen kann und auf welcher Rechtsgrundlage.

### Stufe 1 — US-Anbieter mit EU-Region

Die schwächste Ausprägung: Ein US-Konzern bietet eine Region „EU" in seiner Konsole an. Das ist zunächst nur eine Einstellung zur physischen Serverlage, keine rechtliche Zusicherung. Die Konzernmutter bleibt US-amerikanisch und damit potenziell Adressat von Herausgabeanordnungen nach US-Recht — unabhängig davon, wo der Server physisch steht. Die Regionswahl ist ein Infrastrukturdetail, kein Vertragsschutz.

### Stufe 2 — US-Anbieter mit EU-Datenresidenz, SCC und DPF

Besser: Der Anbieter unterlegt die EU-Verarbeitung mit Standardvertragsklauseln (SCC) und beruft sich auf das EU-US Data Privacy Framework. Das ist rechtlich mehr als Stufe 1. Aber der DPF-Angemessenheitsbeschluss ist selbst ein Risikofaktor, kein Freibrief — dazu unten mehr. Und die vertragliche Konstruktion ändert nichts daran, dass die Konzernmutter weiterhin US-amerikanischem Recht unterliegt.

### Stufe 3 — EU-Anbieter mit offenen Modellgewichten

Ein Anbieter mit Sitz in der EU, ohne US-Konzernmutter, betreibt ein offenes Sprachmodell auf eigener oder zugemieteter EU-Infrastruktur. Das ist ein echter Kategoriesprung — es gibt keine ausländische Muttergesellschaft, die Herausgabeanordnungen unterworfen sein könnte. Was hier zu prüfen bleibt: die Subprozessorkette darunter. Wer betreibt die Rechenzentren, auf denen dieser EU-Anbieter tatsächlich rechnet?

### Stufe 4 — dedizierte Infrastruktur

Die stärkste Stufe: keine externe Subprozessorkette mehr für den Inferenzschritt. Die Hardware gehört entweder dem Anbieter selbst in einem eigenen Rechenzentrum oder steht physisch in Ihrem eigenen Rechenzentrum. Es gibt schlicht keinen weiteren Vertragspartner mehr, dessen Zuverlässigkeit Sie bewerten müssten.

## Die Leiter im Überblick

| Stufe | Merkmal | Wer könnte trotzdem zugreifen? | Was Sie prüfen müssen |
|---|---|---|---|
| 1 | US-Anbieter, EU-Region | US-Konzernmutter | Ist die Region mehr als eine Einstellung? |
| 2 | US-Anbieter, EU-Residenz + SCC/DPF | US-Konzernmutter, über Rechtsweg | Status des DPF-Angemessenheitsbeschlusses |
| 3 | EU-Anbieter, offenes Modell | Subprozessoren unterhalb des EU-Anbieters | Wer hostet die Rechenkapazität tatsächlich? |
| 4 | Dedizierte Infrastruktur | Niemand außerhalb des direkten Vertragspartners | Betreiber-Bonität, physischer Zugriffsschutz |

Diese Tabelle ist eine Vereinfachung — reale Anbieter mischen mitunter Elemente mehrerer Stufen. Aber als Prüfraster ist sie brauchbarer als ein einzelnes „EU-Hosting"-Siegel auf einer Landingpage.

## Modell-Herkunft ist nicht Betreiber-Herkunft

Ein Punkt, der in den meisten Vergleichsartikeln übergangen wird: Es ist unerheblich, wo ein Sprachmodell trainiert wurde. Entscheidend ist, wer die Anfrage zur Inferenzzeit verarbeitet — wer den Prompt tatsächlich sieht, wo der Server steht, welchem Recht dieser Betreiber unterliegt.

Ein offen verfügbares Modell, gleich welcher Herkunft, kann von einem EU-Betreiber auf EU-Infrastruktur betrieben werden, ohne dass die Trainingsherkunft des Modells rechtlich relevant wird. Umgekehrt ändert ein „europäisch klingender" Markenname nichts daran, wenn die Inferenz am Ende bei einem US-Konzern landet. Fragen Sie nicht „woher kommt das Modell", sondern „wer betreibt die Instanz, die meinen Prompt verarbeitet, und in welcher Jurisdiktion".

## Die Fragen, die Sie jedem Anbieter stellen sollten

Statt sich auf ein Marketingversprechen zu verlassen, lässt sich die Prüfung auf eine konkrete Fragenliste herunterbrechen:

- Wo läuft die Inferenz physisch — welches Rechenzentrum, welches Land?
- Wer ist die Vertragspartei — welche juristische Person, mit Sitz wo?
- Wer sind die Subprozessoren, und bekomme ich eine Liste mit Änderungsbenachrichtigung, nicht nur eine einmalige Zusicherung?
- Ist Training auf meinen Daten vertraglich ausgeschlossen — nicht nur in einer Richtlinie, sondern im Vertragstext?
- Wie lange werden Prompts und Antworten aufbewahrt, und wer legt diese Frist fest?
- Gibt es menschliche Sichtung von markierten Inhalten, und unter welchen Bedingungen?
- Was passiert bei einem Ausfall — kann meine Anfrage außerhalb der EU umgeleitet werden?
- Kann ich pro Anfrage nachweisen, wo sie tatsächlich verarbeitet wurde — oder muss ich das glauben?

Die letzten beiden Fragen sind die am häufigsten übergangenen — und die, die im Ernstfall den größten Unterschied machen.

## Failover: die versteckte Falle

Ein Anbieter kann in seinen Vertragsunterlagen glaubhaft „ausschließlich EU-Verarbeitung" zusichern und trotzdem unter Last stillschweigend auf eine andere Region ausweichen. Das ist keine böswillige Täuschung — es ist oft eine technische Standardeinstellung, die niemand explizit abgeschaltet hat. Für Sie als Kunde macht das keinen Unterschied: Die Zusicherung war zum Zeitpunkt der Vertragsunterschrift wahr und im Moment der eigentlichen Anfrage nicht mehr.

Das ist der Grund, warum eine reine Anbieterzusage nicht reicht — es braucht ein Verfahren, das Umleitung technisch verhindert statt sie nur vertraglich zu untersagen.

## Fail closed statt fail open

Die richtige Antwort auf dieses Risiko ist eine einfache Regel: Steht kein zulässiger EU-Subprozessor zur Verfügung, muss die Anfrage fehlschlagen — nicht umgeleitet werden. „Fail closed" bedeutet: lieber eine sichtbare Fehlermeldung als eine unsichtbare Grenzüberschreitung. Ein dokumentiertes Beispiel für dieses Prinzip findet sich in der öffentlich einsehbaren [Subprozessorenliste](/unterlagen/subprozessoren): Ist kein gelisteter Subprozessor verfügbar, schlägt die betroffene Anfrage fehl, statt umgeleitet zu werden.

Fragen Sie jeden Anbieter explizit nach diesem Verhalten, nicht nur nach dem Normalfall. Ein Anbieter, der auf diese Frage keine klare Antwort hat, hat das Verhalten seines eigenen Systems im Fehlerfall vermutlich nicht definiert.

## Warum die Anbieterwahl bei Berufsgeheimnis nicht ausreicht

Für Berufsgeheimnisträger — Kanzleien, Steuerberatung, Arztpraxen, Notariate — ist die Wahl eines EU-Anbieters notwendig, aber nicht hinreichend. § 203 StGB verlangt zusätzlich, dass der Anbieter als „mitwirkende Person" wirksam zur Verschwiegenheit verpflichtet wird — mit sorgfältiger Auswahl, einer konkreten Zusatzvereinbarung und, wo relevant, einer Belehrung der beteiligten Personen. Ein EU-Rechenzentrum allein erfüllt diese Voraussetzung nicht automatisch.

Details zu dieser Unterscheidung, insbesondere was ein Auftragsverarbeitungsvertrag mit einem KI-Anbieter konkret enthalten muss, behandelt der Artikel [AVV mit KI-Anbietern](/ratgeber/avv-ki-anbieter). Berufsgruppenspezifische Vertiefungen finden sich in [ChatGPT in der Kanzlei](/ratgeber/chatgpt-kanzlei-datenschutz) und [KI in der Arztpraxis](/ratgeber/ki-arztpraxis-datenschutz). Einen vollständigen Überblick über AI Act, DSGVO und § 203 StGB liefert die Seite [EU-KI-Recht](/eu-ki-recht).

## Der DPF-Status ist selbst ein Risikofaktor

Wer auf Stufe 2 der Leiter setzt — US-Anbieter mit SCC und Berufung auf das EU-US Data Privacy Framework — verlässt sich auf eine Angemessenheitsentscheidung, deren Bestand nicht endgültig gesichert ist. Der Beschluss ist derzeit gültiges Recht und wurde vom Gericht der Europäischen Union im September 2025 bestätigt; gegen dieses Urteil ist jedoch ein Rechtsmittel beim EuGH anhängig (Rechtssache C-703/25 P). Nach zwei vorangegangenen Aufhebungen vergleichbarer Transatlantik-Rahmen — Safe Harbor und Privacy Shield — ist diese Unsicherheit kein theoretisches Risiko, sondern ein eigenständiger Grund, EU-Verarbeitung vorzuziehen, wo eine echte Alternative besteht.

Das bedeutet nicht, dass Stufe-2-Anbieter aktuell rechtswidrig handeln. Es bedeutet, dass eine Entscheidung für diese Stufe eine Wette auf den Fortbestand eines Rahmens ist, der historisch zweimal gekippt wurde.

## Selbst hosten — die ehrliche Abwägung

Wer maximale Kontrolle will, denkt irgendwann über Self-Hosting nach: ein offenes Modell auf eigener Hardware, ohne jeden externen Anbieter. Das ist die konsequenteste Umsetzung von Stufe 4 — und ehrlicherweise auch die aufwendigste.

Die Kosten sind real: geeignete GPU-Hardware ist teuer in Anschaffung und Betrieb, und Verfügbarkeit ist keine Selbstverständlichkeit — leistungsfähige Karten sind phasenweise knapp und die Lieferzeiten unsicher. Der Betriebsaufwand ist ebenfalls real: Updates, Monitoring, Absicherung gegen Ausfälle und Angriffe sind eine dauerhafte Aufgabe, keine einmalige Einrichtung. Und die erreichbare Modellqualität hängt an dem, was Sie sich leisten können zu betreiben — nicht an der theoretisch besten verfügbaren Option.

Für Organisationen mit eigener IT-Abteilung und einem klaren Sicherheitsbedarf kann Self-Hosting die richtige Antwort sein. Für die meisten Kanzleien, Praxen und Steuerkanzleien ist der Betriebsaufwand jedoch keine Nebensache, sondern der Hauptgrund, warum ein dedizierter externer Betreiber — Stufe 4 der Leiter, aber ohne den eigenen Betriebsaufwand — der praktikablere Mittelweg ist.

## Qualität vs. Compliance: kein Gleichstand vorgaukeln

Ein ehrlicher Vergleich verlangt auch Ehrlichkeit an dieser Stelle: EU-gehostete, offene Modelle unterscheiden sich für manche Aufgaben von den größten US-amerikanischen Frontier-Modellen. Das gilt nicht für jede Aufgabe gleichermaßen — für strukturierte Zusammenfassungen, Dokumentenanalyse oder Textbausteine ist der Unterschied in der Praxis oft gering. Für sehr anspruchsvolle Aufgaben an der Grenze des technisch Machbaren kann er spürbar sein.

Wer diesen Unterschied leugnet, verliert Glaubwürdigkeit, sobald der erste Vergleichstest gemacht wird. Die ehrlichere Position: Für Berufsgeheimnisträger ist die Frage nicht „welches Modell ist objektiv am besten", sondern „welches Modell ist gut genug für diese Aufgabe, ohne dass ich dafür ein strafrechtliches oder datenschutzrechtliches Risiko eingehe". Das ist eine andere Optimierungsfrage, und sie fällt für die meisten Alltagsaufgaben — Zusammenfassen, Entwürfe, Recherche-Vorarbeit — zugunsten der EU-Option aus, ohne dass Sie sich etwas vormachen müssen.

Ein unverbindlicher Praxistest lohnt sich in jedem Fall, bevor Sie sich auf einen Anbieter festlegen — dafür eignet sich ein aufgezeichneter [Playground](/playground) besser als ein reines Marketingversprechen, und eine [Preisübersicht](/preise) zeigt, welche Stufe der Leiter zu welchem Budget passt.

## Jede Zusicherung ist eine Behauptung, bis Sie sie prüfen können

Jedes Kriterium in diesem Artikel — die Stufe der Leiter, der Subprozessor, das Fail-closed-Verhalten, der Ausschluss von Training auf Ihren Daten — ist zunächst nichts weiter als eine Zusicherung des Anbieters. Nachweis, wie der Name andeutet, versteht diese Zusicherungen als etwas, das pro Anfrage belegbar sein muss, nicht nur einmal im Vertrag behauptet. Ob Sie sich für Nachweis oder einen anderen Anbieter entscheiden: Verlangen Sie, dass jede der oben genannten Fragen nicht nur beantwortet, sondern nachprüfbar beantwortet wird — mit einer [Unterlagen-Liste](/unterlagen), die Sie tatsächlich lesen können, statt mit einem Siegel, das Sie glauben müssen.
