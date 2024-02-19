"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindexEventSchema = exports.FindexEventAssetDeletedPayloadSchema = exports.FindexEventAssetArchivedPayloadSchema = exports.FindexEventAssetCreatedPayloadSchema = exports.FindexEventPriceUpdatePayloadSchema = exports.FindexEventSellPayloadSchema = exports.FindexEventBuyPayloadSchema = exports.EventSource = exports.EventType = void 0;
const asset_1 = require("./asset");
const value_1 = require("./value");
const ss = require("superstruct");
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
//# sourceMappingURL=event.js.map