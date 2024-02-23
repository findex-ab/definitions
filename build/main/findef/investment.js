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
    time: ss.any(),
    ROI: ss.optional(value_1.ValueSchema),
    acquiredPrice: ss.optional(value_1.ValueSchema),
    lastPrice: ss.optional(value_1.ValueSchema),
    morningPriceTC: ss.optional(value_1.ValueSchema),
    marketValueTC: ss.optional(value_1.ValueSchema),
    marketValueAC: ss.optional(value_1.ValueSchema),
    pctReturn: ss.optional(ss.number()),
    pctToday: ss.optional(ss.number())
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXN0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maW5kZWYvaW52ZXN0bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUE4QztBQUM5QyxnREFBa0M7QUFHbEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUE2QixFQUFRLEVBQUU7SUFDeEQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDOUQsSUFBSSxDQUFDO1FBQ0gsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1lBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNuRSxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQW9CVSxRQUFBLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdEMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDbEIsUUFBUSxFQUFFLG1CQUFXO0lBQ3JCLFdBQVcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFXLENBQUM7SUFDckMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQVcsQ0FBQztJQUMvQixRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNyQixTQUFTLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDZCxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBVyxDQUFDO0lBQzdCLGFBQWEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFXLENBQUM7SUFDdkMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQVcsQ0FBQztJQUNuQyxjQUFjLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBVyxDQUFDO0lBQ3hDLGFBQWEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFXLENBQUM7SUFDdkMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQVcsQ0FBQztJQUN2QyxTQUFTLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ25DLENBQUMsQ0FBQSJ9