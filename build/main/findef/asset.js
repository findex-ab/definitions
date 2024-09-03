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
exports.emptyAsset = exports.AssetSchema = exports.EAssetIndustry = exports.EAssetSubtype = exports.EAssetSource = exports.EAssetType = void 0;
const ss = __importStar(require("superstruct"));
const ledger_1 = require("./ledger");
const documentId_1 = require("./documentId");
const value_1 = require("./value");
var EAssetType;
(function (EAssetType) {
    EAssetType["UNDEFINED"] = "UNDEFINED";
    EAssetType["EQUITY"] = "EQUITY";
    EAssetType["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetType["ALTERNATIVE"] = "ALTERNATIVE";
    EAssetType["CRYPTO"] = "CRYPTO";
})(EAssetType || (exports.EAssetType = EAssetType = {}));
var EAssetSource;
(function (EAssetSource) {
    EAssetSource["IR"] = "IR";
    EAssetSource["AUTOMATIC"] = "AUTOMATIC";
    EAssetSource["MANUAL"] = "MANUAL";
})(EAssetSource || (exports.EAssetSource = EAssetSource = {}));
var EAssetSubtype;
(function (EAssetSubtype) {
    // EQUITIES
    EAssetSubtype["STOCK"] = "STOCK";
    EAssetSubtype["FUND"] = "FUND";
    EAssetSubtype["BOND"] = "BOND";
    EAssetSubtype["ETF"] = "ETF";
    EAssetSubtype["PENSION"] = "PENSION";
    EAssetSubtype["LOAN"] = "LOAN";
    EAssetSubtype["CERTIFICATE"] = "CERTIFICATE";
    // REAL ESTATE
    EAssetSubtype["APARTMENT"] = "APARTMENT";
    EAssetSubtype["HOUSE"] = "HOUSE";
    EAssetSubtype["BUILDING"] = "BUILDING";
    EAssetSubtype["PARKING"] = "PARKING";
    EAssetSubtype["COMMERCIAL"] = "COMMERCIAL";
    // ALTERNATIVES
    EAssetSubtype["CRYPTO"] = "CRYPTO";
    EAssetSubtype["NFT"] = "NFT";
    EAssetSubtype["COMMODITY"] = "COMMODITY";
    EAssetSubtype["WATCH"] = "WATCH";
    EAssetSubtype["JEWELLRY"] = "JEWELLRY";
    EAssetSubtype["GEMSTONE"] = "GEMSTONE";
    EAssetSubtype["LAND"] = "LAND";
    EAssetSubtype["CAR"] = "CAR";
    EAssetSubtype["BOAT"] = "BOAT";
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
    EAssetSubtype["INVESTMENT_ACCOUNT"] = "INVESTMENT_ACCOUNT";
    EAssetSubtype["BANK_ACCOUNT"] = "BANK_ACCOUNT";
    EAssetSubtype["CASH"] = "CASH";
    EAssetSubtype["OTHER"] = "OTHER";
})(EAssetSubtype || (exports.EAssetSubtype = EAssetSubtype = {}));
var EAssetIndustry;
(function (EAssetIndustry) {
    EAssetIndustry["AGRICULTURE"] = "AGRICULTURE";
    EAssetIndustry["AUTOMOTIVE"] = "AUTOMOTIVE";
    EAssetIndustry["BANKING"] = "BANKING";
    EAssetIndustry["BIOTECHNOLOGY"] = "BIOTECHNOLOGY";
    EAssetIndustry["CONSTRUCTION"] = "CONSTRUCTION";
    EAssetIndustry["CONSUMER_GOODS"] = "CONSUMER_GOODS";
    EAssetIndustry["EDUCATION"] = "EDUCATION";
    EAssetIndustry["ENERGY"] = "ENERGY";
    EAssetIndustry["ENTERTAINMENT"] = "ENTERTAINMENT";
    EAssetIndustry["FINANCIAL_SERVICES"] = "FINANCIAL_SERVICES";
    EAssetIndustry["FINTECH"] = "FINTECH";
    EAssetIndustry["FOOD_BEVERAGE"] = "FOOD_BEVERAGE";
    EAssetIndustry["GOVERNMENT"] = "GOVERNMENT";
    EAssetIndustry["HEALTHCARE"] = "HEALTHCARE";
    EAssetIndustry["HOSPITALITY"] = "HOSPITALITY";
    EAssetIndustry["INFORMATION_TECHNOLOGY"] = "INFORMATION_TECHNOLOGY";
    EAssetIndustry["INSURANCE"] = "INSURANCE";
    EAssetIndustry["MANUFACTURING"] = "MANUFACTURING";
    EAssetIndustry["MEDIA"] = "MEDIA";
    EAssetIndustry["MINING"] = "MINING";
    EAssetIndustry["PHARMACEUTICAL"] = "PHARMACEUTICAL";
    EAssetIndustry["PROPTECH"] = "PROPTECH";
    EAssetIndustry["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetIndustry["RETAIL"] = "RETAIL";
    EAssetIndustry["TELECOMMUNICATIONS"] = "TELECOMMUNICATIONS";
    EAssetIndustry["TRANSPORTATION"] = "TRANSPORTATION";
    EAssetIndustry["UTILITIES"] = "UTILITIES";
})(EAssetIndustry || (exports.EAssetIndustry = EAssetIndustry = {}));
exports.AssetSchema = ss.type({
    name: ss.string(),
    providerImport: ss.optional(ss.any()),
    organizationNumber: ss.optional(ss.string()),
    contactEmail: ss.string(),
    ledger: ledger_1.LedgerSchema,
    listed: ss.optional(ss.boolean()),
    assetId: ss.optional(ss.any()),
    externalId: ss.optional(ss.string()),
    type: ss.optional(ss.enums(Object.keys(EAssetType))),
    subtypes: ss.optional(ss.array(ss.enums(Object.keys(EAssetSubtype)))),
    tags: ss.optional(ss.array(ss.string())),
    isBankAccount: ss.optional(ss.boolean()),
    source: ss.optional(ss.enums(Object.keys(EAssetSource))),
    provider: ss.optional(ss.string()),
    symbol: ss.optional(ss.string()),
    parent: ss.optional(documentId_1.DocumentIdSchema),
    children: ss.optional(ss.array(documentId_1.DocumentIdSchema)),
    automatic: ss.optional(ss.boolean()),
    articles: ss.optional(ss.array(ss.any())),
    lastNewsUpdate: ss.optional(ss.any()),
    image: ss.optional(ss.string()),
    automaticLogoFailed: ss.optional(ss.boolean()),
    realEstateInformation: ss.optional(ss.object({
        type: ss.optional(ss.string()),
        country: ss.optional(ss.string()),
        city: ss.optional(ss.string()),
        address: ss.optional(ss.string())
    })),
    realEstateType: ss.optional(ss.string()),
    country: ss.optional(ss.string()),
    city: ss.optional(ss.string()),
    address: ss.optional(ss.string()),
    assetAdmins: ss.optional(ss.array(documentId_1.DocumentIdSchema)),
    currency: ss.optional(ss.string()),
    createdBy: ss.optional(ss.string()),
    ticker: ss.optional(documentId_1.DocumentIdSchema),
});
exports.emptyAsset = {
    _id: '____',
    name: '',
    contactEmail: '',
    ledger: {
        sharesIssued: 0,
        sharePrice: value_1.emptyValue,
    },
    listed: false
};
