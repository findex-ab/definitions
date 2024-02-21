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
}
export declare const InvestmentSchema: ss.Struct<{
    asset: string;
    invested: IValue;
    quantity: number;
    time?: any;
    returnValue?: IValue | undefined;
    price?: IValue | undefined;
    automatic?: boolean | undefined;
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
}>;
