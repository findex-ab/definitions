import { TDocRef } from "../docref";
import { PortfolioDiversification } from "../portfolio";
import { IUser } from "../user";
import { IUserWorth } from "../userWorth";
import { IValue } from "../value"

export type INetWorthDataPoint = {
  value: number;
  date: Date;
  assetCount: number;
  diversification?: PortfolioDiversification;
  worth: IUserWorth;
  liabilityValue: number;
  liabilityCount: number;
}

export type INetWorthGraph = {
  user: TDocRef<IUser>;
  invested: IValue;
  initialValue: IValue;
  performancePercent: number;
  valueChange: number;
  data: INetWorthDataPoint[];
}
