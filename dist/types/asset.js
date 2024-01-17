"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetSchema = exports.EAssetType = void 0;
const ss = require("superstruct");
const _1 = require(".");
var EAssetType;
(function (EAssetType) {
    EAssetType["UNDEFINED"] = "UNDEFINED";
    EAssetType["LISTED_EQUITY"] = "LISTED_EQUITY";
    EAssetType["UNLISTED_EQUITY"] = "UNLISTED_EQUITY";
    EAssetType["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetType["ALTERNATIVE"] = "ALTERNATIVE";
})(EAssetType || (exports.EAssetType = EAssetType = {}));
exports.AssetSchema = ss.type({
    name: ss.string(),
    organizationNumber: ss.string(),
    contactEmail: ss.string(),
    ledger: _1.LedgerSchema,
    assetId: ss.optional(ss.any()),
    type: ss.optional(ss.enums([EAssetType.UNDEFINED, EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE]))
});
//# sourceMappingURL=asset.js.map