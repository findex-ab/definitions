import { DocumentId } from "./documentId";
import { IntegrationPerformance } from "./integrationPerformance";
import * as ss from 'superstruct';

export type Performance = IntegrationPerformance;

export type TimelinePerformanceItem = {
  value: number;
  date: Date;
};

export type UserPerformance = {
  userId: DocumentId;
  performance: Performance[];
  lastUpdated: Date;
}


export const PerformanceSchema: ss.Describe<Performance> = ss.type({
  date: ss.string(),
  accMonetaryPerf: ss.number(),
  monetaryPerf: ss.number(),
  accPctPerf:ss.number(), 
  pctPerf: ss.number(), 
  raw: ss.string(),
  lastUpdated: ss.any()
});
