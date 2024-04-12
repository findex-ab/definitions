import * as ss from 'superstruct';
export var ENotificationLevel;
(function (ENotificationLevel) {
    ENotificationLevel["INFO"] = "INFO";
    ENotificationLevel["WARNING"] = "WARNING";
    ENotificationLevel["ERROR"] = "ERROR";
    ENotificationLevel["SUCCESS"] = "SUCCESS";
})(ENotificationLevel || (ENotificationLevel = {}));
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
});
