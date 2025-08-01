import { IAttachment } from "./attachment";
import { RefSchema, TDocRef } from "./docref";
import { IInvite } from "./invite";
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
  PROVIDER_SESSION_EXPIRED = "PROVIDER_SESSION_EXPIRED",
  PROVIDER_INVESTMENT_DELETED = "PROVIDER_INVESTMENT_DELETED",
  SHAREHOLDER_INVITE = "SHAREHOLDER_INVITE",
  ASSET_ADMIN_INVITE = "ASSET_ADMIN_INVITE",
  IR_INVESTOR_UPDATE_PUBLISHED = "IR_INVESTOR_UPDATE_PUBLISHED"
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
}

export const NotificationSchema = ss.type({
  title: ss.optional(ss.string()),
  body: ss.optional(ss.string()),
  image: ss.optional(ss.string()),
  attachment: ss.optional(RefSchema),
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
    ENotificationType.PROVIDER_SESSION_EXPIRED,
    ENotificationType.PROVIDER_INVESTMENT_DELETED,
    ENotificationType.SHAREHOLDER_INVITE,
    ENotificationType.ASSET_ADMIN_INVITE,
    ENotificationType.IR_INVESTOR_UPDATE_PUBLISHED
  ])),
  uid: ss.optional(ss.string()),
  payload: ss.optional(ss.any()),
  sender: ss.optional(ss.string()),
  invite: ss.optional(RefSchema),
  receiver: ss.optional(ss.string()),
  receiverEmail: ss.optional(ss.string()),
  senderEmail: ss.optional(ss.string()),
  broadcast: ss.optional(ss.boolean())
})

export type UpdateNotificationStatusesRequest = {
  status: ENotificationStatus;
  notificationIds: string[];
}

export const UpdateNotificationStatusesRequestSchema: ss.Describe<UpdateNotificationStatusesRequest> = ss.type({
  status: ss.enums(Object.keys(ENotificationStatus) as ENotificationStatus[]),
  notificationIds: ss.array(ss.string())
})
