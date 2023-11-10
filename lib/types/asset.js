"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetSchema = void 0;
const ss = require("superstruct");
const _1 = require(".");
exports.AssetSchema = ss.object({
    name: ss.string(),
    organizationNumber: ss.string(),
    contactEmail: ss.string(),
    ledger: _1.LedgerSchema,
    assetId: ss.optional(ss.any()),
});
//# sourceMappingURL=asset.js.map