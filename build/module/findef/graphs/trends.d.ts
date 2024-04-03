import { IValue } from "../value";
export type TrendsGraphData = {
    value: number;
    date: Date;
};
export type TrendsGraph = {
    invested: IValue;
    performancePercent: number;
    valueChange: number;
    data: TrendsGraphData[];
};
