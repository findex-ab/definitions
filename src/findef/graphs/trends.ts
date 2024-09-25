import { PortfolioDiversification } from "../portfolio";
import { IValue } from "../value"

export type TrendsGraphData = {
  value: number;
  date: Date;
  assetCount: number;
  diversification: PortfolioDiversification;
}

export type TrendsGraph = {
  invested: IValue;
  initialValue: IValue;
  performancePercent: number;
  valueChange: number;
  data: TrendsGraphData[];
}
