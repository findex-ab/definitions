import { EAssetType } from "./asset";
import * as ss from "superstruct";

export type PortfolioValueSlot = {
  assetCount: number;
  value: number;
  valueChange: number;
  valueChangePercent: number;
  invested: number;
  roi: number;
  partition: number;
  currency: string;
};

export const PortfolioValueSlotSchema: ss.Describe<PortfolioValueSlot> =
  ss.type({
    currency: ss.string(),
    assetCount: ss.number(),
    value: ss.number(),
    valueChange: ss.number(),
    valueChangePercent: ss.number(),
    invested: ss.number(),
    roi: ss.number(),
    partition: ss.number()
  });

type AssetDiversificationSlot = {
  listed?: PortfolioValueSlot;
  unlisted?: PortfolioValueSlot;
  all?: PortfolioValueSlot;
}
const AssetDiversificationSlotSchema = ss.object({
  listed: ss.optional(PortfolioValueSlotSchema),
  unlisted: ss.optional(PortfolioValueSlotSchema),
  all: ss.optional(PortfolioValueSlotSchema),
});

export type PortfolioDiversification = Record<EAssetType, AssetDiversificationSlot>;

export type PortfolioTrends = {
  transaction: {
    count: number;
  },
  value: {
    change: number;
    roi: number;
  },
  total: PortfolioValueSlot
}

export const PortfolioTrendsSchema = ss.type({
  transaction: ss.object({
    count: ss.number()
  }),
  value: ss.object({
    change: ss.number(),
    roi: ss.number()
  }),
  total: PortfolioValueSlotSchema
})

export type Portfolio = {
  total: PortfolioValueSlot;
  diversification: PortfolioDiversification;
  trends: PortfolioTrends;
  currency: string;
};

export const PortfolioSchema = ss.type({
  total: PortfolioValueSlotSchema,
  diversification: ss.record(
    ss.enums(Object.values(EAssetType)),
    AssetDiversificationSlotSchema
  ),
  trends: PortfolioTrendsSchema,
  currency: ss.string()
});
