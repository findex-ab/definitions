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
exports.AssetSchema = exports.EAssetSubType = exports.EAssetSource = exports.EAssetType = void 0;
const ss = __importStar(require("superstruct"));
const ledger_1 = require("./ledger");
const documentId_1 = require("./documentId");
var EAssetType;
(function (EAssetType) {
    EAssetType["UNDEFINED"] = "UNDEFINED";
    //  ANY = "ANY",
    EAssetType["LISTED_EQUITY"] = "LISTED_EQUITY";
    EAssetType["UNLISTED_EQUITY"] = "UNLISTED_EQUITY";
    EAssetType["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetType["ALTERNATIVE"] = "ALTERNATIVE";
})(EAssetType || (exports.EAssetType = EAssetType = {}));
var EAssetSource;
(function (EAssetSource) {
    EAssetSource["IR"] = "IR";
    EAssetSource["AUTOMATIC"] = "AUTOMATIC";
    EAssetSource["MANUAL"] = "MANUAL";
})(EAssetSource || (exports.EAssetSource = EAssetSource = {}));
var EAssetSubType;
(function (EAssetSubType) {
    EAssetSubType["CRYPTO"] = "CRYPTO";
    EAssetSubType["COMMODITY"] = "COMMODITY";
    EAssetSubType["WATCH"] = "WATCH";
    EAssetSubType["JEWELLRY"] = "JEWELLRY";
    EAssetSubType["GEMSTONE"] = "GEMSTONE";
    EAssetSubType["LAND"] = "LAND";
    EAssetSubType["CAR"] = "CAR";
    EAssetSubType["ART"] = "ART";
    EAssetSubType["FOREST_INVESTMENT"] = "FOREST_INVESTMENT";
    EAssetSubType["WINE"] = "WINE";
    EAssetSubType["SNEAKERS"] = "SNEAKERS";
    EAssetSubType["PRIVATE_DEBT"] = "PRIVATE_DEBT";
    EAssetSubType["PRIVATE_EQUITY"] = "PRIVATE_EQUITY";
    EAssetSubType["HEDGE_FUND"] = "HEDGE_FUND";
    EAssetSubType["COLLECTIBLE"] = "COLLECTIBLE";
    EAssetSubType["SAVINGS_ACCOUNT"] = "SAVINGS_ACCOUNT";
    EAssetSubType["CHECKING_ACCOUNT"] = "CHECKING_ACCOUNT";
    EAssetSubType["OTHER"] = "OTHER";
})(EAssetSubType || (exports.EAssetSubType = EAssetSubType = {}));
exports.AssetSchema = ss.type({
    name: ss.string(),
    organizationNumber: ss.optional(ss.string()),
    contactEmail: ss.string(),
    ledger: ledger_1.LedgerSchema,
    assetId: ss.optional(ss.any()),
    externalId: ss.optional(ss.string()),
    type: ss.optional(ss.enums([EAssetType.UNDEFINED, EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE])),
    subType: ss.optional(ss.enums([
        EAssetSubType.CRYPTO,
        EAssetSubType.COMMODITY,
        EAssetSubType.WATCH,
        EAssetSubType.JEWELLRY,
        EAssetSubType.GEMSTONE,
        EAssetSubType.LAND,
        EAssetSubType.CAR,
        EAssetSubType.ART,
        EAssetSubType.FOREST_INVESTMENT,
        EAssetSubType.WINE,
        EAssetSubType.SNEAKERS,
        EAssetSubType.PRIVATE_DEBT,
        EAssetSubType.PRIVATE_EQUITY,
        EAssetSubType.HEDGE_FUND,
        EAssetSubType.COLLECTIBLE,
        EAssetSubType.SAVINGS_ACCOUNT,
        EAssetSubType.CHECKING_ACCOUNT,
        EAssetSubType.OTHER
    ])),
    source: ss.optional(ss.enums([EAssetSource.IR, EAssetSource.AUTOMATIC, EAssetSource.MANUAL])),
    provider: ss.optional(ss.string()),
    parent: ss.optional(documentId_1.DocumentIdSchema),
    children: ss.optional(ss.array(documentId_1.DocumentIdSchema)),
    automatic: ss.optional(ss.boolean()),
    articles: ss.optional(ss.array(ss.any())),
    lastNewsUpdate: ss.optional(ss.any()),
    logoBase64: ss.optional(ss.string()),
    automaticLogoFailed: ss.optional(ss.boolean()),
    realEstateInformation: ss.optional(ss.object({
        type: ss.optional(ss.string()),
        country: ss.optional(ss.string()),
        city: ss.optional(ss.string()),
        address: ss.optional(ss.string())
    }))
});
