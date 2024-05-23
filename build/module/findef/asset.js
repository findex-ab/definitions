import * as ss from 'superstruct';
import { LedgerSchema } from './ledger';
import { DocumentIdSchema } from './documentId';
export var EAssetType;
(function (EAssetType) {
    EAssetType["UNDEFINED"] = "UNDEFINED";
    EAssetType["EQUITY"] = "EQUITY";
    EAssetType["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetType["ALTERNATIVE"] = "ALTERNATIVE";
    EAssetType["BANK_ACCOUNT"] = "BANK_ACCOUNT";
})(EAssetType || (EAssetType = {}));
export var EAssetSource;
(function (EAssetSource) {
    EAssetSource["IR"] = "IR";
    EAssetSource["AUTOMATIC"] = "AUTOMATIC";
    EAssetSource["MANUAL"] = "MANUAL";
})(EAssetSource || (EAssetSource = {}));
export var EAssetSubtype;
(function (EAssetSubtype) {
    // EQUITIES
    EAssetSubtype["STOCK"] = "STOCK";
    EAssetSubtype["FUND"] = "FUND";
    EAssetSubtype["BOND"] = "BOND";
    EAssetSubtype["ETF"] = "ETF";
    EAssetSubtype["PENSION"] = "PENSION";
    EAssetSubtype["LOAN"] = "LOAN";
    // REAL ESTATE
    EAssetSubtype["APARTMENT"] = "APARTMENT";
    EAssetSubtype["HOUSE"] = "HOUSE";
    EAssetSubtype["BUILDING"] = "BUILDING";
    EAssetSubtype["PARKING"] = "PARKING";
    EAssetSubtype["COMMERCIAL"] = "COMMERCIAL";
    // ALTERNATIVES
    EAssetSubtype["CRYPTO"] = "CRYPTO";
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
    EAssetSubtype["OTHER"] = "OTHER";
})(EAssetSubtype || (EAssetSubtype = {}));
export const AssetSchema = ss.type({
    name: ss.string(),
    organizationNumber: ss.optional(ss.string()),
    contactEmail: ss.string(),
    ledger: LedgerSchema,
    listed: ss.optional(ss.boolean()),
    assetId: ss.optional(ss.any()),
    externalId: ss.optional(ss.string()),
    type: ss.optional(ss.enums(Object.keys(EAssetType))),
    subtypes: ss.optional(ss.array(ss.enums(Object.keys(EAssetSubtype)))),
    source: ss.optional(ss.enums(Object.keys(EAssetSource))),
    provider: ss.optional(ss.string()),
    symbol: ss.optional(ss.string()),
    parent: ss.optional(DocumentIdSchema),
    children: ss.optional(ss.array(DocumentIdSchema)),
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
