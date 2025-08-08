import { TDocRef } from "./docref"
import { IOpportunity } from "./opportunity";
import { IUser } from "./user"
import { IValue } from "./value";

export enum EOpportunityInquireType {
  INTEREST = 'INTEREST',
  BUY = 'BUY',
  SELL = 'SELL'
}

export type IOpportunityInquire = {
  user: TDocRef<IUser>;
  inquireType: EOpportunityInquireType;
  note?: string;
  sharePrice?: IValue;
  quantity?: number;
  opportunity: TDocRef<IOpportunity>;
  tradingWindow: string;
}
