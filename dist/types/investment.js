"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentSchema = void 0;
const value_1 = require("./value");
const ss = require("superstruct");
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
const DateField = ss.coerce(ss.date(), ss.string(), (value) => {
    return parseDate(value);
});
exports.InvestmentSchema = ss.type({
    asset: ss.string(),
    invested: value_1.ValueSchema,
    quantity: ss.number(),
    time: ss.any() //ss.optional(DateField)
});
//# sourceMappingURL=investment.js.map