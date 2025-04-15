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
export declare const PortfolioValueSlotSchema: ss.Describe<PortfolioValueSlot>;
type AssetDiversificationSlot = {
    listed?: PortfolioValueSlot;
    unlisted?: PortfolioValueSlot;
    all?: PortfolioValueSlot;
};
export type PortfolioDiversification = Record<EAssetType, AssetDiversificationSlot>;
export type PortfolioTrends = {
    transaction: {
        count: number;
    };
    value: {
        change: number;
        roi: number;
    };
    total: PortfolioValueSlot;
};
export declare const PortfolioTrendsSchema: ss.Struct<{
    value: {
        roi: number;
        change: number;
    };
    total: PortfolioValueSlot;
    transaction: {
        count: number;
    };
}, {
    transaction: ss.Struct<{
        count: number;
    }, {
        count: ss.Struct<number, null>;
    }>;
    value: ss.Struct<{
        roi: number;
        change: number;
    }, {
        change: ss.Struct<number, null>;
        roi: ss.Struct<number, null>;
    }>;
    total: ss.Describe<PortfolioValueSlot>;
}>;
export type Portfolio = {
    total: PortfolioValueSlot;
    diversification: PortfolioDiversification;
    trends: PortfolioTrends;
    currency: string;
};
export declare const PortfolioSchema: ss.Struct<{
    total: PortfolioValueSlot;
    currency: string;
    diversification: Record<EAssetType, {
        listed?: PortfolioValueSlot | undefined;
        unlisted?: PortfolioValueSlot | undefined;
        all?: PortfolioValueSlot | undefined;
    }>;
    trends: {
        value: {
            roi: number;
            change: number;
        };
        total: PortfolioValueSlot;
        transaction: {
            count: number;
        };
    };
}, {
    total: ss.Describe<PortfolioValueSlot>;
    diversification: ss.Struct<Record<EAssetType, {
        listed?: PortfolioValueSlot | undefined;
        unlisted?: PortfolioValueSlot | undefined;
        all?: PortfolioValueSlot | undefined;
    }>, null>;
    trends: ss.Struct<{
        value: {
            roi: number;
            change: number;
        };
        total: PortfolioValueSlot;
        transaction: {
            count: number;
        };
    }, {
        transaction: ss.Struct<{
            count: number;
        }, {
            count: ss.Struct<number, null>;
        }>;
        value: ss.Struct<{
            roi: number;
            change: number;
        }, {
            change: ss.Struct<number, null>;
            roi: ss.Struct<number, null>;
        }>;
        total: ss.Describe<PortfolioValueSlot>;
    }>;
    currency: ss.Struct<string, null>;
}>;
export {};
