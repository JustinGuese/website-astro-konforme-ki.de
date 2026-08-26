import { apiUrl } from '../config/site';

/**
 * Der Wechsel als eine Zeile Code, pro Werkzeug. `status` folgt derselben
 * Konvention wie `KanalKarte` (AGENTS.md: nie „verfuegbar" behaupten, was
 * nicht wirklich läuft).
 *
 * Claude Code spricht über `ANTHROPIC_BASE_URL` die Anthropic-Messages-API
 * (`/v1/messages`). Verifiziert am 2026-08-26 gegen die live laufende
 * Instanz: `POST /v1/messages` existiert (`openapi.json` listet auch
 * `/v1/messages/count_tokens`) und antwortet mit einem strukturierten
 * `invalid_api_key`-Fehler statt 404 — der Shim läuft.
 *
 * OFFEN — `copilot` wurde am 2026-08-26 auf Aussage des Betreibers hin auf
 * `verfuegbar` gesetzt, ohne eigene Gegenprobe. Anders als bei den übrigen
 * Einträgen liegt der Mechanismus hier bei einem Dritten (Copilot Chats eigene
 * Modellanbindung in VS Code), nicht bei uns — `code` und `hinweis` beschreiben
 * den Weg, wie er dokumentiert ist. Vor dem nächsten Deploy einmal real
 * durchklicken und diesen Absatz durch eine datierte Bestätigung ersetzen.
 */

export type WerkzeugStatus = 'verfuegbar' | 'in-vorbereitung' | 'auf-anfrage';

export interface Werkzeug {
  id: string;
  label: string;
  status: WerkzeugStatus;
  code?: string;
  hinweis: string;
}

const pythonCode = `from openai import OpenAI

client = OpenAI(
    base_url="${apiUrl('/v1')}",
    api_key="ihr_schluessel",
)
client.chat.completions.create(
    model="qwen3.8-27b",
    messages=[{"role": "user", "content": "..."}],
)`;

const typescriptCode = `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "${apiUrl('/v1')}",
  apiKey: "ihr_schluessel",
});`;

const curlCode = `curl ${apiUrl('/v1/chat/completions')} \\
  -H "Authorization: Bearer ihr_schluessel" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen3.8-27b","messages":[{"role":"user","content":"..."}]}'`;

const cursorCode = `// Cursor → Settings → Models → "Override OpenAI Base URL"
Base URL:  ${apiUrl('/v1')}
API Key:   ihr_schluessel`;

const windsurfCode = `// Windsurf → Settings → Cascade → Custom API Endpoint
Base URL:  ${apiUrl('/v1')}
API Key:   ihr_schluessel`;

const claudeCodeCode = `export ANTHROPIC_BASE_URL="${apiUrl('')}"
export ANTHROPIC_API_KEY="ihr_schluessel"`;

const copilotCode = `// VS Code → Copilot Chat → Modellauswahl → „Manage Models…"
// → „OpenAI Compatible" → eigenen Endpunkt hinterlegen
Base URL:  ${apiUrl('/v1')}
API Key:   ihr_schluessel`;

export const WERKZEUGE: Werkzeug[] = [
  { id: 'curl', label: 'curl', status: 'verfuegbar', code: curlCode, hinweis: 'Direkter HTTPS-Aufruf, ohne SDK.' },
  { id: 'python', label: 'Python', status: 'verfuegbar', code: pythonCode, hinweis: 'Offizielles OpenAI-SDK, nur die base_url ändert sich.' },
  { id: 'typescript', label: 'TypeScript', status: 'verfuegbar', code: typescriptCode, hinweis: 'Offizielles OpenAI-SDK, nur die baseURL ändert sich.' },
  { id: 'cursor', label: 'Cursor', status: 'verfuegbar', code: cursorCode, hinweis: 'Über die eingebaute „Override OpenAI Base URL"-Option.' },
  { id: 'windsurf', label: 'Windsurf', status: 'verfuegbar', code: windsurfCode, hinweis: 'Über einen benutzerdefinierten API-Endpunkt.' },
  {
    id: 'claude-code',
    label: 'Claude Code',
    status: 'verfuegbar',
    code: claudeCodeCode,
    hinweis: 'Anthropic-kompatibler Endpunkt — nur die zwei Umgebungsvariablen setzen.',
  },
  {
    id: 'chat',
    label: 'Chat-Oberfläche',
    status: 'verfuegbar',
    hinweis: 'Web-Oberfläche wie ChatGPT — kein API-Setup nötig, ab €29/Monat.',
  },
  {
    id: 'copilot',
    label: 'GitHub Copilot',
    status: 'verfuegbar',
    code: copilotCode,
    hinweis: 'Über die eigene Modellanbindung von Copilot Chat in VS Code („OpenAI Compatible").',
  },
];
