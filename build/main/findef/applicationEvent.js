"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EApplicationEventType = void 0;
var EApplicationEventType;
(function (EApplicationEventType) {
    EApplicationEventType["CREATE_INVESTMENT"] = "CREATE_INVESTMENT";
    EApplicationEventType["CREATE_ASSET"] = "CREATE_ASSET";
    EApplicationEventType["EDIT_INVESTMENT"] = "EDIT_INVESTMENT";
    EApplicationEventType["EDIT_ASSET"] = "EDIT_ASSET";
    EApplicationEventType["DELETE_INVESTMENT"] = "DELETE_INVESTMENT";
    EApplicationEventType["DELETE_ASSET"] = "DELETE_ASSET";
    EApplicationEventType["PROVIDER_IMPORT"] = "PROVIDER_IMPORT";
    EApplicationEventType["RESOLVE_INVITE"] = "RESOLVE_INVITE";
    EApplicationEventType["INVITE_ALREADY_RESOLVED"] = "INVITE_ALREADY_RESOLVED";
    EApplicationEventType["EDIT_USER_PROFILE"] = "EDIT_USER_PROFILE";
})(EApplicationEventType || (exports.EApplicationEventType = EApplicationEventType = {}));
