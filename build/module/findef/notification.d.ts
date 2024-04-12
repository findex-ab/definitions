import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';
export declare enum ENotificationLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS"
}
export declare enum ENotificationStatus {
    READ = "READ",
    UNREAD = "UNREAD",
    ARCHIVED = "ARCHIVED"
}
export type INotification = {
    title?: string;
    body?: string;
    level?: ENotificationLevel;
    status?: ENotificationStatus;
    sender?: TDocRef<IUser>;
    receiver: TDocRef<IUser>;
    uid?: string;
    payload?: any;
};
export declare const NotificationSchema: ss.Struct<{
    receiver: string;
    title?: string | undefined;
    body?: string | undefined;
    level?: ENotificationLevel | undefined;
    status?: ENotificationStatus | undefined;
    uid?: string | undefined;
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
    status: ss.Struct<ENotificationStatus | undefined, {
        READ: ENotificationStatus.READ;
        UNREAD: ENotificationStatus.UNREAD;
        ARCHIVED: ENotificationStatus.ARCHIVED;
    }>;
    uid: ss.Struct<string | undefined, null>;
    payload: ss.Struct<any, null>;
    sender: ss.Struct<string | undefined, null>;
    receiver: ss.Struct<string, null>;
}>;
