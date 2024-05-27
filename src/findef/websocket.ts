import WebSocket from "ws";
import { ISavedDocument } from "./savedDocument";
import { IUser } from "./user";

export enum EFindexWebSocketEventType {
  REQUEST_AUTHORIZE = "REQUEST_AUTHORIZE",
  RESPONSE_AUTHORIZE = 'RESPONSE_AUTHORIZE',
  REQUEST_JOIN_APP = 'REQUEST_JOIN_APP',
  RESPONSE_JOIN_APP = 'RESPONSE_JOIN_APP',
  RESPONSE_NOTIFICATION = 'RESPONSE_NOTIFICATION'
}

export type FindexWebSocketEventOptions = {
  forward?: {
    userId?: string;
    all?: boolean;
  };
}

export type FindexWebSocketEvent = {
  type: EFindexWebSocketEventType | string;
  payload: {[key: string]: any};
  options?: FindexWebSocketEventOptions;
  key?: string;
  code?: number;
  app?: string;
}

export type FindexWebSocketClient = {
  user: ISavedDocument<IUser>;
  socket: WebSocket;
  timeConnected: number;
  send: (event: FindexWebSocketEvent) => void;
};

export type FindexWebSocketServer = {
  clients: FindexWebSocketClient[];
}

export const isFindexWebSocketEvent = (x?: any): x is FindexWebSocketEvent => {
  if (!x) return false;
  if (typeof x !== 'object') return false;
  if (!x.type) return false;
  if (!x.payload) return false;
  return true;
}
