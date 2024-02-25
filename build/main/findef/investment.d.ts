import { TDocRef } from "./docref";
import { IValue } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";
export declare const DateField: ss.Struct<Date, null>;
export interface IInvestment {
    asset: TDocRef<IAsset>;
    invested: IValue;
    returnValue?: IValue;
    price?: IValue;
    quantity: number;
    automatic?: boolean;
    time?: Date;
    ROI?: IValue;
    acquiredPrice?: IValue;
    lastPrice?: IValue;
    morningPriceTC?: IValue;
    marketValueTC?: IValue;
    marketValueAC?: IValue;
    pctReturn?: number;
    pctToday?: number;
}
export declare const InvestmentSchema: ss.Struct<{
    quantity: number;
    asset: string;
    invested: IValue;
    automatic?: boolean | undefined;
    time?: any;
    returnValue?: IValue | undefined;
    price?: IValue | undefined;
    ROI?: IValue | undefined;
    acquiredPrice?: IValue | undefined;
    lastPrice?: IValue | undefined;
    morningPriceTC?: IValue | undefined;
    marketValueTC?: IValue | undefined;
    marketValueAC?: IValue | undefined;
    pctReturn?: number | undefined;
    pctToday?: number | undefined;
}, {
    asset: ss.Struct<string, null>;
    invested: ss.Describe<IValue>;
    returnValue: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    price: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    quantity: ss.Struct<number, null>;
    automatic: ss.Struct<boolean | undefined, null>;
    time: ss.Struct<any, null>;
    ROI: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    acquiredPrice: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    lastPrice: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    morningPriceTC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    marketValueTC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    marketValueAC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    pctReturn: ss.Struct<number | undefined, null>;
    pctToday: ss.Struct<number | undefined, null>;
}>;
