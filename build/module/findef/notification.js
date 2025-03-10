import { RefSchema } from "./docref";
import * as ss from 'superstruct';
export var ENotificationLevel;
(function (ENotificationLevel) {
    ENotificationLevel["INFO"] = "INFO";
    ENotificationLevel["WARNING"] = "WARNING";
    ENotificationLevel["ERROR"] = "ERROR";
    ENotificationLevel["SUCCESS"] = "SUCCESS";
})(ENotificationLevel || (ENotificationLevel = {}));
export var ENotificationStatus;
(function (ENotificationStatus) {
    ENotificationStatus["READ"] = "READ";
    ENotificationStatus["UNREAD"] = "UNREAD";
    ENotificationStatus["ARCHIVED"] = "ARCHIVED";
})(ENotificationStatus || (ENotificationStatus = {}));
export var ENotificationType;
(function (ENotificationType) {
    ENotificationType["ARBITRARY"] = "ARBITRARY";
    ENotificationType["PROVIDER_SESSION_EXPIRED"] = "PROVIDER_SESSION_EXPIRED";
    ENotificationType["PROVIDER_INVESTMENT_DELETED"] = "PROVIDER_INVESTMENT_DELETED";
})(ENotificationType || (ENotificationType = {}));
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
        ENotificationType.PROVIDER_SESSION_EXPIRED
    ])),
    uid: ss.optional(ss.string()),
    payload: ss.optional(ss.any()),
    sender: ss.optional(ss.string()),
    receiver: ss.string(),
    broadcast: ss.optional(ss.boolean())
});
export const UpdateNotificationStatusesRequestSchema = ss.type({
    status: ss.enums(Object.keys(ENotificationStatus)),
    notificationIds: ss.array(ss.string())
});
