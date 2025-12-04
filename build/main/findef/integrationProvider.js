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
exports.ProviderSessionSchema = exports.IntegrationProviderSchema = exports.emptyIntegrationProvider = exports.EProviderSessionStatus = exports.EProviderType = void 0;
const ss = __importStar(require("superstruct"));
var EProviderType;
(function (EProviderType) {
    EProviderType["RETAIL"] = "retail";
    EProviderType["COMMERCIAL"] = "commercial";
    EProviderType["INVESTMENT"] = "investment";
    EProviderType["CREDIT_UNION"] = "creditUnion";
    EProviderType["PRIVATE"] = "private";
    EProviderType["SNL"] = "snl";
    EProviderType["CHALLENGER"] = "challenger";
    EProviderType["NEOBANK"] = "neobank";
    EProviderType["OTHER"] = "Other";
    EProviderType["TEST"] = "test";
})(EProviderType || (exports.EProviderType = EProviderType = {}));
var EProviderSessionStatus;
(function (EProviderSessionStatus) {
    EProviderSessionStatus["CONNECTED"] = "CONNECTED";
    EProviderSessionStatus["DISCONNECTED"] = "DISCONNECTED";
})(EProviderSessionStatus || (exports.EProviderSessionStatus = EProviderSessionStatus = {}));
exports.emptyIntegrationProvider = {
    id: -1,
    name: '',
    displayName: '',
    country: '',
    customer: '',
    providerType: EProviderType.TEST,
    iconUrl: '',
    loginOptions: []
};
exports.IntegrationProviderSchema = ss.type({
    id: ss.number(),
    name: ss.string(),
    displayName: ss.string(),
    country: ss.string(),
    customer: ss.string(),
    providerType: ss.enums(Object.values(EProviderType)),
    iconUrl: ss.string(),
    loginOptions: ss.array(ss.type({
        iconUrl: ss.optional(ss.string()),
        loginMethod: ss.string(),
        loginDevice: ss.optional(ss.array(ss.string())),
        params: ss.array(ss.type({
            name: ss.string(),
            type: ss.string()
        }))
    }))
});
exports.ProviderSessionSchema = ss.type({
    sessionId: ss.optional(ss.string()),
    alive: ss.optional(ss.boolean()),
    provider: ss.optional(ss.partial(exports.IntegrationProviderSchema)),
});
