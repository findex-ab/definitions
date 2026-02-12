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
exports.isUser = exports.CreateUserAccountSchema = exports.userHasRole = exports.UserSchema = exports.ENewsViewMode = exports.EDiversificationViewMode = exports.EUserStatus = void 0;
const docref_1 = require("./docref");
const investment_1 = require("./investment");
const ss = __importStar(require("superstruct"));
const userDefinitions_1 = require("./userDefinitions");
const integrationProvider_1 = require("./integrationProvider");
const portfolio_1 = require("./portfolio");
const auth_1 = require("./auth");
var EUserStatus;
(function (EUserStatus) {
    EUserStatus["PENDING"] = "PENDING";
    EUserStatus["RESOLVED"] = "RESOLVED";
})(EUserStatus || (exports.EUserStatus = EUserStatus = {}));
var EDiversificationViewMode;
(function (EDiversificationViewMode) {
    EDiversificationViewMode["DONUT"] = "DONUT";
    EDiversificationViewMode["TREE"] = "TREE";
})(EDiversificationViewMode || (exports.EDiversificationViewMode = EDiversificationViewMode = {}));
var ENewsViewMode;
(function (ENewsViewMode) {
    ENewsViewMode["GRID"] = "GRID";
    ENewsViewMode["LIST"] = "LIST";
})(ENewsViewMode || (exports.ENewsViewMode = ENewsViewMode = {}));
//export const userFields = keys<IUser>();
exports.UserSchema = ss.type({
    authUserId: ss.optional(ss.string()),
    firstname: ss.optional(ss.string()),
    lastname: ss.optional(ss.string()),
    email: ss.string(),
    emailVerified: ss.optional(ss.boolean()),
    phone: ss.optional(ss.string()),
    personalNumber: ss.optional(ss.string()),
    personalReferralCode: ss.optional(ss.string()),
    password: ss.optional(ss.string()),
    investments: ss.optional(ss.array(investment_1.InvestmentSchema)),
    administratedAssets: ss.optional(ss.array(ss.any())),
    status: ss.optional(ss.enums([EUserStatus.PENDING, EUserStatus.RESOLVED])),
    definitions: ss.optional(userDefinitions_1.UserDefinitionsSchema),
    providers: ss.optional(ss.array(integrationProvider_1.IntegrationProviderSchema)),
    portfolio: ss.optional(portfolio_1.PortfolioSchema),
    authenticationMethod: ss.optional(ss.enums([
        auth_1.EAuthenticationMethod.PASSWORD,
        auth_1.EAuthenticationMethod.BANKID,
        auth_1.EAuthenticationMethod.GOOGLE
    ])),
    country: ss.optional(ss.string()),
    currency: ss.optional(ss.string()),
    agreedTermsOfUseDate: ss.optional(ss.string()),
    lastActivity: ss.optional(ss.string()),
    lastOnline: ss.optional(ss.string()),
    subscribedToNewsletter: ss.optional(ss.boolean()),
    avatar: ss.optional(docref_1.RefSchema),
    lastSessionTimeSeconds: ss.optional(ss.number()),
    isOnline: ss.optional(ss.boolean()),
    featurebaseIdentity: ss.optional(ss.string()),
    klaviyoId: ss.optional(ss.string()),
    opportunities: ss.optional(ss.type({
        enabled: ss.optional(ss.boolean()),
        enabledAt: ss.optional(ss.string()),
    })),
    diversificationViewMode: ss.optional(ss.enums([EDiversificationViewMode.DONUT, EDiversificationViewMode.TREE])),
    newsViewMode: ss.optional(ss.enums([ENewsViewMode.GRID, ENewsViewMode.LIST])),
    passwordChangedAt: ss.optional(ss.string()),
});
const userHasRole = (user, role) => {
    if (!user.roles || user.roles.length <= 0)
        return false;
    return !!user.roles.find((r) => {
        if ((r.name || '').toLowerCase() === role.toLowerCase())
            return true;
        if ((r.description || '').toLowerCase() === role.toLowerCase())
            return true;
        return false;
    });
};
exports.userHasRole = userHasRole;
exports.CreateUserAccountSchema = ss.type({
    email: ss.string(),
    firstname: ss.optional(ss.string()),
    lastname: ss.optional(ss.string()),
    authUserId: ss.optional(ss.string()),
    country: ss.optional(ss.string()),
    newsLetter: ss.optional(ss.boolean()),
    agreeTermsDate: ss.string(),
    authenticationMethod: ss.enums([
        auth_1.EAuthenticationMethod.BANKID,
        auth_1.EAuthenticationMethod.PASSWORD,
        auth_1.EAuthenticationMethod.GOOGLE,
    ]),
    betaCode: ss.optional(ss.string()),
    inviteId: ss.optional(ss.string()),
});
const isUser = (x) => {
    return (x !== null &&
        typeof x === 'object' &&
        typeof x._id !== 'undefined' &&
        typeof x.email === 'string');
};
exports.isUser = isUser;
