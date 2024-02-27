import { AssetSchema } from "./asset";
import { ValueSchema } from './value';
import * as ss from 'superstruct';
export var EventType;
(function (EventType) {
    EventType["UNKNOWN"] = "UNKNOWN";
    EventType["BUY"] = "BUY";
    EventType["SELL"] = "SELL";
    EventType["PRICE_UPDATE"] = "PRICE_UPDATE";
    EventType["ASSET_CREATED"] = "ASSET_CREATED";
    EventType["ASSET_DELETED"] = "ASSET_DELETED";
    EventType["ASSET_ARCHIVED"] = "ASSET_ARCHIVED";
})(EventType || (EventType = {}));
export var EventSource;
(function (EventSource) {
    EventSource["MANUAL"] = "MANUAL";
    EventSource["AUTOMATIC"] = "AUTOMATIC";
})(EventSource || (EventSource = {}));
export const FindexEventBuyPayloadSchema = ss.type({
    quantity: ss.number(),
    price: ValueSchema,
    date: ss.union([ss.string(), ss.date()])
});
export const FindexEventSellPayloadSchema = ss.type({
    quantity: ss.number(),
    price: ValueSchema,
    date: ss.union([ss.string(), ss.date()])
});
export const FindexEventPriceUpdatePayloadSchema = ss.type({
    oldPrice: ValueSchema,
    newPrice: ValueSchema,
    date: ss.union([ss.string(), ss.date()])
});
export const FindexEventAssetCreatedPayloadSchema = ss.type({
    asset: AssetSchema
});
export const FindexEventAssetArchivedPayloadSchema = ss.type({
    asset: AssetSchema
});
export const FindexEventAssetDeletedPayloadSchema = ss.type({
    asset: AssetSchema
});
export const FindexEventSchema = ss.type({
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
