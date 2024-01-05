import { TDocRef } from "./docref";
import { IValue, ValueSchema } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";

export interface IInvestment {
  asset: TDocRef<IAsset>;
  invested: IValue;
  quantity: number;
  time?: Date;
}

export const InvestmentSchema = ss.type({
  asset: ss.string(),
  invested: ValueSchema,
  quantity: ss.number(),
  time: ss.optional(ss.date())
})
