import { TDocRef } from "./docref";
import { IValue } from "./value";
import ss from 'superstruct';
import { IAsset } from "./asset";
export interface IInvestment {
    asset: TDocRef<IAsset>;
    invested: IValue;
    quantity: number;
}
export declare const InvestmentSchema: ss.Struct<{
    asset: string;
    invested: IValue;
    quantity: number;
}, {
    asset: ss.Struct<string, null>;
    invested: ss.Describe<IValue>;
    quantity: ss.Struct<number, null>;
}>;
