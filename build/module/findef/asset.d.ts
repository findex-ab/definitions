import * as ss from 'superstruct';
import { IDBModel } from './dbModel';
import { ILedger } from './ledger';
import { DocumentId } from './documentId';
import { FindexNewsArticle } from './news';
import { TDocRef } from './docref';
import { InvestmentTransaction } from './investmentTransaction';
import { IntegrationProvider } from './integrationProvider';
import { IUser } from './user';
import { IProviderImport } from './providerImport';
import { IAttachment } from './attachment';
import { IAssetAdmin } from './assetAdmin';
import { ISavedDocument } from './savedDocument';
import { ITicker } from './ticker';
import { ICryptoQuote } from './cryptoQuote';
import { IStock } from './stock';
import { ICommodityQuote } from './commodityQuote';
import { ICompanyProfile } from './companyProfile';
import { ILogoInformation } from './logoInformation';
import { IScoredImage } from './scoredImage';
import { IEmbeddingVector } from './embedding';
import { ICompanySector } from './companySector';
export declare enum EAssetType {
    UNDEFINED = "UNDEFINED",
    EQUITY = "EQUITY",
    REAL_ESTATE = "REAL_ESTATE",
    ALTERNATIVE = "ALTERNATIVE",
    CRYPTO = "CRYPTO",
    COMMODITY = "COMMODITY",
    CASH = "CASH",
    DEBT = "DEBT"
}
export declare enum EAssetSource {
    IR = "IR",
    AUTOMATIC = "AUTOMATIC",
    MANUAL = "MANUAL"
}
export declare enum EAssetMaintainer {
    IR = "IR",
    MANUAL = "MANUAL",
    TICKER = "TICKER",
    PROVIDER = "PROVIDER"
}
export declare enum EAssetAutomationLevel {
    MANUAL = "MANUAL",
    SEMI_AUTOMATIC = "SEMI_AUTOMATIC",
    AUTOMATIC = "AUTOMATIC"
}
export declare enum EAssetSubtype {
    STOCK = "STOCK",
    STOCK_OPTIONS = "STOCK_OPTIONS",
    FUND = "FUND",
    BOND = "BOND",
    ETF = "ETF",
    PENSION = "PENSION",
    LOAN = "LOAN",
    CERTIFICATE = "CERTIFICATE",
    APARTMENT = "APARTMENT",
    HOUSE = "HOUSE",
    BUILDING = "BUILDING",
    PARKING = "PARKING",
    COMMERCIAL = "COMMERCIAL",
    CRYPTO = "CRYPTO",
    NFT = "NFT",
    COMMODITY = "COMMODITY",
    WATCH = "WATCH",
    JEWELLRY = "JEWELLRY",
    GEMSTONE = "GEMSTONE",
    LAND = "LAND",
    CAR = "CAR",
    BOAT = "BOAT",
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
    INVESTMENT_ACCOUNT = "INVESTMENT_ACCOUNT",
    BANK_ACCOUNT = "BANK_ACCOUNT",
    NO_ACCOUNT = "NO_ACCOUNT",
    CASH = "CASH",
    OTHER = "OTHER",
    WEB_DOMAIN = "WEB_DOMAIN"
}
export declare enum EAssetIndustry {
    AGRICULTURE = "AGRICULTURE",
    AUTOMOTIVE = "AUTOMOTIVE",
    BANKING = "BANKING",
    BIOTECHNOLOGY = "BIOTECHNOLOGY",
    CONSTRUCTION = "CONSTRUCTION",
    CONSUMER_GOODS = "CONSUMER_GOODS",
    EDUCATION = "EDUCATION",
    ENERGY = "ENERGY",
    ENTERTAINMENT = "ENTERTAINMENT",
    FINANCIAL_SERVICES = "FINANCIAL_SERVICES",
    FINTECH = "FINTECH",
    FOOD_BEVERAGE = "FOOD_BEVERAGE",
    GOVERNMENT = "GOVERNMENT",
    HEALTHCARE = "HEALTHCARE",
    HOSPITALITY = "HOSPITALITY",
    INFORMATION_TECHNOLOGY = "INFORMATION_TECHNOLOGY",
    INSURANCE = "INSURANCE",
    MANUFACTURING = "MANUFACTURING",
    MEDIA = "MEDIA",
    MINING = "MINING",
    PHARMACEUTICAL = "PHARMACEUTICAL",
    PROPTECH = "PROPTECH",
    REAL_ESTATE = "REAL_ESTATE",
    RETAIL = "RETAIL",
    TELECOMMUNICATIONS = "TELECOMMUNICATIONS",
    TRANSPORTATION = "TRANSPORTATION",
    UTILITIES = "UTILITIES"
}
export interface IAsset extends IDBModel {
    name: string;
    providerImport?: TDocRef<IProviderImport>;
    organizationNumber?: string;
    uid?: string;
    zip?: string;
    contactEmail: string;
    ledger: ILedger;
    listed: boolean;
    assetId?: string;
    externalId?: string;
    type?: EAssetType;
    subtypes?: EAssetSubtype[];
    tags?: string[];
    searchTags?: string[];
    isBankAccount?: boolean;
    source?: EAssetSource;
    maintained?: EAssetMaintainer;
    automation?: EAssetAutomationLevel;
    provider?: IntegrationProvider;
    symbol?: string;
    parentId?: TDocRef<IAsset>;
    childrenIds?: DocumentId[];
    automatic?: boolean;
    articles?: TDocRef<FindexNewsArticle>[];
    lastNewsUpdate?: Date;
    transactions?: InvestmentTransaction[];
    image?: TDocRef<IAttachment>;
    imageSuggestion?: TDocRef<IScoredImage>;
    logos?: Array<TDocRef<ILogoInformation>>;
    directory?: TDocRef<IAttachment>;
    publicDirectory?: TDocRef<IAttachment>;
    shareholderDirectories?: Array<TDocRef<IAttachment>>;
    automaticLogoFailed?: boolean;
    realEstateInformation?: {
        type?: string;
        country?: string;
        city?: string;
        address?: string;
    };
    realEstateType?: string;
    country?: string;
    city?: string;
    address?: string;
    industry?: EAssetIndustry;
    websiteURL?: string;
    linkedInURL?: string;
    assetAdmins?: TDocRef<IAssetAdmin>[];
    createdBy?: TDocRef<IUser>;
    currency?: string;
    interest?: number;
    isMock?: boolean;
    isFromCSV?: boolean;
    ticker?: ITicker;
    cryptoQuote?: TDocRef<ICryptoQuote>;
    commodityQuote?: TDocRef<ICommodityQuote>;
    companyProfile?: TDocRef<ICompanyProfile>;
    stock?: TDocRef<IStock>;
    hasEmbedding?: boolean;
    embeddingPointIds?: number[];
    embeddings?: Array<TDocRef<IEmbeddingVector>>;
    vectorIds?: string[];
    description?: string;
    sectors?: ICompanySector[];
}
export declare const AssetSchema: ss.Struct<{
    name: string;
    contactEmail: string;
    ledger: ILedger;
    symbol?: string | undefined;
    externalId?: string | undefined;
    providerImport?: any;
    type?: string | undefined;
    image?: string | undefined;
    children?: DocumentId[] | undefined;
    uid?: string | undefined;
    source?: string | undefined;
    parent?: DocumentId | undefined;
    tags?: string[] | undefined;
    cryptoQuote?: DocumentId | undefined;
    organizationNumber?: string | undefined;
    listed?: boolean | undefined;
    assetId?: any;
    subtypes?: string[] | undefined;
    searchTags?: string[] | undefined;
    isBankAccount?: boolean | undefined;
    maintained?: string | undefined;
    provider?: string | undefined;
    automatic?: boolean | undefined;
    articles?: any[] | undefined;
    lastNewsUpdate?: any;
    automaticLogoFailed?: boolean | undefined;
    realEstateInformation?: {
        type?: string | undefined;
        country?: string | undefined;
        city?: string | undefined;
        address?: string | undefined;
    } | undefined;
    realEstateType?: string | undefined;
    country?: string | undefined;
    city?: string | undefined;
    address?: string | undefined;
    assetAdmins?: DocumentId[] | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    interest?: number | undefined;
    ticker?: DocumentId | undefined;
    description?: string | undefined;
}, {
    name: ss.Struct<string, null>;
    providerImport: ss.Struct<any, null>;
    organizationNumber: ss.Struct<string | undefined, null>;
    contactEmail: ss.Struct<string, null>;
    ledger: ss.Describe<ILedger>;
    listed: ss.Struct<boolean | undefined, null>;
    assetId: ss.Struct<any, null>;
    externalId: ss.Struct<string | undefined, null>;
    uid: ss.Struct<string | undefined, null>;
    type: ss.Struct<string | undefined, {
        [x: string]: string;
    }>;
    subtypes: ss.Struct<string[] | undefined, ss.Struct<string, {
        [x: string]: string;
    }>>;
    tags: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
    searchTags: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
    isBankAccount: ss.Struct<boolean | undefined, null>;
    source: ss.Struct<string | undefined, {
        [x: string]: string;
    }>;
    maintained: ss.Struct<string | undefined, {
        [x: string]: string;
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
    image: ss.Struct<string | undefined, null>;
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
    realEstateType: ss.Struct<string | undefined, null>;
    country: ss.Struct<string | undefined, null>;
    city: ss.Struct<string | undefined, null>;
    address: ss.Struct<string | undefined, null>;
    assetAdmins: ss.Struct<DocumentId[] | undefined, ss.Describe<DocumentId>>;
    currency: ss.Struct<string | undefined, null>;
    interest: ss.Struct<number | undefined, null>;
    createdBy: ss.Struct<string | undefined, null>;
    description: ss.Struct<string | undefined, null>;
    ticker: ss.Struct<DocumentId | undefined, {
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
    cryptoQuote: ss.Struct<DocumentId | undefined, {
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
}>;
export type FullAsset = Omit<IAsset, 'commodityQuote' | 'cryptoQuote' | 'companyProfile'> & {
    commodityQuote?: ICommodityQuote | ISavedDocument<ICommodityQuote, string>;
    cryptoQuote?: ICryptoQuote | ISavedDocument<ICryptoQuote, string>;
    companyProfile?: ICompanyProfile | ISavedDocument<ICompanyProfile, string>;
};
export type AssetWithArticle = {
    asset: IAsset;
    article: FindexNewsArticle;
};
export type AssetNewsMap = Record<string, FindexNewsArticle[]>;
export declare const emptyAsset: IAsset;
export type PotentialAsset = Omit<ISavedDocument<IAsset>, '_id' | 'externalId'> & {
    externalId: string;
};
export declare const assetTypeCanBeListedAndUnlisted: (assetType: EAssetType) => boolean;
export declare const assetHasAutomaticTicker: (asset: IAsset) => boolean;
export declare const getAssetMaintainedType: (asset: Partial<IAsset>) => EAssetMaintainer;
export declare const getAssetMaintainedText: (asset: IAsset) => string;
export declare const getAssetCurrency: (asset: Partial<IAsset>) => string;
export declare const evaluateAssetAutomationLevel: (asset: FullAsset) => EAssetAutomationLevel;
