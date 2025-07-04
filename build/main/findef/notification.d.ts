import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { IInvite } from "./invite";
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
    PROVIDER_SESSION_EXPIRED = "PROVIDER_SESSION_EXPIRED",
    PROVIDER_INVESTMENT_DELETED = "PROVIDER_INVESTMENT_DELETED",
    SHAREHOLDER_INVITE = "SHAREHOLDER_INVITE",
    ASSET_ADMIN_INVITE = "ASSET_ADMIN_INVITE"
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
    invite?: TDocRef<IInvite>;
    receiver?: TDocRef<IUser>;
    receiverEmail?: string;
    senderEmail?: string;
    broadcast?: boolean;
    uid?: string;
    payload?: any;
};
export declare const NotificationSchema: ss.Struct<{
    title?: string | undefined;
    body?: string | undefined;
    image?: string | undefined;
    attachment?: string | {
        _id: string;
    } | undefined;
    level?: ENotificationLevel | undefined;
    status?: ENotificationStatus | undefined;
    type?: ENotificationType | undefined;
    uid?: string | undefined;
    payload?: any;
    sender?: string | undefined;
    invite?: string | {
        _id: string;
    } | undefined;
    receiver?: string | undefined;
    receiverEmail?: string | undefined;
    senderEmail?: string | undefined;
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
        PROVIDER_INVESTMENT_DELETED: ENotificationType.PROVIDER_INVESTMENT_DELETED;
        SHAREHOLDER_INVITE: ENotificationType.SHAREHOLDER_INVITE;
        ASSET_ADMIN_INVITE: ENotificationType.ASSET_ADMIN_INVITE;
    }>;
    uid: ss.Struct<string | undefined, null>;
    payload: ss.Struct<any, null>;
    sender: ss.Struct<string | undefined, null>;
    invite: ss.Struct<string | {
        _id: string;
    } | undefined, null>;
    receiver: ss.Struct<string | undefined, null>;
    receiverEmail: ss.Struct<string | undefined, null>;
    senderEmail: ss.Struct<string | undefined, null>;
    broadcast: ss.Struct<boolean | undefined, null>;
}>;
export type UpdateNotificationStatusesRequest = {
    status: ENotificationStatus;
    notificationIds: string[];
};
export declare const UpdateNotificationStatusesRequestSchema: ss.Describe<UpdateNotificationStatusesRequest>;
