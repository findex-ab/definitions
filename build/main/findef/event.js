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
exports.FindexEventSchema = exports.FindexEventAssetDeletedPayloadSchema = exports.FindexEventAssetArchivedPayloadSchema = exports.FindexEventAssetCreatedPayloadSchema = exports.FindexEventPriceUpdatePayloadSchema = exports.FindexEventSellPayloadSchema = exports.FindexEventBuyPayloadSchema = exports.EventSource = exports.EventType = void 0;
const asset_1 = require("./asset");
const value_1 = require("./value");
const ss = __importStar(require("superstruct"));
var EventType;
(function (EventType) {
    EventType["UNKNOWN"] = "UNKNOWN";
    EventType["BUY"] = "BUY";
    EventType["SELL"] = "SELL";
    EventType["PRICE_UPDATE"] = "PRICE_UPDATE";
    EventType["ASSET_CREATED"] = "ASSET_CREATED";
    EventType["ASSET_DELETED"] = "ASSET_DELETED";
    EventType["ASSET_ARCHIVED"] = "ASSET_ARCHIVED";
})(EventType || (exports.EventType = EventType = {}));
var EventSource;
(function (EventSource) {
    EventSource["MANUAL"] = "MANUAL";
    EventSource["AUTOMATIC"] = "AUTOMATIC";
})(EventSource || (exports.EventSource = EventSource = {}));
exports.FindexEventBuyPayloadSchema = ss.type({
    quantity: ss.number(),
    price: value_1.ValueSchema,
    date: ss.union([ss.string(), ss.date()])
});
exports.FindexEventSellPayloadSchema = ss.type({
    quantity: ss.number(),
    price: value_1.ValueSchema,
    date: ss.union([ss.string(), ss.date()])
});
exports.FindexEventPriceUpdatePayloadSchema = ss.type({
    oldPrice: value_1.ValueSchema,
    newPrice: value_1.ValueSchema,
    date: ss.union([ss.string(), ss.date()])
});
exports.FindexEventAssetCreatedPayloadSchema = ss.type({
    asset: asset_1.AssetSchema
});
exports.FindexEventAssetArchivedPayloadSchema = ss.type({
    asset: asset_1.AssetSchema
});
exports.FindexEventAssetDeletedPayloadSchema = ss.type({
    asset: asset_1.AssetSchema
});
exports.FindexEventSchema = ss.type({
    type: ss.enums([
        EventType.ASSET_ARCHIVED,
        EventType.ASSET_CREATED,
        EventType.ASSET_DELETED,
        EventType.BUY,
        EventType.SELL,
        EventType.PRICE_UPDATE,
        EventType.UNKNOWN
    ]),
    user: ss.optional(ss.string()),
    payload: ss.optional(ss.any()),
    source: ss.enums([
        EventSource.AUTOMATIC,
        EventSource.MANUAL
    ])
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmluZGVmL2V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThDO0FBSTlDLG1DQUE4QztBQUM5QyxnREFBa0M7QUFFbEMsSUFBWSxTQVFYO0FBUkQsV0FBWSxTQUFTO0lBQ25CLGdDQUFtQixDQUFBO0lBQ25CLHdCQUFXLENBQUE7SUFDWCwwQkFBYSxDQUFBO0lBQ2IsMENBQTZCLENBQUE7SUFDN0IsNENBQStCLENBQUE7SUFDL0IsNENBQStCLENBQUE7SUFDL0IsOENBQWlDLENBQUE7QUFDbkMsQ0FBQyxFQVJXLFNBQVMseUJBQVQsU0FBUyxRQVFwQjtBQUVELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSFcsV0FBVywyQkFBWCxXQUFXLFFBR3RCO0FBU1ksUUFBQSwyQkFBMkIsR0FBdUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNyRixRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNyQixLQUFLLEVBQUUsbUJBQVc7SUFDbEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDekMsQ0FBQyxDQUFBO0FBUVcsUUFBQSw0QkFBNEIsR0FBd0MsRUFBRSxDQUFDLElBQUksQ0FBQztJQUN2RixRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNyQixLQUFLLEVBQUUsbUJBQVc7SUFDbEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDekMsQ0FBQyxDQUFBO0FBUVcsUUFBQSxtQ0FBbUMsR0FBK0MsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNyRyxRQUFRLEVBQUUsbUJBQVc7SUFDckIsUUFBUSxFQUFFLG1CQUFXO0lBQ3JCLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ3pDLENBQUMsQ0FBQTtBQU1XLFFBQUEsb0NBQW9DLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMxRCxLQUFLLEVBQUUsbUJBQVc7Q0FDbkIsQ0FBQyxDQUFBO0FBTVcsUUFBQSxxQ0FBcUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzNELEtBQUssRUFBRSxtQkFBVztDQUNuQixDQUFDLENBQUE7QUFNVyxRQUFBLG9DQUFvQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDMUQsS0FBSyxFQUFFLG1CQUFXO0NBQ25CLENBQUMsQ0FBQTtBQWlCVyxRQUFBLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdkMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDYixTQUFTLENBQUMsY0FBYztRQUN4QixTQUFTLENBQUMsYUFBYTtRQUN2QixTQUFTLENBQUMsYUFBYTtRQUN2QixTQUFTLENBQUMsR0FBRztRQUNiLFNBQVMsQ0FBQyxJQUFJO1FBQ2QsU0FBUyxDQUFDLFlBQVk7UUFDdEIsU0FBUyxDQUFDLE9BQU87S0FDbEIsQ0FBQztJQUNGLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QixPQUFPLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixXQUFXLENBQUMsU0FBUztRQUNyQixXQUFXLENBQUMsTUFBTTtLQUNuQixDQUFDO0NBQ0gsQ0FBQyxDQUFDIn0=