import { EAssetType } from "./asset";
import * as ss from "superstruct";

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

export type PortfolioTrends = {
  transaction: {
    count: number;
  },
  value: {
    change: number;
    roi: number;
  }
}

export const PortfolioTrendsSchema = ss.type({
  transaction: ss.object({
    count: ss.number()
  }),
  value: ss.object({
    change: ss.number(),
    roi: ss.number()
  })
}) 

export type Portfolio = {
  total: PortfolioValueSlot;
  diversification: PortfolioDiversification;
  trends: PortfolioTrends;
};

export const PortfolioSchema = ss.type({
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
  trends: PortfolioTrendsSchema
});
