import { EAssetType } from "./asset";
import * as ss from "superstruct";
export type PortfolioValueSlot = {
    assetCount: number;
    value: number;
    invested: number;
    roi: number;
    partition: number;
};
export declare const PortfolioValueSlotSchema: ss.Describe<PortfolioValueSlot>;
export type PortfolioDiversification = Record<EAssetType, PortfolioValueSlot>;
export type Portfolio = {
    total: PortfolioValueSlot;
    diversification: PortfolioDiversification;
};
export declare const PortfolioSchema: ss.Struct<{
    total: PortfolioValueSlot;
    diversification: Record<EAssetType, PortfolioValueSlot>;
}, {
    total: ss.Describe<PortfolioValueSlot>;
    diversification: ss.Struct<Record<EAssetType, PortfolioValueSlot>, null>;
}>;