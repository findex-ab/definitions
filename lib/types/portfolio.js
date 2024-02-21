"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioSchema = exports.PortfolioValueSlotSchema = void 0;
const asset_1 = require("./asset");
const ss = require("superstruct");
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
    ]), exports.PortfolioValueSlotSchema)
});
//# sourceMappingURL=portfolio.js.map