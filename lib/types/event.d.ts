import { IAsset } from "./asset";
import { IDBModel } from "./dbModel";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { IValue } from './value';
import * as ss from 'superstruct';
export declare enum EventType {
    UNKNOWN = "UNKNOWN",
    BUY = "BUY",
    SELL = "SELL",
    PRICE_UPDATE = "PRICE_UPDATE",
    ASSET_CREATED = "ASSET_CREATED",
    ASSET_DELETED = "ASSET_DELETED",
    ASSET_ARCHIVED = "ASSET_ARCHIVED"
}
export declare enum EventSource {
    MANUAL = "MANUAL",
    AUTOMATIC = "AUTOMATIC"
}
export type FindexEventBuyPayload = {
    quantity: number;
    price: IValue;
    date: Date | string;
};
export declare const FindexEventBuyPayloadSchema: ss.Describe<FindexEventBuyPayload>;
export type FindexEventSellPayload = {
    quantity: number;
    price: IValue;
    date: Date | string;
};
export declare const FindexEventSellPayloadSchema: ss.Describe<FindexEventSellPayload>;
export type FindexEventPriceUpdatePayload = {
    oldPrice: IValue;
    newPrice: IValue;
    date: Date | string;
};
export declare const FindexEventPriceUpdatePayloadSchema: ss.Describe<FindexEventPriceUpdatePayload>;
export type FindexEventAssetCreatedPayload = {
    asset: Partial<IAsset>;
};
export declare const FindexEventAssetCreatedPayloadSchema: ss.Describe<FindexEventAssetCreatedPayload>;
export type FindexEventAssetArchivedPayload = {
    asset: Partial<IAsset>;
};
export declare const FindexEventAssetArchivedPayloadSchema: ss.Describe<FindexEventAssetArchivedPayload>;
export type FindexEventAssetDeletedPayload = {
    asset: Partial<IAsset>;
};
export declare const FindexEventAssetDeletedPayloadSchema: ss.Describe<FindexEventAssetDeletedPayload>;
export type FindexEvent<T extends typeof EventType[keyof typeof EventType] = EventType.BUY> = IDBModel & {
    type: T;
    user?: TDocRef<IUser>;
    source: EventSource;
    payload?: T extends EventType.BUY ? FindexEventBuyPayload : T extends EventType.SELL ? FindexEventSellPayload : T extends EventType.PRICE_UPDATE ? FindexEventPriceUpdatePayload : T extends EventType.ASSET_CREATED ? FindexEventAssetCreatedPayload : T extends EventType.ASSET_ARCHIVED ? FindexEventAssetArchivedPayload : T extends EventType.ASSET_DELETED ? FindexEventAssetDeletedPayload : T extends EventType.UNKNOWN ? any : any;
};
export declare const FindexEventSchema: ss.Struct<{
    type: EventType;
    source: EventSource;
    user: string;
    payload?: any;
}, {
    type: ss.Struct<EventType, {
        UNKNOWN: EventType.UNKNOWN;
        BUY: EventType.BUY;
        SELL: EventType.SELL;
        PRICE_UPDATE: EventType.PRICE_UPDATE;
        ASSET_CREATED: EventType.ASSET_CREATED;
        ASSET_DELETED: EventType.ASSET_DELETED;
        ASSET_ARCHIVED: EventType.ASSET_ARCHIVED;
    }>;
    user: ss.Struct<string, null>;
    payload: ss.Struct<any, null>;
    source: ss.Struct<EventSource, {
        MANUAL: EventSource.MANUAL;
        AUTOMATIC: EventSource.AUTOMATIC;
    }>;
}>;
