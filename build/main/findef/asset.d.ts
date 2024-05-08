import * as ss from 'superstruct';
import { IDBModel } from './dbModel';
import { ILedger } from './ledger';
import { DocumentId } from './documentId';
import { FindexNewsArticle } from './news';
import { TDocRef } from './docref';
import { InvestmentTransaction } from './investmentTransaction';
import { IntegrationProvider } from './integrationProvider';
import { IUser } from './user';
export declare enum EAssetType {
    UNDEFINED = "UNDEFINED",
    LISTED_EQUITY = "LISTED_EQUITY",
    UNLISTED_EQUITY = "UNLISTED_EQUITY",
    REAL_ESTATE = "REAL_ESTATE",
    ALTERNATIVE = "ALTERNATIVE"
}
export declare enum EAssetSource {
    IR = "IR",
    AUTOMATIC = "AUTOMATIC",
    MANUAL = "MANUAL"
}
export declare enum EAssetSubtype {
    CRYPTO = "CRYPTO",
    COMMODITY = "COMMODITY",
    WATCH = "WATCH",
    JEWELLRY = "JEWELLRY",
    GEMSTONE = "GEMSTONE",
    LAND = "LAND",
    CAR = "CAR",
    ART = "ART",
    FOREST_INVESTMENT = "FOREST_INVESTMENT",
    WINE = "WINE",
    SNEAKERS = "SNEAKERS",
    PRIVATE_DEBT = "PRIVATE_DEBT",
    PRIVATE_EQUITY = "PRIVATE_EQUITY",
    HEDGE_FUND = "HEDGE_FUND",
    COLLECTIBLE = "COLLECTIBLE",
    SAVINGS_ACCOUNT = "SAVINGS_ACCOUNT",
    CHECKING_ACCOUNT = "CHECKING_ACCOUNT",
    OTHER = "OTHER"
}
export interface IAsset extends IDBModel {
    name: string;
    organizationNumber?: string;
    contactEmail: string;
    ledger: ILedger;
    assetId?: string;
    externalId?: string;
    type?: EAssetType;
    subtype?: EAssetSubtype;
    source?: EAssetSource;
    provider?: IntegrationProvider;
    symbol?: string;
    parentId?: DocumentId;
    childrenIds?: DocumentId[];
    automatic?: boolean;
    articles?: TDocRef<FindexNewsArticle>[];
    lastNewsUpdate?: Date;
    transactions?: InvestmentTransaction[];
    logoBase64?: string;
    automaticLogoFailed?: boolean;
    realEstateInformation?: {
        type?: string;
        country?: string;
        city?: string;
        address?: string;
    };
    createdBy?: TDocRef<IUser>;
}
export declare const AssetSchema: ss.Struct<{
    name: string;
    contactEmail: string;
    ledger: ILedger;
    symbol?: string | undefined;
    type?: EAssetType | undefined;
    provider?: string | undefined;
    organizationNumber?: string | undefined;
    assetId?: any;
    externalId?: string | undefined;
    subtype?: EAssetSubtype | undefined;
    source?: EAssetSource | undefined;
    automatic?: boolean | undefined;
    articles?: any[] | undefined;
    lastNewsUpdate?: any;
    logoBase64?: string | undefined;
    automaticLogoFailed?: boolean | undefined;
    realEstateInformation?: {
        country?: string | undefined;
        type?: string | undefined;
        city?: string | undefined;
        address?: string | undefined;
    } | undefined;
    createdBy?: string | undefined;
    parent?: DocumentId | undefined;
    children?: DocumentId[] | undefined;
}, {
    name: ss.Struct<string, null>;
    organizationNumber: ss.Struct<string | undefined, null>;
    contactEmail: ss.Struct<string, null>;
    ledger: ss.Describe<ILedger>;
    assetId: ss.Struct<any, null>;
    externalId: ss.Struct<string | undefined, null>;
    type: ss.Struct<EAssetType | undefined, {
        UNDEFINED: EAssetType.UNDEFINED;
        LISTED_EQUITY: EAssetType.LISTED_EQUITY;
        UNLISTED_EQUITY: EAssetType.UNLISTED_EQUITY;
        REAL_ESTATE: EAssetType.REAL_ESTATE;
        ALTERNATIVE: EAssetType.ALTERNATIVE;
    }>;
    subtype: ss.Struct<EAssetSubtype | undefined, {
        CRYPTO: EAssetSubtype.CRYPTO;
        COMMODITY: EAssetSubtype.COMMODITY;
        WATCH: EAssetSubtype.WATCH;
        JEWELLRY: EAssetSubtype.JEWELLRY;
        GEMSTONE: EAssetSubtype.GEMSTONE;
        LAND: EAssetSubtype.LAND;
        CAR: EAssetSubtype.CAR;
        ART: EAssetSubtype.ART;
        FOREST_INVESTMENT: EAssetSubtype.FOREST_INVESTMENT;
        WINE: EAssetSubtype.WINE;
        SNEAKERS: EAssetSubtype.SNEAKERS;
        PRIVATE_DEBT: EAssetSubtype.PRIVATE_DEBT;
        PRIVATE_EQUITY: EAssetSubtype.PRIVATE_EQUITY;
        HEDGE_FUND: EAssetSubtype.HEDGE_FUND;
        COLLECTIBLE: EAssetSubtype.COLLECTIBLE;
        SAVINGS_ACCOUNT: EAssetSubtype.SAVINGS_ACCOUNT;
        CHECKING_ACCOUNT: EAssetSubtype.CHECKING_ACCOUNT;
        OTHER: EAssetSubtype.OTHER;
    }>;
    source: ss.Struct<EAssetSource | undefined, {
        IR: EAssetSource.IR;
        AUTOMATIC: EAssetSource.AUTOMATIC;
        MANUAL: EAssetSource.MANUAL;
    }>;
    provider: ss.Struct<string | undefined, null>;
    symbol: ss.Struct<string | undefined, null>;
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
    automatic: ss.Struct<boolean | undefined, null>;
    articles: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
    lastNewsUpdate: ss.Struct<any, null>;
    logoBase64: ss.Struct<string | undefined, null>;
    automaticLogoFailed: ss.Struct<boolean | undefined, null>;
    realEstateInformation: ss.Struct<{
        country?: string | undefined;
        type?: string | undefined;
        city?: string | undefined;
        address?: string | undefined;
    } | undefined, {
        type: ss.Struct<string | undefined, null>;
        country: ss.Struct<string | undefined, null>;
        city: ss.Struct<string | undefined, null>;
        address: ss.Struct<string | undefined, null>;
    }>;
    createdBy: ss.Struct<string | undefined, null>;
}>;
export type ICompany = IAsset;
export type AssetWithArticle = {
    asset: IAsset;
    article: FindexNewsArticle;
};
export type AssetNewsMap = Record<string, FindexNewsArticle[]>;
