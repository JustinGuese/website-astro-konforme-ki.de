---
title: Technische und organisatorische Maßnahmen (TOM) nach Art. 32 DSGVO
kurz: Die Sicherheitsmaßnahmen der Nachweis-Gateway-Plattform, gegliedert nach den DSGVO-Schutzzielen.
version: 'v0.9'
stand: '6. August 2026'
reihenfolge: 2
---

> **ENTWURF — vor Verwendung juristisch prüfen.** Dieses Dokument ist eine Vorlage zur eigenen Prüfung und Anpassung, keine Rechtsberatung. Siehe [RDG-Hinweis](/rdg-hinweis).

## 1. Vertraulichkeit

- Transportverschlüsselung (TLS 1.2+) für alle Anfragen zwischen Client, Gateway und Subprozessoren.
- Zugriffskontrolle über API-Schlüssel pro Kunde; Rotation auf Anfrage jederzeit möglich.
- Rollenbasierte Zugriffsbeschränkung auf interne Systeme; Zugriff auf Kundendaten nur, soweit für den Support erforderlich.

## 2. Integrität

- Jede Anfrage wird als Nachweis-Datensatz hash-verkettet protokolliert — nachträgliche unbemerkte Veränderung ist ausgeschlossen.
- Änderungen an der Subprozessorenliste werden versioniert und mit Zeitstempel dokumentiert.

## 3. Verfügbarkeit und Belastbarkeit

- Redundante Anbindung an mehrere EU-Subprozessoren; bei Ausfall eines Anbieters erfolgt Routing an einen alternativen Anbieter aus der EU-Liste — niemals außerhalb davon.
- Regelmäßige Backups der Protokolldaten (nicht der Prompt-Inhalte, siehe Retention).

## 4. Verfahren zur Überprüfung, Bewertung und Evaluierung

- Die Subprozessorenliste wird mindestens vierteljährlich überprüft.
- Sicherheitsrelevante Vorfälle werden dokumentiert und, soweit meldepflichtig, unverzüglich an betroffene Kunden kommuniziert.

## 5. Datensparsamkeit und Speicherbegrenzung

- Standard-Retention für Prompt-Inhalte: 0 Tage — es wird nur das Nachweis-Metadatum (Modell, Subprozessor, Zeitstempel, Hash, Token-Anzahl) dauerhaft gespeichert, nicht der Inhalt selbst.
- Kein Training auf Kundendaten, weder durch uns noch vertraglich durch die eingesetzten Subprozessoren.

## 6. Auftragskontrolle

- Subprozessoren werden ausschließlich nach Prüfung ihrer EU-Jurisdiktion und eines eigenen, belastbaren AVV eingesetzt.
- Liste und Änderungshistorie: [Subprozessorenliste](/unterlagen/subprozessoren).

Fragen zu diesem Dokument: [info@konforme-ki.de](mailto:info@konforme-ki.de)
