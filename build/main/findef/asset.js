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
exports.AssetSchema = exports.EAssetSubtype = exports.EAssetSource = exports.EAssetType = void 0;
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
var EAssetSubtype;
(function (EAssetSubtype) {
    EAssetSubtype["CRYPTO"] = "CRYPTO";
    EAssetSubtype["COMMODITY"] = "COMMODITY";
    EAssetSubtype["WATCH"] = "WATCH";
    EAssetSubtype["JEWELLRY"] = "JEWELLRY";
    EAssetSubtype["GEMSTONE"] = "GEMSTONE";
    EAssetSubtype["LAND"] = "LAND";
    EAssetSubtype["CAR"] = "CAR";
    EAssetSubtype["ART"] = "ART";
    EAssetSubtype["FOREST_INVESTMENT"] = "FOREST_INVESTMENT";
    EAssetSubtype["WINE"] = "WINE";
    EAssetSubtype["SNEAKERS"] = "SNEAKERS";
    EAssetSubtype["PRIVATE_DEBT"] = "PRIVATE_DEBT";
    EAssetSubtype["PRIVATE_EQUITY"] = "PRIVATE_EQUITY";
    EAssetSubtype["HEDGE_FUND"] = "HEDGE_FUND";
    EAssetSubtype["COLLECTIBLE"] = "COLLECTIBLE";
    EAssetSubtype["SAVINGS_ACCOUNT"] = "SAVINGS_ACCOUNT";
    EAssetSubtype["CHECKING_ACCOUNT"] = "CHECKING_ACCOUNT";
    EAssetSubtype["OTHER"] = "OTHER";
})(EAssetSubtype || (exports.EAssetSubtype = EAssetSubtype = {}));
exports.AssetSchema = ss.type({
    name: ss.string(),
    organizationNumber: ss.optional(ss.string()),
    contactEmail: ss.string(),
    ledger: ledger_1.LedgerSchema,
    assetId: ss.optional(ss.any()),
    externalId: ss.optional(ss.string()),
    type: ss.optional(ss.enums([EAssetType.UNDEFINED, EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE])),
    subtype: ss.optional(ss.enums([
        EAssetSubtype.CRYPTO,
        EAssetSubtype.COMMODITY,
        EAssetSubtype.WATCH,
        EAssetSubtype.JEWELLRY,
        EAssetSubtype.GEMSTONE,
        EAssetSubtype.LAND,
        EAssetSubtype.CAR,
        EAssetSubtype.ART,
        EAssetSubtype.FOREST_INVESTMENT,
        EAssetSubtype.WINE,
        EAssetSubtype.SNEAKERS,
        EAssetSubtype.PRIVATE_DEBT,
        EAssetSubtype.PRIVATE_EQUITY,
        EAssetSubtype.HEDGE_FUND,
        EAssetSubtype.COLLECTIBLE,
        EAssetSubtype.SAVINGS_ACCOUNT,
        EAssetSubtype.CHECKING_ACCOUNT,
        EAssetSubtype.OTHER
    ])),
    source: ss.optional(ss.enums([EAssetSource.IR, EAssetSource.AUTOMATIC, EAssetSource.MANUAL])),
    provider: ss.optional(ss.string()),
    symbol: ss.optional(ss.string()),
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
    })),
    createdBy: ss.optional(ss.string())
});
