import { EAssetType } from "./asset";
import * as ss from "superstruct";
import { Performance, PerformanceSchema } from "./performance";

export type PortfolioValueSlot = {
  assetCount: number;
  value: number;
  invested: number;
  roi: number;
  partition: number;
};

export const PortfolioValueSlotSchema: ss.Describe<PortfolioValueSlot> =
  ss.type({
    assetCount: ss.number(),
    value: ss.number(),
    invested: ss.number(),
    roi: ss.number(),
    partition: ss.number()
  });

export type PortfolioDiversification = Record<EAssetType, PortfolioValueSlot>;

export type Portfolio = {
  total: PortfolioValueSlot;
  diversification: PortfolioDiversification;
  performance?: Performance[];
};

export const PortfolioSchema: ss.Describe<Portfolio> = ss.type({
  total: PortfolioValueSlotSchema,
  diversification: ss.record(
    ss.enums([
      EAssetType.ALTERNATIVE,
      EAssetType.LISTED_EQUITY,
      EAssetType.REAL_ESTATE,
      EAssetType.UNDEFINED,
      EAssetType.UNLISTED_EQUITY,
    ]),
    PortfolioValueSlotSchema
  ),
  performance: ss.optional(ss.array(PerformanceSchema))
});
