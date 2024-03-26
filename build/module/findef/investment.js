import { ValueSchema } from "./value";
import * as ss from 'superstruct';
const parseDate = (value) => {
    if (typeof value === 'object' && !!value.getDay)
        return value;
    try {
        if (typeof value === 'string')
            return new Date(Date.parse(value));
        return new Date(value);
    }
    catch (e) {
        console.warn(e);
        return new Date();
    }
};
export const DateField = ss.coerce(ss.date(), ss.string(), (value) => {
    return parseDate(value);
});
export var EShareholderType;
(function (EShareholderType) {
    EShareholderType["RETAIL_INVESTOR"] = "RETAIL_INVESTOR";
    EShareholderType["ANGEL_INVESTOR"] = "ANGEL_INVESTOR";
    EShareholderType["FOUNDER"] = "FOUNDER";
    EShareholderType["EMPLOYEE"] = "EMPLOYEE";
    EShareholderType["VC"] = "VC";
})(EShareholderType || (EShareholderType = {}));
export const InvestmentSchema = ss.type({
    asset: ss.string(),
    invested: ValueSchema,
    returnValue: ss.optional(ValueSchema),
    currentValue: ss.optional(ValueSchema),
    price: ss.optional(ValueSchema),
    quantity: ss.number(),
    automatic: ss.optional(ss.boolean()),
    time: ss.any(),
    ROI: ss.optional(ValueSchema),
    acquiredPrice: ss.optional(ValueSchema),
    lastPrice: ss.optional(ValueSchema),
    morningPriceTC: ss.optional(ValueSchema),
    marketValueTC: ss.optional(ValueSchema),
    marketValueAC: ss.optional(ValueSchema),
    pctReturn: ss.optional(ss.number()),
    pctToday: ss.optional(ss.number()),
    shareholderType: ss.optional(ss.enums([
        EShareholderType.RETAIL_INVESTOR,
        EShareholderType.ANGEL_INVESTOR,
        EShareholderType.FOUNDER,
        EShareholderType.EMPLOYEE,
        EShareholderType.VC
    ]))
});
