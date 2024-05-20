"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationStatusesRequestSchema = exports.NotificationSchema = exports.ENotificationType = exports.ENotificationStatus = exports.ENotificationLevel = void 0;
const ss = __importStar(require("superstruct"));
var ENotificationLevel;
(function (ENotificationLevel) {
    ENotificationLevel["INFO"] = "INFO";
    ENotificationLevel["WARNING"] = "WARNING";
    ENotificationLevel["ERROR"] = "ERROR";
    ENotificationLevel["SUCCESS"] = "SUCCESS";
})(ENotificationLevel || (exports.ENotificationLevel = ENotificationLevel = {}));
var ENotificationStatus;
(function (ENotificationStatus) {
    ENotificationStatus["READ"] = "READ";
    ENotificationStatus["UNREAD"] = "UNREAD";
    ENotificationStatus["ARCHIVED"] = "ARCHIVED";
})(ENotificationStatus || (exports.ENotificationStatus = ENotificationStatus = {}));
var ENotificationType;
(function (ENotificationType) {
    ENotificationType["ARBITRARY"] = "ARBITRARY";
    ENotificationType["PROVIDER_SESSION_EXPIRED"] = "PROVIDER_SESSION_EXPIRED";
})(ENotificationType || (exports.ENotificationType = ENotificationType = {}));
exports.NotificationSchema = ss.type({
    title: ss.optional(ss.string()),
    body: ss.optional(ss.string()),
    image: ss.optional(ss.string()),
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
});
exports.UpdateNotificationStatusesRequestSchema = ss.type({
    status: ss.enums(Object.keys(ENotificationStatus)),
    notificationIds: ss.array(ss.string())
});
