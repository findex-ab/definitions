import { TDocRef } from "./docref";
import { IValue } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";
export declare const DateField: ss.Struct<Date, null>;
export declare enum EShareholderType {
    RETAIL_INVESTOR = "RETAIL_INVESTOR",
    ANGEL_INVESTOR = "ANGEL_INVESTOR",
    FOUNDER = "FOUNDER",
    EMPLOYEE = "EMPLOYEE",
    VC = "VC"
}
export interface IInvestment {
    asset: TDocRef<IAsset>;
    invested: IValue;
    returnValue?: IValue;
    currentValue?: IValue;
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
    shareholderType?: EShareholderType;
}
export declare const InvestmentSchema: ss.Struct<{
    quantity: number;
    asset: string;
    invested: IValue;
    automatic?: boolean | undefined;
    time?: any;
    returnValue?: IValue | undefined;
    currentValue?: IValue | undefined;
    price?: IValue | undefined;
    ROI?: IValue | undefined;
    acquiredPrice?: IValue | undefined;
    lastPrice?: IValue | undefined;
    morningPriceTC?: IValue | undefined;
    marketValueTC?: IValue | undefined;
    marketValueAC?: IValue | undefined;
    pctReturn?: number | undefined;
    pctToday?: number | undefined;
    shareholderType?: EShareholderType | undefined;
}, {
    asset: ss.Struct<string, null>;
    invested: ss.Describe<IValue>;
    returnValue: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    currentValue: ss.Struct<IValue | undefined, {
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
    shareholderType: ss.Struct<EShareholderType | undefined, {
        RETAIL_INVESTOR: EShareholderType.RETAIL_INVESTOR;
        ANGEL_INVESTOR: EShareholderType.ANGEL_INVESTOR;
        FOUNDER: EShareholderType.FOUNDER;
        EMPLOYEE: EShareholderType.EMPLOYEE;
        VC: EShareholderType.VC;
    }>;
}>;
