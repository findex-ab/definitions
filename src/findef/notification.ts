import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';

export enum ENotificationLevel {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS"
}

export enum ENotificationStatus {
  READ = "READ",
  UNREAD = "UNREAD",
  ARCHIVED = "ARCHIVED"
}

export enum ENotificationType {
  ARBITRARY = "ARBITRARY",
  PROVIDER_SESSION_EXPIRED = "PROVIDER_SESSION_EXPIRED"
}

export type INotification = {
  title?: string;
  body?: string;
  level?: ENotificationLevel;
  status?: ENotificationStatus;
  type?: ENotificationType;
  sender?: TDocRef<IUser>;
  receiver: TDocRef<IUser>;
  uid?: string;
  payload?: any;
}

export const NotificationSchema = ss.type({
  title: ss.optional(ss.string()),
  body: ss.optional(ss.string()),
  level: ss.optional(ss.enums([
    ENotificationLevel.INFO,
    ENotificationLevel.WARNING,
    ENotificationLevel.ERROR,
    ENotificationLevel.SUCCESS
  ])),
  status: ss.optional(ss.enums([
    ENotificationStatus.READ,
    ENotificationStatus.UNREAD,
    ENotificationStatus.ARCHIVED
  ])),
  type: ss.optional(ss.enums([
    ENotificationType.ARBITRARY,
    ENotificationType.PROVIDER_SESSION_EXPIRED
  ])),
  uid: ss.optional(ss.string()),
  payload: ss.optional(ss.any()),
  sender: ss.optional(ss.string()),
  receiver: ss.string()
})
