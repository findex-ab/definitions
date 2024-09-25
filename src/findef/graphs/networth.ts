import { TDocRef } from "../docref";
import { PortfolioDiversification } from "../portfolio";
import { IUser } from "../user";
import { IValue } from "../value"

export type INetWorthDataPoint = {
  value: number;
  date: Date;
  assetCount: number;
  diversification: PortfolioDiversification;
}

export type INetWorthGraph = {
  user: TDocRef<IUser>;
  invested: IValue;
  initialValue: IValue;
  performancePercent: number;
  valueChange: number;
  data: INetWorthDataPoint[];
}
