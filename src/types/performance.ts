import { IntegrationPerformance } from "./integrationPerformance";
import * as ss from 'superstruct';

export type Performance = IntegrationPerformance;


export const PerformanceSchema: ss.Describe<Performance> = ss.type({
  date: ss.string(),
  accMonetaryPerf: ss.number(),
  monetaryPerf: ss.number(),
  accPctPerf:ss.number(), 
  pctPerf: ss.number(), 
  raw: ss.string()
});
