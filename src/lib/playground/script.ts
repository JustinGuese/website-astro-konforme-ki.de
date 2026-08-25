import type { PlaygroundTurn } from './types';

/**
 * Aufgezeichnete Playground-Konversationen.
 *
 * Diese Antworten sind keine Live-Inferenz — siehe die Kennzeichnung im
 * Playground selbst. Sie existieren, damit ein Besucher ohne Backend sehen
 * kann, wie der Nachweis-Rekord neben einer Antwort entsteht, und wie sich
 * dieser Rekord je nach gewählter Säule unterscheidet. Erfundene Latenz- oder
 * Durchsatzzahlen gehören hier nicht hin; jedes Feld muss plausibel für ein
 * echtes System dieser Art sein.
 *
 * Säule 1 = EU-Anbieter-Autorouting (Scaleway/IONOS/Mistral/OVHcloud).
 * Säule 2 = DataFortress.cloud GmbH, geteilte Server, Nürnberg.
 * Säule 3 = DataFortress.cloud GmbH, dediziert in Ihrem Rechenzentrum.
 * Für die drei "normalen" Anfragen ändert sich nur der Rekord — die Antwort
 * bleibt inhaltlich gleich. Für "us-modell" ändert sich auch die Antwort:
 * unter Säule 2/3 gibt es schlicht kein Drittanbieter-Routing, das man
 * anfragen könnte, und das ist der Punkt.
 */

export const PLAYGROUND_SCRIPT: PlaygroundTurn[] = [
  {
    id: 'mandantenschreiben',
    prompt: 'Fasse dieses Mandantenschreiben in drei Sätzen zusammen.',
    varianten: {
      1: {
        antwort:
          'Der Mandant widerspricht dem Steuerbescheid vom 14.03. wegen einer nicht berücksichtigten Sonderabschreibung nach § 7g EStG. Die Frist für den Einspruch läuft am 21.08. ab. Er bittet um Prüfung, ob zusätzlich ein Antrag auf Aussetzung der Vollziehung sinnvoll ist.',
        record: {
          anfrage_id: 'req_8f2a1c93',
          modell: 'mistral-large-2411',
          subprozessor: 'Mistral AI (Paris, FR)',
          rechenzentrum: 'eu-west-3 · Paris',
          retention: 'Kein Training · 0 Tage Speicherung',
          tokens_in: 412,
          tokens_out: 96,
          zeitstempel: '2026-08-04T09:12:47Z',
          hash: '7be1c4a9f3d820e6b1274af90c3d5e8b4a1f6209c7e3b48d925f1a0367ce904',
          vorgaenger_hash: 'a3f9d21caa7420b6e819cf305e8b41279f6203c8e7b4d92a1f5c0367ce90211',
          status: 'freigegeben',
        },
      },
      2: {
        antwort:
          'Der Mandant widerspricht dem Steuerbescheid vom 14.03. wegen einer nicht berücksichtigten Sonderabschreibung nach § 7g EStG. Die Frist für den Einspruch läuft am 21.08. ab. Er bittet um Prüfung, ob zusätzlich ein Antrag auf Aussetzung der Vollziehung sinnvoll ist.',
        record: {
          anfrage_id: 'req_8f2a1c93',
          modell: 'nachweis-llm-70b (DataFortress-Hosting)',
          subprozessor: 'Keiner — DataFortress.cloud GmbH direkt',
          rechenzentrum: 'Nürnberg, DE (eigenes RZ, geteilt)',
          retention: 'Kein Training · 0 Tage Speicherung',
          tokens_in: 412,
          tokens_out: 96,
          zeitstempel: '2026-08-04T09:12:47Z',
          hash: 'd2c6f184a903b7e5619cf4082ad35b1f9e6720ac8b437dd2915f0a4267cd813',
          vorgaenger_hash: '9e1a4c7203bd8156ae920fc751d3068b4a7c2f930e68d47b1c50a297decf164',
          status: 'freigegeben',
        },
      },
      3: {
        antwort:
          'Der Mandant widerspricht dem Steuerbescheid vom 14.03. wegen einer nicht berücksichtigten Sonderabschreibung nach § 7g EStG. Die Frist für den Einspruch läuft am 21.08. ab. Er bittet um Prüfung, ob zusätzlich ein Antrag auf Aussetzung der Vollziehung sinnvoll ist.',
        record: {
          anfrage_id: 'req_8f2a1c93',
          modell: 'nachweis-llm-70b (dediziert)',
          subprozessor: 'Keiner — Hardware in Ihrem eigenen Rechenzentrum',
          rechenzentrum: 'Ihr Rechenzentrum / Ihre Colocation',
          retention: 'Konfigurierbar · Standard 0 Tage',
          tokens_in: 412,
          tokens_out: 96,
          zeitstempel: '2026-08-04T09:12:47Z',
          hash: '5f8b2ad713c904e6b8271fa093c5d61e8f2b47a06c9e3d81f47a2903bce7415',
          vorgaenger_hash: '3a6d1e94b2c07f58ad619be043c7f28d5a4e761f8b930cd21e59a748defc603',
          status: 'freigegeben',
        },
      },
    },
  },
  {
    id: 'steuerbescheid',
    prompt: 'Prüfe diesen Steuerbescheid auf rechnerische Abweichungen zur Vorjahresveranlagung.',
    varianten: {
      1: {
        antwort:
          'Die Bemessungsgrundlage weicht um 1.240 € vom Vorjahr ab, plausibel durch die AfA-Anpassung erklärbar. Der angesetzte Solidaritätszuschlag ist korrekt berechnet. Eine Abweichung bei den Vorsorgeaufwendungen (−180 €) sollte gegengeprüft werden — mögliche Ursache: geänderter Beitragssatz der Kammerversorgung.',
        record: {
          anfrage_id: 'req_5d94e120',
          modell: 'ionos-mixtral-8x22b',
          subprozessor: 'IONOS SE (Berlin, DE)',
          rechenzentrum: 'de-fra-1 · Frankfurt',
          retention: 'Kein Training · 0 Tage Speicherung',
          tokens_in: 890,
          tokens_out: 143,
          zeitstempel: '2026-08-04T09:14:03Z',
          hash: 'c91a3e6f204b8d715ac930e7f4b12d968a5c3e0b71f4926dc80531e7af9c4b2',
          vorgaenger_hash: '7be1c4a9f3d820e6b1274af90c3d5e8b4a1f6209c7e3b48d925f1a0367ce904',
          status: 'freigegeben',
        },
      },
      2: {
        antwort:
          'Die Bemessungsgrundlage weicht um 1.240 € vom Vorjahr ab, plausibel durch die AfA-Anpassung erklärbar. Der angesetzte Solidaritätszuschlag ist korrekt berechnet. Eine Abweichung bei den Vorsorgeaufwendungen (−180 €) sollte gegengeprüft werden — mögliche Ursache: geänderter Beitragssatz der Kammerversorgung.',
        record: {
          anfrage_id: 'req_5d94e120',
          modell: 'nachweis-llm-70b (DataFortress-Hosting)',
          subprozessor: 'Keiner — DataFortress.cloud GmbH direkt',
          rechenzentrum: 'Nürnberg, DE (eigenes RZ, geteilt)',
          retention: 'Kein Training · 0 Tage Speicherung',
          tokens_in: 890,
          tokens_out: 143,
          zeitstempel: '2026-08-04T09:14:03Z',
          hash: 'b47d92e6f13a805cd7291bf640e3a5d9f1c2087b4e619ad073fc5218b96de40',
          vorgaenger_hash: 'd2c6f184a903b7e5619cf4082ad35b1f9e6720ac8b437dd2915f0a4267cd813',
          status: 'freigegeben',
        },
      },
      3: {
        antwort:
          'Die Bemessungsgrundlage weicht um 1.240 € vom Vorjahr ab, plausibel durch die AfA-Anpassung erklärbar. Der angesetzte Solidaritätszuschlag ist korrekt berechnet. Eine Abweichung bei den Vorsorgeaufwendungen (−180 €) sollte gegengeprüft werden — mögliche Ursache: geänderter Beitragssatz der Kammerversorgung.',
        record: {
          anfrage_id: 'req_5d94e120',
          modell: 'nachweis-llm-70b (dediziert)',
          subprozessor: 'Keiner — Hardware in Ihrem eigenen Rechenzentrum',
          rechenzentrum: 'Ihr Rechenzentrum / Ihre Colocation',
          retention: 'Konfigurierbar · Standard 0 Tage',
          tokens_in: 890,
          tokens_out: 143,
          zeitstempel: '2026-08-04T09:14:03Z',
          hash: '82e4f7ac306b1d95e720ca438fb069d1e73a8c25046bd9137fc0a52de8619b7',
          vorgaenger_hash: '5f8b2ad713c904e6b8271fa093c5d61e8f2b47a06c9e3d81f47a2903bce7415',
          status: 'freigegeben',
        },
      },
    },
  },
  {
    id: 'anamnese',
    prompt: 'Strukturiere diese Anamnese nach dem SOAP-Schema.',
    varianten: {
      1: {
        antwort:
          'S: Patientin berichtet seit drei Tagen belastungsabhängige Thoraxschmerzen. O: RR 138/86, HF 78, unauffälliges EKG. A: V.a. muskuloskelettale Genese, kardiale Ursache nicht ausgeschlossen. P: Belastungs-EKG veranlasst, Wiedervorstellung bei Verschlechterung.',
        record: {
          anfrage_id: 'req_2b70f814',
          modell: 'scaleway-llama-3.3-70b',
          subprozessor: 'Scaleway SAS (Paris, FR)',
          rechenzentrum: 'fr-par-2 · Paris',
          retention: 'Kein Training · 0 Tage Speicherung',
          tokens_in: 276,
          tokens_out: 88,
          zeitstempel: '2026-08-04T09:16:29Z',
          hash: '4f0d8b2ec735a91f6b0284d7ce319a5f6082c3e719b4d0af8c25e3b706149d1',
          vorgaenger_hash: 'c91a3e6f204b8d715ac930e7f4b12d968a5c3e0b71f4926dc80531e7af9c4b2',
          status: 'freigegeben',
        },
      },
      2: {
        antwort:
          'S: Patientin berichtet seit drei Tagen belastungsabhängige Thoraxschmerzen. O: RR 138/86, HF 78, unauffälliges EKG. A: V.a. muskuloskelettale Genese, kardiale Ursache nicht ausgeschlossen. P: Belastungs-EKG veranlasst, Wiedervorstellung bei Verschlechterung.',
        record: {
          anfrage_id: 'req_2b70f814',
          modell: 'nachweis-llm-70b (DataFortress-Hosting)',
          subprozessor: 'Keiner — DataFortress.cloud GmbH direkt',
          rechenzentrum: 'Nürnberg, DE (eigenes RZ, geteilt)',
          retention: 'Kein Training · 0 Tage Speicherung',
          tokens_in: 276,
          tokens_out: 88,
          zeitstempel: '2026-08-04T09:16:29Z',
          hash: 'f61c8a04e2b937d6a175c930fe4b28d0e7a5c3f186b9042de751a3c96087fb2',
          vorgaenger_hash: 'b47d92e6f13a805cd7291bf640e3a5d9f1c2087b4e619ad073fc5218b96de40',
          status: 'freigegeben',
        },
      },
      3: {
        antwort:
          'S: Patientin berichtet seit drei Tagen belastungsabhängige Thoraxschmerzen. O: RR 138/86, HF 78, unauffälliges EKG. A: V.a. muskuloskelettale Genese, kardiale Ursache nicht ausgeschlossen. P: Belastungs-EKG veranlasst, Wiedervorstellung bei Verschlechterung.',
        record: {
          anfrage_id: 'req_2b70f814',
          modell: 'nachweis-llm-70b (dediziert)',
          subprozessor: 'Keiner — Hardware in Ihrem eigenen Rechenzentrum',
          rechenzentrum: 'Ihr Rechenzentrum / Ihre Colocation',
          retention: 'Konfigurierbar · Standard 0 Tage',
          tokens_in: 276,
          tokens_out: 88,
          zeitstempel: '2026-08-04T09:16:29Z',
          hash: '19d7b3f0a586c2e491730fb862ad04e6c1f8a7503d94be21c67f0a839de5c47',
          vorgaenger_hash: '82e4f7ac306b1d95e720ca438fb069d1e73a8c25046bd9137fc0a52de8619b7',
          status: 'freigegeben',
        },
      },
    },
  },
  {
    id: 'us-modell',
    prompt: 'Was passiert, wenn ich ein US-Modell anfordere?',
    varianten: {
      1: {
        antwort:
          'Diese Anfrage wurde blockiert: gpt-4o (OpenAI, USA) ist kein zulässiger Subprozessor in Ihrer EU-Routingliste. Es erfolgt kein automatischer Fallback außerhalb der Liste — die Anfrage schlägt fehl, statt umgeleitet zu werden. Auf Ihre Bestätigung hin wurde stattdessen an ein zulässiges EU-Modell weitergeleitet:\n\nDie Antwort wird nun mit mistral-large-2411 (Paris, FR) erzeugt und protokolliert.',
        record: {
          anfrage_id: 'req_9c31a207',
          modell: 'gpt-4o → mistral-large-2411',
          subprozessor: 'OpenAI, Inc. (USA) — GESPERRT · Mistral AI (Paris, FR)',
          rechenzentrum: 'kein EU-Standort für gpt-4o · eu-west-3 Paris',
          retention: '—',
          tokens_in: 34,
          tokens_out: 61,
          zeitstempel: '2026-08-04T09:18:55Z',
          hash: 'e0a72c9f4d3186b5e920af7c34d18b6f209c5e3a71b4d086c9251e7af304b9c',
          vorgaenger_hash: '4f0d8b2ec735a91f6b0284d7ce319a5f6082c3e719b4d0af8c25e3b706149d1',
          status: 'gesperrt',
          hinweis: 'Kein Fallback außerhalb der EU-Routingliste. Weiterleitung erfolgte erst nach Bestätigung.',
        },
      },
      2: {
        antwort:
          'Diese Frage stellt sich bei Säule 2 nicht: Diese Instanz kennt ausschließlich von DataFortress.cloud GmbH selbst betriebene Modelle. Es gibt kein Routing an Dritte — weder EU- noch US-Anbieter —, das umgangen oder angefragt werden könnte.',
        record: {
          anfrage_id: 'req_9c31a207',
          modell: 'nachweis-llm-70b (DataFortress-Hosting)',
          subprozessor: 'Keiner — kein Drittanbieter-Routing möglich',
          rechenzentrum: 'Nürnberg, DE (eigenes RZ, geteilt)',
          retention: 'Kein Training · 0 Tage Speicherung',
          tokens_in: 22,
          tokens_out: 44,
          zeitstempel: '2026-08-04T09:18:55Z',
          hash: '6c3a90e751d2b8f047a6c19e0f3b5d82a9c74e106bf35d821a6907cfe4b83d1',
          vorgaenger_hash: 'f61c8a04e2b937d6a175c930fe4b28d0e7a5c3f186b9042de751a3c96087fb2',
          status: 'freigegeben',
          hinweis: 'Es existiert keine Route zu einem Drittanbieter — die Frage ist durch die Architektur beantwortet, nicht durch eine Blockade.',
        },
      },
      3: {
        antwort:
          'Bei Säule 3 stellt sich die Frage erst recht nicht: Die Hardware steht physisch in Ihrem eigenen Rechenzentrum, betrieben von DataFortress.cloud GmbH. Es gibt keine Netzwerkverbindung zu einem Drittanbieter-Modell, weder EU- noch US-seitig.',
        record: {
          anfrage_id: 'req_9c31a207',
          modell: 'nachweis-llm-70b (dediziert)',
          subprozessor: 'Keiner — Hardware in Ihrem eigenen Rechenzentrum',
          rechenzentrum: 'Ihr Rechenzentrum / Ihre Colocation',
          retention: 'Konfigurierbar · Standard 0 Tage',
          tokens_in: 22,
          tokens_out: 41,
          zeitstempel: '2026-08-04T09:18:55Z',
          hash: 'a58d3f710e2b9c604ad7192fb063e8d5c1a7409f2b638ed059c7a12df4b6035',
          vorgaenger_hash: '6c3a90e751d2b8f047a6c19e0f3b5d82a9c74e106bf35d821a6907cfe4b83d1',
          status: 'freigegeben',
          hinweis: 'Kein Netzwerkpfad zu einem Drittanbieter vorhanden — physisch ausgeschlossen, nicht nur vertraglich.',
        },
      },
    },
  },
];

export const findTurn = (id: string): PlaygroundTurn | undefined =>
  PLAYGROUND_SCRIPT.find((t) => t.id === id);
