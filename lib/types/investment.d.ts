import { TDocRef } from "./docref";
import { IValue } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";
export interface IInvestment {
    asset: TDocRef<IAsset>;
    invested: IValue;
    quantity: number;
    time?: Date;
}
export declare const InvestmentSchema: ss.Struct<{
    time: Date;
    asset: string;
    invested: IValue;
    quantity: number;
}, {
    asset: ss.Struct<string, null>;
    invested: ss.Describe<IValue>;
    quantity: ss.Struct<number, null>;
    time: ss.Struct<Date, null>;
}>;
