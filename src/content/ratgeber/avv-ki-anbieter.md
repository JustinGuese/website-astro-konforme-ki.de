---
title: 'AVV mit KI-Anbietern: Was nach Art. 28 DSGVO drinstehen muss'
metaTitle: 'AVV für KI-Anbieter — Checkliste nach Art. 28 DSGVO | konforme-ki.de'
description: 'AVV KI-Anbieter Art. 28 DSGVO: alle Pflichtangaben, Lücken bei Training, Retention, Subprozessoren und rote Flaggen — die Checkliste vor der Unterschrift.'
kurz: 'Was ein Anbieter-AVV nach Art. 28 DSGVO enthalten muss, welche KI-spezifischen Klauseln in Standard-Verträgen fehlen, und woran Sie einen unbrauchbaren AVV erkennen.'
keyword: 'AVV KI-Anbieter Art. 28 DSGVO'
category: 'Recht & Pflichten'
updated: '2026-08-07'
readingTime: 10
order: 4
related: ['verarbeitungsverzeichnis-ki', 'chatgpt-kanzlei-datenschutz', 'dsgvo-konforme-ki-alternativen']
---

## Warum der AVV zuerst geprüft werden muss

Bevor Sie einen KI-Dienst produktiv einsetzen, brauchen Sie einen wirksamen Auftragsverarbeitungsvertrag (AVV) mit dem Anbieter. Das ist keine Formalie, die sich nachreichen lässt — ohne AVV ist die Übermittlung personenbezogener Daten an den Anbieter eine Verarbeitung ohne Rechtsgrundlage, unabhängig davon, wie gut der Dienst sonst ist.

Das Problem in der Praxis: Die meisten KI-Anbieter legen einen Standard-AVV vor, der sich kaum von einem AVV für ein CRM-System unterscheidet. Er deckt die klassischen Pflichtangaben ab, sagt aber nichts zu den Fragen, die bei KI eigentlich entscheidend sind — Training, Retention, menschliche Durchsicht. Wer diesen Vertrag unterschreibt, ohne die KI-spezifischen Lücken zu prüfen, unterschreibt ein Dokument, das die eigentlichen Risiken nicht abdeckt.

Dieser Beitrag geht die Pflichtangaben nach Art. 28 Abs. 3 DSGVO durch, benennt die Klauseln, die bei KI-Anbietern zusätzlich gehören, und listet die roten Flaggen, an denen Sie einen unbrauchbaren AVV erkennen, bevor Sie unterschreiben.

## Die Pflichtangaben nach Art. 28 Abs. 3 DSGVO

Art. 28 Abs. 3 DSGVO zählt abschließend auf, was ein AVV regeln muss. Fehlt einer dieser Punkte oder ist er nur pauschal formuliert, ist der Vertrag angreifbar.

> „Die Verarbeitung durch einen Auftragsverarbeiter erfolgt auf der Grundlage eines Vertrags […], der den Auftragsverarbeiter in Bezug auf den Verantwortlichen bindet und in dem Gegenstand und Dauer der Verarbeitung, Art und Zweck der Verarbeitung, die Art der personenbezogenen Daten, die Kategorien betroffener Personen und die Pflichten und Rechte des Verantwortlichen festgelegt sind."

Die folgende Tabelle listet die einzelnen Pflichtelemente und was in einem KI-Kontext konkret dahinterstehen sollte.

| Pflichtelement (Art. 28 Abs. 3) | Was das bei einem KI-Anbieter konkret heißt |
|---|---|
| Gegenstand und Dauer | Nutzung des Gateways/Modells zur Beantwortung von Anfragen, für die Laufzeit der Hauptvereinbarung — nicht „bis auf Widerruf" ohne Bezug zum Vertrag. |
| Art und Zweck der Verarbeitung | Konkret benannt: Inferenz, Protokollierung, ggf. Zwischenspeicherung — nicht „Bereitstellung KI-basierter Dienstleistungen" als Sammelbegriff. |
| Art der personenbezogenen Daten | Prompt-Inhalte, Modellantworten, Metadaten (Zeitstempel, Modell, Token) — nicht offengelassen. |
| Kategorien betroffener Personen | Mandanten, Patienten, Mitarbeitende — je nach Nutzung benannt. |
| Weisungsgebundenheit (lit. a) | Verarbeitung ausschließlich auf dokumentierte Weisung, keine eigenmächtige Zweckänderung. |
| Vertraulichkeitsverpflichtung (lit. b) | Personal des Anbieters ist zur Vertraulichkeit verpflichtet — nicht nur „intern geschult". |
| Maßnahmen nach Art. 32 (lit. c) | TOM sind benannt oder als Anlage beigefügt, nicht nur „angemessene Sicherheitsmaßnahmen" behauptet. |
| Subunternehmer-Regelung (lit. d) | Konkrete Liste, Verfahren für Änderungen mit Widerspruchsrecht — kein Blankoscheck für beliebige Subprozessoren. |
| Unterstützung bei Betroffenenrechten (lit. e) | Der Anbieter muss technisch überhaupt in der Lage sein, z. B. eine Löschung pro betroffener Person umzusetzen. |
| Unterstützung nach Art. 32–36 (lit. f) | Meldung von Datenschutzverletzungen, Mitwirkung bei DSFA. |
| Löschung/Rückgabe nach Vertragsende (lit. g) | Konkrete Frist und konkretes Verfahren, nicht „nach angemessener Zeit". |
| konforme-ki.de- und Auditrechte (lit. h) | Der Verantwortliche muss die Einhaltung tatsächlich prüfen können — dazu unten mehr. |

Unser eigenes [AVV-Muster](/unterlagen/avv) ist nach genau diesem Schema aufgebaut — Sie können es als Referenz danebenlegen, wenn Sie den Vertrag eines anderen Anbieters prüfen.

## Training auf Ihren Daten ausschließen

Die häufigste Lücke in Standard-AVV: Der Vertrag schweigt dazu, ob Prompts und Antworten zum Training künftiger Modellversionen verwendet werden. Stattdessen verweist er auf eine Datenschutz- oder Nutzungsrichtlinie, die der Anbieter einseitig ändern kann.

Das reicht nicht. Eine Richtlinie ist kein Vertragsbestandteil im Sinne von Art. 28 DSGVO, und sie kann sich ändern, ohne dass Sie davon erfahren. Der Ausschluss von Training muss im AVV selbst stehen — als Zweckbindung, nicht als Versprechen auf einer Marketingseite.

Prüfen Sie konkret: Steht „keine Verarbeitung zu Trainingszwecken" als Satz im Vertragstext, oder nur als Verweis auf „aktuelle Richtlinien"? Der Unterschied entscheidet, ob Sie sich im Streitfall auf die Klausel berufen können.

## Retention: Wie lange leben Prompts und Antworten?

Die zweite häufige Lücke betrifft die Aufbewahrungsdauer. Viele Anbieter-AVV sagen etwas zur Löschung nach Vertragsende, aber nichts zur Speicherdauer während der laufenden Nutzung — also wie lange ein einzelner Prompt und die zugehörige Antwort nach der Beantwortung noch irgendwo liegen.

„Zero Retention" — keine Speicherung von Inhalten über die Verarbeitung des einzelnen Requests hinaus — ist der belastbarste Standard, wenn er tatsächlich im Vertrag steht. Eine Zusicherung im Sales-Gespräch oder in der FAQ zählt nicht; nur eine Zahl im Vertragstext lässt sich später durchsetzen.

Prüfen Sie auch, was „gelöscht" konkret bedeutet: aus dem Live-System, aus Backups, aus Logs der eingesetzten Subprozessoren. Ein Anbieter, der die Frage nicht in dieser Granularität beantworten kann, hat sie sich selbst noch nicht gestellt.

## Die Subprozessoren-Kette benennen

Ein KI-Dienst besteht in aller Regel aus mehreren Gliedern: einem Modellanbieter, einem Cloud-Hoster für die Inferenz, oft einem separaten Dienst für Monitoring oder Abuse-Erkennung. Jedes dieser Glieder ist ein Subprozessor im Sinne von Art. 28 Abs. 2 und Abs. 4 DSGVO.

Ein AVV, der nur den Vertragspartner nennt und die eigentliche Kette verschweigt oder pauschal als „von Zeit zu Zeit eingesetzte Partner" beschreibt, erfüllt die Pflicht aus lit. d nicht. Sie brauchen eine konkrete, benannte Liste — mit Sitz, Zweck und dem Verfahren für Änderungen samt Widerspruchsrecht.

Unsere eigene [Subprozessorenliste](/unterlagen/subprozessoren) zeigt, wie das aussehen kann: benannte Subprozessoren mit Sitz, Zweck und einer Änderungshistorie, statt eines Sammelverweises. Fragen Sie jeden Anbieter nach genau diesem Dokument, bevor Sie unterschreiben.

## Verarbeitungsort und Failover

Wo ein Request tatsächlich verarbeitet wird, ist mehr als eine technische Detailfrage — es entscheidet, welches Datenschutzrecht greift und ob ein Drittlandtransfer vorliegt. Ein AVV muss die Verarbeitungsregion konkret benennen, nicht nur den Firmensitz des Anbieters.

Besonders kritisch ist das Verhalten bei einem Ausfall: Erlaubt der Vertrag ein stillschweigendes Failover in eine andere Region, wenn die primäre Infrastruktur nicht verfügbar ist? Ein Vertrag, der ein solches Ausweichen erlaubt, ohne dass Sie es steuern oder auch nur erfahren, unterläuft jede Zusage zum Verarbeitungsort. Für Berufsgeheimnisträger ist das kein Randfall, sondern der Moment, in dem die Zusicherung „nur EU-Verarbeitung" bricht.

Ein sauberer Vertrag regelt das Gegenteil: Ist kein konformer Verarbeitungsort verfügbar, schlägt die Anfrage fehl, statt umgeleitet zu werden. Das kostet im Zweifel Verfügbarkeit — aber Verfügbarkeit ist ersetzbar, ein Bruch der Zweckbindung nicht.

## Menschliche Durchsicht und Missbrauchsüberwachung

Viele KI-Anbieter behalten sich vor, auffällige oder gemeldete Inhalte durch Mitarbeitende prüfen zu lassen — als Missbrauchsschutz gedacht, in der AVV-Klausel aber oft nur als „kann zu Überprüfungszwecken eingesehen werden" formuliert, ohne Einschränkung auf bestimmte Fälle oder Zustimmung des Kunden.

Für die meisten Branchen ist das ein akzeptables Risiko. Für Berufsgeheimnisträger ist es das nicht: Eine Klausel, die eine anlasslose oder automatisch ausgelöste menschliche Einsichtnahme erlaubt, ist mit § 203 StGB kaum vereinbar, weil sie eine tatsächliche Kenntnisnahme durch eine dritte Person ermöglicht, die über die technische Verarbeitung hinausgeht.

Prüfen Sie, ob der Vertrag eine manuelle Einsichtnahme ausschließt oder zumindest an Ihre vorherige Zustimmung im Einzelfall bindet. „Wir schauen nur bei gemeldeten Verstößen rein" ist keine Vertragsklausel, sondern eine Praxisbeschreibung, die sich ändern kann.

## Auditrechte, die sich tatsächlich ausüben lassen

Art. 28 Abs. 3 lit. h DSGVO verlangt, dass der Verantwortliche die Einhaltung der Pflichten des Auftragsverarbeiters überprüfen kann. In der Praxis erschöpft sich das bei vielen Anbieter-AVV in einem Satz: „Wir stellen auf Anfrage einen SOC 2- oder ISO-27001-Bericht zur Verfügung."

Ein Zertifikatsbericht ist ein Baustein, aber kein Ersatz für ein Auditrecht. Er bestätigt allgemeine Prozesse, nicht die konkrete Verarbeitung Ihrer Daten. Ein belastbarer AVV benennt zusätzlich, wie Sie Ihre eigene Nutzung nachvollziehen können — etwa über einen Export der eigenen Verarbeitungsprotokolle.

Das ist der Punkt, an dem viele Verträge auseinanderfallen: Ein Anbieter kann Ihnen zusichern, dass er sich an die Klauseln hält, aber wenn Sie das nach einem konkreten Vorfall nicht selbst nachvollziehen können, ist die Zusicherung im Streitfall wenig wert.

## Drittlandtransfer: SCC und die Unsicherheit beim DPF

Verarbeitet der Anbieter — oder einer seiner Subprozessoren — außerhalb der EU/des EWR, greift Kapitel V DSGVO. Für die USA ist die Angemessenheitsentscheidung zum EU-US Data Privacy Framework derzeit gültiges Recht; sie wurde im September 2025 gerichtlich bestätigt, gegen dieses Urteil ist jedoch beim EuGH ein Rechtsmittel anhängig (Rechtssache C-703/25 P). Ohne Angemessenheitsbeschluss bräuchte es Standardvertragsklauseln (SCC) samt Transfer Impact Assessment.

Diese Unsicherheit ist kein Nebenaspekt. Nach zwei vorangegangenen Aufhebungen transatlantischer Rahmen — Safe Harbor und Privacy Shield — ist ein anhängiges Rechtsmittel gegen die dritte Angemessenheitsentscheidung ein eigenständiger Grund, sich nicht auf US-Verarbeitung zu verlassen, wenn eine EU-Alternative besteht. Ein AVV, der Ihnen SCC als Absicherung anbietet, löst das rechtliche Risiko formal — das faktische Risiko, dass sich die Rechtsgrundlage während der Vertragslaufzeit ändert, bleibt bestehen. Mehr zum Zeitplan und den einzelnen Rechtsgrundlagen finden Sie auf unserer Übersichtsseite zum [EU-KI-Recht](/eu-ki-recht).

## Die Ebene über dem AVV: § 203 StGB und mitwirkende Personen

Für Berufsgeheimnisträger — Ärzte, Rechtsanwälte, Steuerberater, Notare, Psychotherapeuten, Angehörige der Pflegeberufe — reicht ein AVV allein nicht aus. § 203 StGB ist eine Strafnorm, keine Vertragsfrage, und ein AVV nach Art. 28 DSGVO löst sie nicht automatisch mit.

Seit der Reform 2017 gilt: Die Weitergabe an „mitwirkende Personen" ist kein strafbares Offenbaren, wenn diese Personen sorgfältig ausgewählt und wirksam zur Verschwiegenheit verpflichtet wurden (§ 203 Abs. 3 StGB). Diese Verpflichtung ist etwas anderes als die Vertraulichkeitsklausel im AVV — sie muss den Anbieter ausdrücklich als „mitwirkende Person" im Sinne der Strafnorm einbinden, nicht nur datenschutzrechtlich verpflichten.

In der Praxis heißt das: Sie brauchen zusätzlich zum AVV eine eigene § 203-Zusatzvereinbarung mit dem Anbieter. Ohne sie bleibt die Weitergabe von Mandanten- oder Patientendaten an den KI-Anbieter strafrechtlich riskant, selbst wenn der AVV datenschutzrechtlich einwandfrei ist. Details zur Dokumentationspflicht, die daraus für Ihr Verarbeitungsverzeichnis folgt, finden Sie im Beitrag zum [Verarbeitungsverzeichnis für KI-Einsatz](/ratgeber/verarbeitungsverzeichnis-ki); zur konkreten Problematik von Standard-Chatbots in der Kanzlei im Beitrag [ChatGPT in der Kanzlei und Datenschutz](/ratgeber/chatgpt-kanzlei-datenschutz).

## Rote Flaggen in einem Anbieter-AVV

Die folgende Tabelle fasst zusammen, worauf Sie beim Lesen eines fremden AVV besonders achten sollten.

| Rote Flagge | Was ein tragfähiger Vertrag stattdessen enthält |
|---|---|
| Verweis auf „aktuelle Datenschutzrichtlinie" statt Regelung im Vertragstext | Zweckbindung, Retention und Trainingsausschluss als Vertragsklauseln |
| Subprozessoren „können sich ändern, siehe Website" | Benannte Liste mit Sitz, Zweck, Änderungsverfahren und Widerspruchsrecht |
| Keine Angabe zur Speicherdauer von Prompts/Antworten | Konkrete Retention-Angabe, im Idealfall Zero Retention |
| Verarbeitungsort „weltweit" oder ungenannt | Konkrete Region, kein stillschweigendes Failover außerhalb dieser Region |
| „Wir behalten uns Einsichtnahme zu Überprüfungszwecken vor" ohne Einschränkung | Ausschluss oder Zustimmungspflicht für manuelle Einsichtnahme im Einzelfall |
| Auditrecht = „SOC 2-Bericht auf Anfrage" | Zusätzlich: exportierbare, request-genaue Nachweise der eigenen Nutzung |
| Löschfrist „innerhalb angemessener Zeit" | Konkrete Frist in Tagen, für Live-System, Backups und Logs getrennt benannt |
| Keine eigene § 203-Zusatzvereinbarung angeboten | Separate, benennbare Verpflichtung als „mitwirkende Person" |

Wenn ein Anbieter mehrere dieser Punkte nicht beantworten kann oder ausweicht, ist das selbst eine Information — meist bedeutet es, dass die Frage intern noch nicht durchdacht wurde, nicht nur, dass die Antwort ungünstig ausfällt.

## Ein AVV ist ein Dokument, kein Nachweis

Ein sauber verhandelter AVV beschreibt, was passieren soll: keine Trainingsverwendung, definierte Retention, benannte Subprozessoren, EU-Verarbeitung. Das ist die Grundlage — aber es ist ein Versprechen für die Zukunft, kein Beleg für das, was bei einer konkreten Anfrage tatsächlich passiert ist.

Wenn ein Aufsichtsbehörde, ein Mandant oder im Ernstfall ein Gericht fragt, welches Modell eine bestimmte Anfrage am 14. März verarbeitet hat, über welchen Subprozessor, aus welcher Region, mit welcher Antwort — beantwortet der AVV diese Frage nicht. Er sagt nur, was vertraglich hätte gelten sollen. Ob es auch eingehalten wurde, ist eine andere Frage, und sie lässt sich nur mit einem tatsächlichen, unveränderbaren Protokoll der einzelnen Anfrage beantworten, nicht mit dem Vertragstext allein.

Genau das ist der Unterschied zwischen einem AVV und einem Nachweis: Der eine regelt die Absicht, der andere belegt den Vorgang. Wer beides braucht, sollte prüfen, wie ein Anbieter diesen zweiten Teil überhaupt leisten kann — testbar zum Beispiel im [Playground](/playground), wo Sie sehen, welche Angaben zu Modell, Subprozessor und Zeitstempel pro Anfrage tatsächlich erzeugt werden, und nachlesbar in unseren [Unterlagen](/unterlagen).
