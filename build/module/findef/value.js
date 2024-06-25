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
export const isValue = (x) => {
    if (!x)
        return false;
    if (typeof x !== 'object')
        return false;
    return (typeof x.value === 'number' && typeof x.type === 'string') || x.__isValue === true;
};
