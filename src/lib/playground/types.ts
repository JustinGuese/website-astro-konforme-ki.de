import type { SaeuleId } from '../saeulen';

export interface NachweisRecord {
  anfrage_id: string;
  modell: string;
  subprozessor: string;
  rechenzentrum: string;
  retention: string;
  tokens_in: number;
  tokens_out: number;
  zeitstempel: string;
  hash: string;
  vorgaenger_hash: string;
  status: 'freigegeben' | 'gesperrt';
  hinweis?: string;
}

export interface SaeuleVariante {
  antwort: string;
  record: NachweisRecord;
}

export interface PlaygroundTurn {
  id: string;
  prompt: string;
  varianten: Record<SaeuleId, SaeuleVariante>;
}

export interface TransportHandlers {
  onToken: (partial: string) => void;
  onRecord: (record: NachweisRecord) => void;
  onDone: () => void;
}

export interface Transport {
  name: 'scripted' | 'http';
  sendPrompt: (turnId: string, saeule: SaeuleId, handlers: TransportHandlers) => void;
}
