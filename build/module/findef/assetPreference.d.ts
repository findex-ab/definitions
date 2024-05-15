import { IAsset } from "./asset";
import { IDBModel } from "./dbModel";
import { TDocRef } from "./docref";
import { DocumentId } from "./documentId";
import * as ss from 'superstruct';
export interface IAssetExtendedAttributes {
    automaticLogo?: boolean;
}
export interface IAssetPreference extends IDBModel {
    userId: DocumentId;
    real: TDocRef<IAsset>;
    modified: Partial<IAsset & IAssetExtendedAttributes>;
}
export declare const AssetPreferencesSchema: ss.Struct<{
    userId?: string | undefined;
    modified?: {
        symbol?: string | undefined;
        listed?: boolean | undefined;
        name?: string | undefined;
        logoBase64?: string | undefined;
        provider?: string | undefined;
        externalId?: string | undefined;
        type?: import("./asset").EAssetType | undefined;
        automatic?: boolean | undefined;
        organizationNumber?: string | undefined;
        contactEmail?: string | undefined;
        ledger?: import("./ledger").ILedger | undefined;
        assetId?: any;
        subtypes?: (import("./asset").EAssetSubtype.STOCK | import("./asset").EAssetSubtype.FUND | import("./asset").EAssetSubtype.BOND | import("./asset").EAssetSubtype.PENSION | import("./asset").EAssetSubtype.APARTMENT | import("./asset").EAssetSubtype.HOUSE | import("./asset").EAssetSubtype.BUILDING | import("./asset").EAssetSubtype.PARKING | import("./asset").EAssetSubtype.COMMERCIAL | import("./asset").EAssetSubtype.CRYPTO | import("./asset").EAssetSubtype.COMMODITY | import("./asset").EAssetSubtype.WATCH | import("./asset").EAssetSubtype.JEWELLRY | import("./asset").EAssetSubtype.GEMSTONE | import("./asset").EAssetSubtype.LAND | import("./asset").EAssetSubtype.CAR | import("./asset").EAssetSubtype.ART | import("./asset").EAssetSubtype.FOREST_INVESTMENT | import("./asset").EAssetSubtype.WINE | import("./asset").EAssetSubtype.SNEAKERS | import("./asset").EAssetSubtype.PRIVATE_DEBT | import("./asset").EAssetSubtype.PRIVATE_EQUITY | import("./asset").EAssetSubtype.HEDGE_FUND | import("./asset").EAssetSubtype.COLLECTIBLE | import("./asset").EAssetSubtype.SAVINGS_ACCOUNT | import("./asset").EAssetSubtype.CHECKING_ACCOUNT | import("./asset").EAssetSubtype.OTHER)[] | undefined;
        source?: import("./asset").EAssetSource | undefined;
        articles?: any[] | undefined;
        lastNewsUpdate?: any;
        automaticLogoFailed?: boolean | undefined;
        realEstateInformation?: {
            type?: string | undefined;
            country?: string | undefined;
            city?: string | undefined;
            address?: string | undefined;
        } | undefined;
        createdBy?: string | undefined;
        parent?: DocumentId | undefined;
        children?: DocumentId[] | undefined;
        automaticLogo?: boolean | undefined;
    } | undefined;
}, {
    userId: ss.Struct<string | undefined, null>;
    modified: ss.Struct<{
        symbol?: string | undefined;
        listed?: boolean | undefined;
        name?: string | undefined;
        logoBase64?: string | undefined;
        provider?: string | undefined;
        externalId?: string | undefined;
        type?: import("./asset").EAssetType | undefined;
        automatic?: boolean | undefined;
        organizationNumber?: string | undefined;
        contactEmail?: string | undefined;
        ledger?: import("./ledger").ILedger | undefined;
        assetId?: any;
        subtypes?: (import("./asset").EAssetSubtype.STOCK | import("./asset").EAssetSubtype.FUND | import("./asset").EAssetSubtype.BOND | import("./asset").EAssetSubtype.PENSION | import("./asset").EAssetSubtype.APARTMENT | import("./asset").EAssetSubtype.HOUSE | import("./asset").EAssetSubtype.BUILDING | import("./asset").EAssetSubtype.PARKING | import("./asset").EAssetSubtype.COMMERCIAL | import("./asset").EAssetSubtype.CRYPTO | import("./asset").EAssetSubtype.COMMODITY | import("./asset").EAssetSubtype.WATCH | import("./asset").EAssetSubtype.JEWELLRY | import("./asset").EAssetSubtype.GEMSTONE | import("./asset").EAssetSubtype.LAND | import("./asset").EAssetSubtype.CAR | import("./asset").EAssetSubtype.ART | import("./asset").EAssetSubtype.FOREST_INVESTMENT | import("./asset").EAssetSubtype.WINE | import("./asset").EAssetSubtype.SNEAKERS | import("./asset").EAssetSubtype.PRIVATE_DEBT | import("./asset").EAssetSubtype.PRIVATE_EQUITY | import("./asset").EAssetSubtype.HEDGE_FUND | import("./asset").EAssetSubtype.COLLECTIBLE | import("./asset").EAssetSubtype.SAVINGS_ACCOUNT | import("./asset").EAssetSubtype.CHECKING_ACCOUNT | import("./asset").EAssetSubtype.OTHER)[] | undefined;
        source?: import("./asset").EAssetSource | undefined;
        articles?: any[] | undefined;
        lastNewsUpdate?: any;
        automaticLogoFailed?: boolean | undefined;
        realEstateInformation?: {
            type?: string | undefined;
            country?: string | undefined;
            city?: string | undefined;
            address?: string | undefined;
        } | undefined;
        createdBy?: string | undefined;
        parent?: DocumentId | undefined;
        children?: DocumentId[] | undefined;
        automaticLogo?: boolean | undefined;
    } | undefined, import("superstruct/dist/utils").PartialObjectSchema<{
        automaticLogo: ss.Struct<boolean | undefined, null>;
        symbol: ss.Struct<string | undefined, null>;
        listed: ss.Struct<boolean | undefined, null>;
        name: ss.Struct<string, null>;
        logoBase64: ss.Struct<string | undefined, null>;
        provider: ss.Struct<string | undefined, null>;
        externalId: ss.Struct<string | undefined, null>;
        type: ss.Struct<import("./asset").EAssetType | undefined, {
            UNDEFINED: import("./asset").EAssetType.UNDEFINED;
            EQUITY: import("./asset").EAssetType.EQUITY;
            REAL_ESTATE: import("./asset").EAssetType.REAL_ESTATE;
            ALTERNATIVE: import("./asset").EAssetType.ALTERNATIVE;
        }>;
        automatic: ss.Struct<boolean | undefined, null>;
        organizationNumber: ss.Struct<string | undefined, null>;
        contactEmail: ss.Struct<string, null>;
        ledger: ss.Describe<import("./ledger").ILedger>;
        assetId: ss.Struct<any, null>;
        subtypes: ss.Struct<(import("./asset").EAssetSubtype.STOCK | import("./asset").EAssetSubtype.FUND | import("./asset").EAssetSubtype.BOND | import("./asset").EAssetSubtype.PENSION | import("./asset").EAssetSubtype.APARTMENT | import("./asset").EAssetSubtype.HOUSE | import("./asset").EAssetSubtype.BUILDING | import("./asset").EAssetSubtype.PARKING | import("./asset").EAssetSubtype.COMMERCIAL | import("./asset").EAssetSubtype.CRYPTO | import("./asset").EAssetSubtype.COMMODITY | import("./asset").EAssetSubtype.WATCH | import("./asset").EAssetSubtype.JEWELLRY | import("./asset").EAssetSubtype.GEMSTONE | import("./asset").EAssetSubtype.LAND | import("./asset").EAssetSubtype.CAR | import("./asset").EAssetSubtype.ART | import("./asset").EAssetSubtype.FOREST_INVESTMENT | import("./asset").EAssetSubtype.WINE | import("./asset").EAssetSubtype.SNEAKERS | import("./asset").EAssetSubtype.PRIVATE_DEBT | import("./asset").EAssetSubtype.PRIVATE_EQUITY | import("./asset").EAssetSubtype.HEDGE_FUND | import("./asset").EAssetSubtype.COLLECTIBLE | import("./asset").EAssetSubtype.SAVINGS_ACCOUNT | import("./asset").EAssetSubtype.CHECKING_ACCOUNT | import("./asset").EAssetSubtype.OTHER)[] | undefined, ss.Struct<import("./asset").EAssetSubtype.STOCK | import("./asset").EAssetSubtype.FUND | import("./asset").EAssetSubtype.BOND | import("./asset").EAssetSubtype.PENSION | import("./asset").EAssetSubtype.APARTMENT | import("./asset").EAssetSubtype.HOUSE | import("./asset").EAssetSubtype.BUILDING | import("./asset").EAssetSubtype.PARKING | import("./asset").EAssetSubtype.COMMERCIAL | import("./asset").EAssetSubtype.CRYPTO | import("./asset").EAssetSubtype.COMMODITY | import("./asset").EAssetSubtype.WATCH | import("./asset").EAssetSubtype.JEWELLRY | import("./asset").EAssetSubtype.GEMSTONE | import("./asset").EAssetSubtype.LAND | import("./asset").EAssetSubtype.CAR | import("./asset").EAssetSubtype.ART | import("./asset").EAssetSubtype.FOREST_INVESTMENT | import("./asset").EAssetSubtype.WINE | import("./asset").EAssetSubtype.SNEAKERS | import("./asset").EAssetSubtype.PRIVATE_DEBT | import("./asset").EAssetSubtype.PRIVATE_EQUITY | import("./asset").EAssetSubtype.HEDGE_FUND | import("./asset").EAssetSubtype.COLLECTIBLE | import("./asset").EAssetSubtype.SAVINGS_ACCOUNT | import("./asset").EAssetSubtype.CHECKING_ACCOUNT | import("./asset").EAssetSubtype.OTHER, {
            STOCK: import("./asset").EAssetSubtype.STOCK;
            FUND: import("./asset").EAssetSubtype.FUND;
            BOND: import("./asset").EAssetSubtype.BOND;
            PENSION: import("./asset").EAssetSubtype.PENSION;
            APARTMENT: import("./asset").EAssetSubtype.APARTMENT;
            HOUSE: import("./asset").EAssetSubtype.HOUSE;
            BUILDING: import("./asset").EAssetSubtype.BUILDING;
            PARKING: import("./asset").EAssetSubtype.PARKING;
            COMMERCIAL: import("./asset").EAssetSubtype.COMMERCIAL;
            CRYPTO: import("./asset").EAssetSubtype.CRYPTO;
            COMMODITY: import("./asset").EAssetSubtype.COMMODITY;
            WATCH: import("./asset").EAssetSubtype.WATCH;
            JEWELLRY: import("./asset").EAssetSubtype.JEWELLRY;
            GEMSTONE: import("./asset").EAssetSubtype.GEMSTONE;
            LAND: import("./asset").EAssetSubtype.LAND;
            CAR: import("./asset").EAssetSubtype.CAR;
            ART: import("./asset").EAssetSubtype.ART;
            FOREST_INVESTMENT: import("./asset").EAssetSubtype.FOREST_INVESTMENT;
            WINE: import("./asset").EAssetSubtype.WINE;
            SNEAKERS: import("./asset").EAssetSubtype.SNEAKERS;
            PRIVATE_DEBT: import("./asset").EAssetSubtype.PRIVATE_DEBT;
            PRIVATE_EQUITY: import("./asset").EAssetSubtype.PRIVATE_EQUITY;
            HEDGE_FUND: import("./asset").EAssetSubtype.HEDGE_FUND;
            COLLECTIBLE: import("./asset").EAssetSubtype.COLLECTIBLE;
            SAVINGS_ACCOUNT: import("./asset").EAssetSubtype.SAVINGS_ACCOUNT;
            CHECKING_ACCOUNT: import("./asset").EAssetSubtype.CHECKING_ACCOUNT;
            OTHER: import("./asset").EAssetSubtype.OTHER;
        }>>;
        source: ss.Struct<import("./asset").EAssetSource | undefined, {
            IR: import("./asset").EAssetSource.IR;
            AUTOMATIC: import("./asset").EAssetSource.AUTOMATIC;
            MANUAL: import("./asset").EAssetSource.MANUAL;
        }>;
        articles: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
        lastNewsUpdate: ss.Struct<any, null>;
        automaticLogoFailed: ss.Struct<boolean | undefined, null>;
        realEstateInformation: ss.Struct<{
            type?: string | undefined;
            country?: string | undefined;
            city?: string | undefined;
            address?: string | undefined;
        } | undefined, {
            type: ss.Struct<string | undefined, null>;
            country: ss.Struct<string | undefined, null>;
            city: ss.Struct<string | undefined, null>;
            address: ss.Struct<string | undefined, null>;
        }>;
        createdBy: ss.Struct<string | undefined, null>;
        parent: ss.Struct<DocumentId | undefined, {
            readonly _bsontype: ss.Describe<"ObjectId">;
            id: ss.Describe<Uint8Array>;
            toHexString: ss.Describe<() => string>;
            toString: ss.Describe<(encoding?: "hex" | "base64" | undefined) => string>;
            toJSON: ss.Describe<() => string>;
            equals: ss.Describe<(otherId: string | import("bson").ObjectId | import("bson").ObjectIdLike | null | undefined) => boolean>;
            getTimestamp: ss.Describe<() => Date>;
            inspect: ss.Describe<(depth?: number | undefined, options?: unknown, inspect?: ((x: unknown, options?: unknown) => string) | undefined) => string>;
        } | {
            id: ss.Describe<string | Uint8Array>;
            __id?: ss.Describe<string | undefined> | undefined;
            toHexString: ss.Describe<() => string>;
        } | {
            [x: number]: ss.Describe<number>;
            readonly BYTES_PER_ELEMENT: ss.Describe<number>;
            readonly buffer: ss.Describe<ArrayBufferLike>;
            readonly byteLength: ss.Describe<number>;
            readonly byteOffset: ss.Describe<number>;
            copyWithin: ss.Describe<(target: number, start: number, end?: number | undefined) => Uint8Array>;
            every: ss.Describe<(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => boolean>;
            fill: ss.Describe<(value: number, start?: number | undefined, end?: number | undefined) => Uint8Array>;
            filter: ss.Describe<(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any) => Uint8Array>;
            find: ss.Describe<(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any) => number | undefined>;
            findIndex: ss.Describe<(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any) => number>;
            forEach: ss.Describe<(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any) => void>;
            indexOf: ss.Describe<(searchElement: number, fromIndex?: number | undefined) => number>;
            join: ss.Describe<(separator?: string | undefined) => string>;
            lastIndexOf: ss.Describe<(searchElement: number, fromIndex?: number | undefined) => number>;
            readonly length: ss.Describe<number>;
            map: ss.Describe<(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any) => Uint8Array>;
            reduce: ss.Describe<{
                (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
                (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
                <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;
            }>;
            reduceRight: ss.Describe<{
                (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
                (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
                <U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: Uint8Array) => U_1, initialValue: U_1): U_1;
            }>;
            reverse: ss.Describe<() => Uint8Array>;
            set: ss.Describe<(array: ArrayLike<number>, offset?: number | undefined) => void>;
            slice: ss.Describe<(start?: number | undefined, end?: number | undefined) => Uint8Array>;
            some: ss.Describe<(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => boolean>;
            sort: ss.Describe<(compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array>;
            subarray: ss.Describe<(begin?: number | undefined, end?: number | undefined) => Uint8Array>;
            toLocaleString: ss.Describe<() => string>;
            toString: ss.Describe<() => string>;
            valueOf: ss.Describe<() => Uint8Array>;
            entries: ss.Describe<() => IterableIterator<[number, number]>>;
            keys: ss.Describe<() => IterableIterator<number>>;
            values: ss.Describe<() => IterableIterator<number>>;
            includes: ss.Describe<(searchElement: number, fromIndex?: number | undefined) => boolean>;
            [Symbol.iterator]: ss.Describe<() => IterableIterator<number>>;
            readonly [Symbol.toStringTag]: ss.Describe<"Uint8Array">;
            at: ss.Describe<(index: number) => number | undefined>;
        } | {
            _id: ss.Describe<DocumentId>;
        } | null>;
        children: ss.Struct<DocumentId[] | undefined, ss.Describe<DocumentId>>;
    }>>;
}>;
