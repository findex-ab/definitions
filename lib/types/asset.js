"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetSchema = void 0;
const zod_1 = require("zod");
const _1 = require(".");
const defaultLedger = {
    sharePrice: { value: 0 },
    sharesIssued: 0
};
exports.AssetSchema = zod_1.default.object({
    name: zod_1.default.string().min(1),
    organizationNumber: zod_1.default.string().min(1),
    contactEmail: zod_1.default.string().min(1),
    ledger: zod_1.default.object({
        sharePrice: _1.ValueSchema,
        sharesIssued: zod_1.default.number()
    }).optional().default(defaultLedger),
    assetId: zod_1.default.any()
});
