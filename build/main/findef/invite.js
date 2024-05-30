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
exports.ResolveInviteSchema = exports.InviteSchema = exports.EInviteType = exports.EInviteStatus = void 0;
const docref_1 = require("./docref");
const user_1 = require("./user");
const ss = __importStar(require("superstruct"));
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
    EInviteType["GENERIC_USER"] = "GENERIC_USER";
    EInviteType["CO_INVESTOR"] = "CO_INVESTOR";
})(EInviteType || (exports.EInviteType = EInviteType = {}));
exports.InviteSchema = ss.type({
    user: ss.assign(ss.omit(user_1.UserSchema, ['email']), ss.type({ email: ss.string() })),
    sender: ss.optional((0, docref_1.DocRefSchema)()),
    asset: ss.optional((0, docref_1.DocRefSchema)()),
    status: ss.enums([EInviteStatus.PENDING, EInviteStatus.RESOLVED]),
    type: ss.enums([EInviteType.ASSET_ADMIN, EInviteType.SHAREHOLDER, EInviteType.GENERIC_USER]),
    betaCode: ss.optional(ss.string()),
    keyCode: ss.optional((0, docref_1.DocRefSchema)())
});
exports.ResolveInviteSchema = ss.type({
    inviteId: ss.optional(ss.string()),
    keyCode: ss.optional(ss.string()),
    email: ss.optional(ss.string())
});
