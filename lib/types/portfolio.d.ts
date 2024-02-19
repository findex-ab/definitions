import { EAssetType } from "./asset";
import * as ss from "superstruct";
import { Performance } from "./performance";
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
    performance?: Performance[];
};
export declare const PortfolioSchema: ss.Describe<Portfolio>;
