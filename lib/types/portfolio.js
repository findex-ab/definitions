import { EAssetType } from "./asset";
import * as ss from "superstruct";
export const PortfolioValueSlotSchema = ss.type({
    assetCount: ss.number(),
    value: ss.number(),
    invested: ss.number(),
    roi: ss.number(),
    partition: ss.number()
});
export const PortfolioSchema = ss.type({
    total: PortfolioValueSlotSchema,
    diversification: ss.record(ss.enums([
        EAssetType.ALTERNATIVE,
        EAssetType.LISTED_EQUITY,
        EAssetType.REAL_ESTATE,
        EAssetType.UNDEFINED,
        EAssetType.UNLISTED_EQUITY,
    ]), PortfolioValueSlotSchema)
});
//# sourceMappingURL=portfolio.js.map