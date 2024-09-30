import { TDocRef } from "./docref";
import { FindexInvestment } from "./investment";
import { PortfolioDiversification } from "./portfolio";
import { IUser } from "./user";
import { IUserWorth } from "./userWorth";
import { IValue } from "./value";
export interface IPortfolioSnapshotSlot {
    count: number;
}
export type IPortfolioSnapshotInvestment = FindexInvestment & {
    uid: string;
};
export interface IPortfolioSnapshot {
    user: TDocRef<IUser>;
    investment: IPortfolioSnapshotSlot;
    investments: IPortfolioSnapshotInvestment[];
    asset: IPortfolioSnapshotSlot;
    totalInvested: IValue;
    totalCurrentValue: IValue;
    totalProfit: IValue;
    worth: IUserWorth;
    diversification?: PortfolioDiversification;
    timestamp: Date;
}
