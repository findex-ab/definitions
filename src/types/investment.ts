import { TDocRef } from "./docref";
import { IValue, ValueSchema } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";

export interface IInvestment {
  asset: TDocRef<IAsset>;
  invested: IValue;
  quantity: number;
}

export const InvestmentSchema = ss.type({
    asset: ss.string(),
    invested: ValueSchema,
    quantity: ss.number()
})
