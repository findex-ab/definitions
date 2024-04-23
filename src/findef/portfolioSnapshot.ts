import { TDocRef } from "./docref";
import { IInvestment } from "./investment";
import { PortfolioDiversification } from "./portfolio";
import { IUser } from "./user";
import { IValue } from "./value";

export interface IPortfolioSnapshotSlot {
  count: number;
}

export type IPortfolioSnapshotInvestment = {
  uid: string;
  data: Partial<IInvestment>
}

export interface IPortfolioSnapshot {
  user: TDocRef<IUser>;
  
  investment: IPortfolioSnapshotSlot;
  investments: IPortfolioSnapshotInvestment[];
  asset: IPortfolioSnapshotSlot;
  totalInvested: IValue;
  totalCurrentValue: IValue;
  totalProfit: IValue;
  diversification: PortfolioDiversification;
  timestamp: Date;
}
