import * as ss from "superstruct";
export const ValueSchema = ss.type({
    value: ss.number(),
    type: ss.optional(ss.string()),
    percentage: ss.optional(ss.number()),
    time: ss.any()
});
