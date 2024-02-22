import { AssetSchema, IAsset } from "./asset";
import { IDBModel } from "./dbModel";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { IValue, ValueSchema } from './value';
import * as ss from 'superstruct';

export enum EventType {
  UNKNOWN = 'UNKNOWN',
  BUY = 'BUY',
  SELL = 'SELL',
  PRICE_UPDATE = 'PRICE_UPDATE',
  ASSET_CREATED = 'ASSET_CREATED',
  ASSET_DELETED = 'ASSET_DELETED',
  ASSET_ARCHIVED = 'ASSET_ARCHIVED',
}

export enum EventSource {
  MANUAL = "MANUAL",
  AUTOMATIC = "AUTOMATIC"
}


export type FindexEventBuyPayload = {
  quantity: number,
  price:  IValue,
  date: Date | string 
}

export const FindexEventBuyPayloadSchema: ss.Describe<FindexEventBuyPayload> = ss.type({
  quantity: ss.number(),
  price: ValueSchema,
  date: ss.union([ss.string(), ss.date()])
})

export type FindexEventSellPayload = {
  quantity: number,
  price:  IValue,
  date: Date | string 
}

export const FindexEventSellPayloadSchema: ss.Describe<FindexEventSellPayload> = ss.type({
  quantity: ss.number(),
  price: ValueSchema,
  date: ss.union([ss.string(), ss.date()])
})

export type FindexEventPriceUpdatePayload = {
  oldPrice:  IValue,
  newPrice:  IValue,
  date: Date | string 
}

export const FindexEventPriceUpdatePayloadSchema: ss.Describe<FindexEventPriceUpdatePayload> = ss.type({
  oldPrice: ValueSchema,
  newPrice: ValueSchema,
  date: ss.union([ss.string(), ss.date()])
})

export type FindexEventAssetCreatedPayload = {
  asset: Partial<IAsset>;
}

export const FindexEventAssetCreatedPayloadSchema = ss.type({
  asset: AssetSchema
})

export type FindexEventAssetArchivedPayload = {
  asset: Partial<IAsset>;
}

export const FindexEventAssetArchivedPayloadSchema = ss.type({
  asset: AssetSchema
})

export type FindexEventAssetDeletedPayload = {
  asset: Partial<IAsset>;
}

export const FindexEventAssetDeletedPayloadSchema = ss.type({
  asset: AssetSchema
})

export type FindexEvent<T extends typeof EventType[keyof typeof EventType] = EventType.BUY> = IDBModel & {
  type: T;
  user?: TDocRef<IUser>;
  source: EventSource;
  payload?:
        T extends EventType.BUY ? FindexEventBuyPayload :
        T extends EventType.SELL ? FindexEventSellPayload :
        T extends EventType.PRICE_UPDATE ? FindexEventPriceUpdatePayload :
        T extends EventType.ASSET_CREATED ? FindexEventAssetCreatedPayload :
        T extends EventType.ASSET_ARCHIVED ? FindexEventAssetArchivedPayload :
        T extends EventType.ASSET_DELETED ? FindexEventAssetDeletedPayload :
        T extends EventType.UNKNOWN ? any : any;

};

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
