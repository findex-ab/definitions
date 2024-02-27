import * as ss from 'superstruct';
export const PerformanceSchema = ss.type({
    date: ss.string(),
    accMonetaryPerf: ss.number(),
    monetaryPerf: ss.number(),
    accPctPerf: ss.number(),
    pctPerf: ss.number(),
    raw: ss.string(),
    lastUpdated: ss.any()
});
