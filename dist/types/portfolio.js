"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioSchema = exports.PortfolioValueSlotSchema = void 0;
const asset_1 = require("./asset");
const ss = require("superstruct");
const performance_1 = require("./performance");
exports.PortfolioValueSlotSchema = ss.type({
    assetCount: ss.number(),
    value: ss.number(),
    invested: ss.number(),
    roi: ss.number(),
    partition: ss.number()
});
exports.PortfolioSchema = ss.type({
    total: exports.PortfolioValueSlotSchema,
    diversification: ss.record(ss.enums([
        asset_1.EAssetType.ALTERNATIVE,
        asset_1.EAssetType.LISTED_EQUITY,
        asset_1.EAssetType.REAL_ESTATE,
        asset_1.EAssetType.UNDEFINED,
        asset_1.EAssetType.UNLISTED_EQUITY,
    ]), exports.PortfolioValueSlotSchema),
    performance: ss.optional(ss.array(performance_1.PerformanceSchema))
});
//# sourceMappingURL=portfolio.js.map