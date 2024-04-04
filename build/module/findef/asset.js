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
export const AssetSchema = ss.type({
    name: ss.string(),
    organizationNumber: ss.optional(ss.string()),
    contactEmail: ss.string(),
    ledger: LedgerSchema,
    assetId: ss.optional(ss.any()),
    externalId: ss.optional(ss.string()),
    type: ss.optional(ss.enums([EAssetType.UNDEFINED, EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE])),
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
