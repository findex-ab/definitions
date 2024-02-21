"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentSchema = exports.DateField = void 0;
const value_1 = require("./value");
const ss = __importStar(require("superstruct"));
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
exports.DateField = ss.coerce(ss.date(), ss.string(), (value) => {
    return parseDate(value);
});
exports.InvestmentSchema = ss.type({
    asset: ss.string(),
    invested: value_1.ValueSchema,
    returnValue: ss.optional(value_1.ValueSchema),
    price: ss.optional(value_1.ValueSchema),
    quantity: ss.number(),
    automatic: ss.optional(ss.boolean()),
    time: ss.any()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXN0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBlcy9pbnZlc3RtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQThDO0FBQzlDLGdEQUFrQztBQUdsQyxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQTZCLEVBQVEsRUFBRTtJQUN4RCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM5RCxJQUFJLENBQUM7UUFDSCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRSxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQ25FLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDO0FBWVUsUUFBQSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3RDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ2xCLFFBQVEsRUFBRSxtQkFBVztJQUNyQixXQUFXLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBVyxDQUFDO0lBQ3JDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFXLENBQUM7SUFDL0IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDckIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFO0NBQ2YsQ0FBQyxDQUFBIn0=