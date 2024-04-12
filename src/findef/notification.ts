import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';

export enum ENotificationLevel {
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
  payload: ss.optional(ss.any()),
  sender: ss.optional(ss.string()),
  receiver: ss.string()
})
