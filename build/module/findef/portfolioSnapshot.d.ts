import { TDocRef } from "./docref";
import { PortfolioDiversification } from "./portfolio";
import { IUser } from "./user";
import { IValue } from "./value";
export interface IPortfolioSnapshotSlot {
    count: number;
}
export interface IPortfolioSnapshot {
    user: TDocRef<IUser>;
    investment: IPortfolioSnapshotSlot;
    asset: IPortfolioSnapshotSlot;
    totalInvested: IValue;
    totalCurrentValue: IValue;
    totalProfit: IValue;
    diversification: PortfolioDiversification;
    timestamp: Date;
    hash: string;
}
