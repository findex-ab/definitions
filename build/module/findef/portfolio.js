import { EAssetType } from "./asset";
import * as ss from "superstruct";
export const PortfolioValueSlotSchema = ss.type({
    currency: ss.string(),
    assetCount: ss.number(),
    value: ss.number(),
    valueChange: ss.number(),
    valueChangePercent: ss.number(),
    invested: ss.number(),
    roi: ss.number(),
    partition: ss.number()
});
const AssetDiversificationSlotSchema = ss.object({
    listed: ss.optional(PortfolioValueSlotSchema),
    unlisted: ss.optional(PortfolioValueSlotSchema),
    all: ss.optional(PortfolioValueSlotSchema),
});
export const PortfolioTrendsSchema = ss.type({
    transaction: ss.object({
        count: ss.number()
    }),
    value: ss.object({
        change: ss.number(),
        roi: ss.number()
    }),
    total: PortfolioValueSlotSchema
});
export const PortfolioSchema = ss.type({
    total: PortfolioValueSlotSchema,
    diversification: ss.record(ss.enums(Object.values(EAssetType)), AssetDiversificationSlotSchema),
    trends: PortfolioTrendsSchema,
    currency: ss.string()
});
