"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetSchema = void 0;
const superstruct_1 = require("superstruct");
const _1 = require(".");
exports.AssetSchema = superstruct_1.default.object({
    name: superstruct_1.default.string(),
    organizationNumber: superstruct_1.default.string(),
    contactEmail: superstruct_1.default.string(),
    ledger: _1.LedgerSchema,
    assetId: superstruct_1.default.optional(superstruct_1.default.any()),
});
