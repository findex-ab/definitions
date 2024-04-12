import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';
export declare enum ENotificationLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS"
}
export type INotification = {
    title?: string;
    body?: string;
    level?: ENotificationLevel;
    sender?: TDocRef<IUser>;
    receiver: TDocRef<IUser>;
    payload?: any;
};
export declare const NotificationSchema: ss.Struct<{
    receiver: string;
    title?: string | undefined;
    body?: string | undefined;
    level?: ENotificationLevel | undefined;
    payload?: any;
    sender?: string | undefined;
}, {
    title: ss.Struct<string | undefined, null>;
    body: ss.Struct<string | undefined, null>;
    level: ss.Struct<ENotificationLevel | undefined, {
        INFO: ENotificationLevel.INFO;
        WARNING: ENotificationLevel.WARNING;
        ERROR: ENotificationLevel.ERROR;
        SUCCESS: ENotificationLevel.SUCCESS;
    }>;
    payload: ss.Struct<any, null>;
    sender: ss.Struct<string | undefined, null>;
    receiver: ss.Struct<string, null>;
}>;
