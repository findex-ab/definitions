import * as ss from 'superstruct';
import { LedgerSchema } from './ledger';
import { DocumentIdSchema } from './documentId';
export var EAssetType;
(function (EAssetType) {
    EAssetType["UNDEFINED"] = "UNDEFINED";
    //  ANY = "ANY",
    EAssetType["LISTED_EQUITY"] = "LISTED_EQUITY";
    EAssetType["UNLISTED_EQUITY"] = "UNLISTED_EQUITY";
    EAssetType["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetType["ALTERNATIVE"] = "ALTERNATIVE";
})(EAssetType || (EAssetType = {}));
export var EAssetSource;
(function (EAssetSource) {
    EAssetSource["IR"] = "IR";
    EAssetSource["AUTOMATIC"] = "AUTOMATIC";
    EAssetSource["MANUAL"] = "MANUAL";
})(EAssetSource || (EAssetSource = {}));
export var EAssetSubtype;
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
})(EAssetSubtype || (EAssetSubtype = {}));
export const AssetSchema = ss.type({
    name: ss.string(),
    organizationNumber: ss.optional(ss.string()),
    contactEmail: ss.string(),
    ledger: LedgerSchema,
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
    }))
});
