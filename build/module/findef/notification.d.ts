import { IAttachment } from "./attachment";
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
export declare enum ENotificationType {
    ARBITRARY = "ARBITRARY",
    PROVIDER_SESSION_EXPIRED = "PROVIDER_SESSION_EXPIRED"
}
export type INotification = {
    title?: string;
    body?: string;
    image?: string;
    attachment?: TDocRef<IAttachment>;
    level?: ENotificationLevel;
    status?: ENotificationStatus;
    type?: ENotificationType;
    sender?: TDocRef<IUser>;
    receiver: TDocRef<IUser>;
    broadcast?: boolean;
    uid?: string;
    payload?: any;
};
export declare const NotificationSchema: ss.Struct<{
    receiver: string;
    type?: ENotificationType | undefined;
    status?: ENotificationStatus | undefined;
    sender?: string | undefined;
    image?: string | undefined;
    uid?: string | undefined;
    body?: string | undefined;
    payload?: any;
    title?: string | undefined;
    attachment?: string | {
        _id: string;
    } | undefined;
    level?: ENotificationLevel | undefined;
    broadcast?: boolean | undefined;
}, {
    title: ss.Struct<string | undefined, null>;
    body: ss.Struct<string | undefined, null>;
    image: ss.Struct<string | undefined, null>;
    attachment: ss.Struct<string | {
        _id: string;
    } | undefined, null>;
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
    type: ss.Struct<ENotificationType | undefined, {
        ARBITRARY: ENotificationType.ARBITRARY;
        PROVIDER_SESSION_EXPIRED: ENotificationType.PROVIDER_SESSION_EXPIRED;
    }>;
    uid: ss.Struct<string | undefined, null>;
    payload: ss.Struct<any, null>;
    sender: ss.Struct<string | undefined, null>;
    receiver: ss.Struct<string, null>;
    broadcast: ss.Struct<boolean | undefined, null>;
}>;
export type UpdateNotificationStatusesRequest = {
    status: ENotificationStatus;
    notificationIds: string[];
};
export declare const UpdateNotificationStatusesRequestSchema: ss.Describe<UpdateNotificationStatusesRequest>;
