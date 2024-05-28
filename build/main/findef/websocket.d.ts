import WebSocket from "ws";
import { ISavedDocument } from "./savedDocument";
import { IUser } from "./user";
export declare enum EFindexWebSocketEventType {
    REQUEST_AUTHORIZE = "REQUEST_AUTHORIZE",
    RESPONSE_AUTHORIZE = "RESPONSE_AUTHORIZE",
    REQUEST_JOIN_APP = "REQUEST_JOIN_APP",
    RESPONSE_JOIN_APP = "RESPONSE_JOIN_APP",
    RESPONSE_NOTIFICATION = "RESPONSE_NOTIFICATION"
}
export type FindexWebSocketEventOptions = {
    forward?: {
        userId?: string;
        all?: boolean;
    };
};
export type FindexWebSocketEvent = {
    type: EFindexWebSocketEventType | string;
    payload: {
        [key: string]: any;
    };
    options?: FindexWebSocketEventOptions;
    key?: string;
    code?: number;
    app?: string;
};
export type FindexWebSocketClient = {
    user: ISavedDocument<IUser>;
    socket: WebSocket;
    timeConnected: number;
    send: (event: FindexWebSocketEvent) => void;
    key?: string;
};
export type FindexWebSocketServer = {
    clients: FindexWebSocketClient[];
};
export declare const isFindexWebSocketEvent: (x?: any) => x is FindexWebSocketEvent;
