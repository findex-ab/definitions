import * as ss from "superstruct";
export const ValueSchema = ss.type({
    value: ss.number(),
    type: ss.optional(ss.string()),
    percentage: ss.optional(ss.number()),
    time: ss.any()
});
export const emptyValue = {
    value: 0,
    percentage: 0,
    type: 'SEK',
    time: new Date()
};
