"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EInviteType = exports.EInviteStatus = void 0;
var EInviteStatus;
(function (EInviteStatus) {
    EInviteStatus["PENDING"] = "PENDING";
    EInviteStatus["RESOLVED"] = "RESOLVED";
})(EInviteStatus || (exports.EInviteStatus = EInviteStatus = {}));
;
var EInviteType;
(function (EInviteType) {
    EInviteType["ASSET_ADMIN"] = "ASSET_ADMIN";
    EInviteType["SHAREHOLDER"] = "SHAREHOLDER";
})(EInviteType || (exports.EInviteType = EInviteType = {}));
