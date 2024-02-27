import { DocumentId } from "./documentId";
import { IntegrationPerformance } from "./integrationPerformance";
import * as ss from 'superstruct';
export type Performance = IntegrationPerformance;
export type UserPerformance = {
    userId: DocumentId;
    performance: Performance[];
    lastUpdated: Date;
};
export declare const PerformanceSchema: ss.Describe<Performance>;
