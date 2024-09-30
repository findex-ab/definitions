import { PortfolioDiversification } from "../portfolio";
import { IUserWorth } from "../userWorth";
import { IValue } from "../value"

export type TrendsGraphData = {
  value: number;
  date: Date;
  assetCount: number;
  diversification?: PortfolioDiversification;
  worth: IUserWorth;
}

export type TrendsGraph = {
  invested: IValue;
  initialValue: IValue;
  performancePercent: number;
  valueChange: number;
  data: TrendsGraphData[];
}
