import WebSocket from "ws";
import { ISavedDocument } from "./savedDocument";
import { IUser } from "./user";

export enum EFindexWebSocketEventType {
  REQUEST_AUTHORIZE = "REQUEST_AUTHORIZE",
  RESPONSE_AUTHORIZE = 'RESPONSE_AUTHORIZE',
  REQUEST_JOIN_APP = 'REQUEST_JOIN_APP',
  RESPONSE_JOIN_APP = 'RESPONSE_JOIN_APP',
  RESPONSE_NOTIFICATION = 'RESPONSE_NOTIFICATION',
  VFS_FILE_UPLOAD_BEGIN = 'VFS_FILE_UPLOAD_BEGIN',
  VFS_FILE_UPLOAD_BEGIN_ACK = 'VFS_FILE_UPLOAD_BEGIN_ACK',
  VFS_FILE_UPLOAD_END = 'VFS_FILE_UPLOAD_END',
  VFS_FILE_UPLOAD_END_ACK = 'VFS_FILE_UPLOAD_END_ACK',
  VFS_FILE_UPLOAD_CHUNK = 'VFS_FILE_UPLOAD_CHUNK',
  VFS_FILE_UPLOAD_CHUNK_ACK = 'VFS_FILE_UPLOAD_CHUNK_ACK',
  VFS_MKDIR = 'VFS_MKDIR',
  VFS_MKDIR_ACK = 'VFS_MKDIR_ACK',
  VFS_SET_PWD = 'VFS_SET_PWD',
  VFS_CD_BACK = 'VFS_CD_BACK'
}

export type FindexWebSocketEventOptions = {
  forward?: {
    userId?: string;
    all?: boolean;
  };
}

export type FindexWebSocketEvent<T extends {[key: string]: any} = {[key: string]: any}> = {
  type: EFindexWebSocketEventType | string;
  payload: T;
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
  key?: string;
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
