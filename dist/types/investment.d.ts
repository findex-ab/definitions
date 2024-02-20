import { TDocRef } from "./docref";
import { IValue } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";
export interface IInvestment {
    asset: TDocRef<IAsset>;
    invested: IValue;
    returnValue?: IValue;
    price?: IValue;
    quantity: number;
    automatic?: boolean;
    time?: Date;
}
export declare const InvestmentSchema: ss.Struct<{
    automatic: boolean;
    asset: string;
    invested: IValue;
    returnValue: IValue;
    price: IValue;
    quantity: number;
    time?: any;
}, {
    asset: ss.Struct<string, null>;
    invested: ss.Describe<IValue>;
    returnValue: ss.Struct<IValue, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number>;
        type?: ss.Describe<string>;
        time?: ss.Describe<Date>;
    }>;
    price: ss.Struct<IValue, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number>;
        type?: ss.Describe<string>;
        time?: ss.Describe<Date>;
    }>;
    quantity: ss.Struct<number, null>;
    automatic: ss.Struct<boolean, null>;
    time: ss.Struct<any, null>;
}>;
