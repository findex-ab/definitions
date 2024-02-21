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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwZXMvZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEM7QUFJOUMsbUNBQThDO0FBQzlDLGdEQUFrQztBQUVsQyxJQUFZLFNBUVg7QUFSRCxXQUFZLFNBQVM7SUFDbkIsZ0NBQW1CLENBQUE7SUFDbkIsd0JBQVcsQ0FBQTtJQUNYLDBCQUFhLENBQUE7SUFDYiwwQ0FBNkIsQ0FBQTtJQUM3Qiw0Q0FBK0IsQ0FBQTtJQUMvQiw0Q0FBK0IsQ0FBQTtJQUMvQiw4Q0FBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBUlcsU0FBUyx5QkFBVCxTQUFTLFFBUXBCO0FBRUQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLGdDQUFpQixDQUFBO0lBQ2pCLHNDQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFIVyxXQUFXLDJCQUFYLFdBQVcsUUFHdEI7QUFTWSxRQUFBLDJCQUEyQixHQUF1QyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3JGLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3JCLEtBQUssRUFBRSxtQkFBVztJQUNsQixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUN6QyxDQUFDLENBQUE7QUFRVyxRQUFBLDRCQUE0QixHQUF3QyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3ZGLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3JCLEtBQUssRUFBRSxtQkFBVztJQUNsQixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUN6QyxDQUFDLENBQUE7QUFRVyxRQUFBLG1DQUFtQyxHQUErQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3JHLFFBQVEsRUFBRSxtQkFBVztJQUNyQixRQUFRLEVBQUUsbUJBQVc7SUFDckIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDekMsQ0FBQyxDQUFBO0FBTVcsUUFBQSxvQ0FBb0MsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzFELEtBQUssRUFBRSxtQkFBVztDQUNuQixDQUFDLENBQUE7QUFNVyxRQUFBLHFDQUFxQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDM0QsS0FBSyxFQUFFLG1CQUFXO0NBQ25CLENBQUMsQ0FBQTtBQU1XLFFBQUEsb0NBQW9DLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMxRCxLQUFLLEVBQUUsbUJBQVc7Q0FDbkIsQ0FBQyxDQUFBO0FBaUJXLFFBQUEsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUN2QyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNiLFNBQVMsQ0FBQyxjQUFjO1FBQ3hCLFNBQVMsQ0FBQyxhQUFhO1FBQ3ZCLFNBQVMsQ0FBQyxhQUFhO1FBQ3ZCLFNBQVMsQ0FBQyxHQUFHO1FBQ2IsU0FBUyxDQUFDLElBQUk7UUFDZCxTQUFTLENBQUMsWUFBWTtRQUN0QixTQUFTLENBQUMsT0FBTztLQUNsQixDQUFDO0lBQ0YsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLE9BQU8sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLFdBQVcsQ0FBQyxTQUFTO1FBQ3JCLFdBQVcsQ0FBQyxNQUFNO0tBQ25CLENBQUM7Q0FDSCxDQUFDLENBQUMifQ==