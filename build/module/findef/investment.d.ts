import { TDocRef } from "./docref";
import { IValue } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";
export declare const DateField: ss.Struct<Date, null>;
export declare enum EShareholderType {
    ANGEL_INVESTOR = "ANGEL_INVESTOR",
    EMPLOYEE = "EMPLOYEE",
    FOUNDER = "FOUNDER",
    INVESTMENT_COMPANY = "INVESTMENT_COMPANY",
    RETAIL_INVESTOR = "RETAIL_INVESTOR",
    VC = "VC",
    OTHER = "OTHER"
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
    asset: string;
    invested: IValue;
    quantity: number;
    time?: any;
    returnValue?: IValue | undefined;
    currentValue?: IValue | undefined;
    price?: IValue | undefined;
    automatic?: boolean | undefined;
    ROI?: IValue | undefined;
    acquiredPrice?: IValue | undefined;
    lastPrice?: IValue | undefined;
    morningPriceTC?: IValue | undefined;
    marketValueTC?: IValue | undefined;
    marketValueAC?: IValue | undefined;
    pctReturn?: number | undefined;
    pctToday?: number | undefined;
    shareholderType?: EShareholderType.ANGEL_INVESTOR | EShareholderType.EMPLOYEE | EShareholderType.FOUNDER | EShareholderType.RETAIL_INVESTOR | EShareholderType.VC | undefined;
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
    shareholderType: ss.Struct<EShareholderType.ANGEL_INVESTOR | EShareholderType.EMPLOYEE | EShareholderType.FOUNDER | EShareholderType.RETAIL_INVESTOR | EShareholderType.VC | undefined, {
        ANGEL_INVESTOR: EShareholderType.ANGEL_INVESTOR;
        EMPLOYEE: EShareholderType.EMPLOYEE;
        FOUNDER: EShareholderType.FOUNDER;
        RETAIL_INVESTOR: EShareholderType.RETAIL_INVESTOR;
        VC: EShareholderType.VC;
    }>;
}>;
