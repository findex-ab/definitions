import { TDocRef } from "./docref"
import { IUser } from "./user"
import { IValue } from "./value";

export enum EOpportunityInquireType {
  BUY = 'BUY',
  SELL = 'SELL'
}

export type IOpportunityInquire = {
  user: TDocRef<IUser>;
  inquireType: EOpportunityInquireType;
  note?: string;
  amount?: IValue;
}
