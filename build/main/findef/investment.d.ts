import { TDocRef } from './docref';
import { IValue } from './value';
import * as ss from 'superstruct';
import { EAssetAutomationLevel, FullAsset, IAsset, PotentialAsset } from './asset';
import { ISavedDocument } from './savedDocument';
import { EProviderSessionStatus } from './integrationProvider';
import { ICoInvestor } from './coInvestor';
import { IProviderImport } from './providerImport';
import { IUser } from './user';
import { IAttachment } from './attachment';
import { ICompanyProfile } from './companyProfile';
export declare const DateField: ss.Struct<Date, null>;
export declare enum EShareholderType {
    ANGEL_INVESTOR = "ANGEL_INVESTOR",
    EMPLOYEE = "EMPLOYEE",
    FOUNDER = "FOUNDER",
    INVESTMENT_COMPANY = "INVESTMENT_COMPANY",
    RETAIL_INVESTOR = "RETAIL_INVESTOR",
    VC = "VC",
    OTHER = "OTHER"
}
export type IInvestmentProvider = {
    status?: EProviderSessionStatus;
    name?: string;
    displayName?: string;
    externalId: number;
};
export interface IInvestment {
    asset: TDocRef<IAsset>;
    user?: TDocRef<IUser>;
    directory?: TDocRef<IInvestment>;
    automation?: EAssetAutomationLevel;
    externalAccountId?: string;
    externalId?: string;
    externalOrderBookId?: string;
    providerImport?: TDocRef<IProviderImport>;
    symbol?: string;
    image?: TDocRef<IAttachment>;
    userDoesNotWantImage?: boolean;
    provider?: IInvestmentProvider;
    invested: IValue;
    returnValue?: IValue;
    currentValue?: IValue;
    price?: IValue;
    quantity: number;
    automatic?: boolean;
    time?: Date;
    ROI?: IValue;
    acquiredPrice?: IValue;
    lastPrice?: IValue;
    morningPriceTC?: IValue;
    marketValueTC?: IValue;
    marketValueAC?: IValue;
    pctReturn?: number;
    pctToday?: number;
    currency?: string;
    shareholderType?: EShareholderType;
    ownedBy?: {
        name?: string;
        organizationNbr?: string;
        companyProfile?: TDocRef<ICompanyProfile>;
    };
    coInvestors?: ICoInvestor[];
    isMock?: boolean;
    parentId?: TDocRef<IInvestment>;
    childrenIds?: TDocRef<IInvestment>[];
}
export declare const InvestmentSchema: ss.Struct<{
    quantity: number;
    asset: string;
    invested: IValue;
    symbol?: string | undefined;
    providerImport?: any;
    externalId?: string | undefined;
    automation?: EAssetAutomationLevel | undefined;
    provider?: {
        name?: string | undefined;
        externalId?: number | undefined;
        status?: EProviderSessionStatus | undefined;
        displayName?: string | undefined;
    } | undefined;
    parentId?: import("./documentId").DocumentId | undefined;
    childrenIds?: import("./documentId").DocumentId[] | undefined;
    automatic?: boolean | undefined;
    image?: string | undefined;
    currency?: string | undefined;
    price?: IValue | undefined;
    time?: any;
    externalAccountId?: string | undefined;
    externalOrderBookId?: string | undefined;
    userDoesNotWantImage?: boolean | undefined;
    returnValue?: IValue | undefined;
    currentValue?: IValue | undefined;
    ROI?: IValue | undefined;
    acquiredPrice?: IValue | undefined;
    lastPrice?: IValue | undefined;
    morningPriceTC?: IValue | undefined;
    marketValueTC?: IValue | undefined;
    marketValueAC?: IValue | undefined;
    pctReturn?: number | undefined;
    pctToday?: number | undefined;
    shareholderType?: EShareholderType | undefined;
    ownedBy?: {
        name?: string | undefined;
        companyProfile?: TDocRef<{
            [key: string]: any;
        }, import("./documentId").DocumentId> | undefined;
        organizationNbr?: string | undefined;
    } | undefined;
    coInvestors?: {
        fraction: number;
        role: string;
        user?: any;
        investment?: any;
        userData?: {
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined;
    }[] | undefined;
}, {
    asset: ss.Struct<string, null>;
    providerImport: ss.Struct<any, null>;
    externalAccountId: ss.Struct<string | undefined, null>;
    externalId: ss.Struct<string | undefined, null>;
    symbol: ss.Struct<string | undefined, null>;
    externalOrderBookId: ss.Struct<string | undefined, null>;
    image: ss.Struct<string | undefined, null>;
    userDoesNotWantImage: ss.Struct<boolean | undefined, null>;
    currency: ss.Struct<string | undefined, null>;
    automation: ss.Struct<EAssetAutomationLevel | undefined, {
        MANUAL: EAssetAutomationLevel.MANUAL;
        SEMI_AUTOMATIC: EAssetAutomationLevel.SEMI_AUTOMATIC;
        AUTOMATIC: EAssetAutomationLevel.AUTOMATIC;
    }>;
    provider: ss.Struct<{
        name?: string | undefined;
        externalId?: number | undefined;
        status?: EProviderSessionStatus | undefined;
        displayName?: string | undefined;
    } | undefined, {
        status: ss.Struct<EProviderSessionStatus | undefined, {
            CONNECTED: EProviderSessionStatus.CONNECTED;
            DISCONNECTED: EProviderSessionStatus.DISCONNECTED;
        }>;
        name: ss.Struct<string | undefined, null>;
        displayName: ss.Struct<string | undefined, null>;
        externalId: ss.Struct<number | undefined, null>;
    }>;
    invested: ss.Describe<IValue>;
    returnValue: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    currentValue: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    price: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    quantity: ss.Struct<number, null>;
    automatic: ss.Struct<boolean | undefined, null>;
    time: ss.Struct<any, null>;
    ROI: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    acquiredPrice: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    lastPrice: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    morningPriceTC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    marketValueTC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    marketValueAC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
        __isValue?: ss.Describe<boolean | undefined> | undefined;
    }>;
    pctReturn: ss.Struct<number | undefined, null>;
    pctToday: ss.Struct<number | undefined, null>;
    shareholderType: ss.Struct<EShareholderType | undefined, {
        ANGEL_INVESTOR: EShareholderType.ANGEL_INVESTOR;
        EMPLOYEE: EShareholderType.EMPLOYEE;
        FOUNDER: EShareholderType.FOUNDER;
        INVESTMENT_COMPANY: EShareholderType.INVESTMENT_COMPANY;
        RETAIL_INVESTOR: EShareholderType.RETAIL_INVESTOR;
        VC: EShareholderType.VC;
        OTHER: EShareholderType.OTHER;
    }>;
    ownedBy: ss.Struct<{
        name?: string | undefined;
        companyProfile?: TDocRef<{
            [key: string]: any;
        }, import("./documentId").DocumentId> | undefined;
        organizationNbr?: string | undefined;
    } | undefined, {
        name: ss.Struct<string | undefined, null>;
        organizationNbr: ss.Struct<string | undefined, null>;
        companyProfile: ss.Struct<TDocRef<{
            [key: string]: any;
        }, import("./documentId").DocumentId> | undefined, null>;
    }>;
    coInvestors: ss.Struct<{
        fraction: number;
        role: string;
        user?: any;
        investment?: any;
        userData?: {
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined;
    }[] | undefined, ss.Struct<{
        fraction: number;
        role: string;
        user?: any;
        investment?: any;
        userData?: {
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined;
    }, {
        user: ss.Struct<any, null>;
        investment: ss.Struct<any, null>;
        fraction: ss.Struct<number, null>;
        role: ss.Struct<string, {
            [x: string]: string;
        }>;
        userData: ss.Struct<{
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined, {
            firstname: ss.Struct<string, null>;
            lastname: ss.Struct<string, null>;
            email: ss.Struct<string, null>;
            color: ss.Struct<string | undefined, null>;
        }>;
    }>>;
    parentId: ss.Struct<import("./documentId").DocumentId | undefined, {
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
        _id: ss.Describe<import("./documentId").DocumentId>;
    } | null>;
    childrenIds: ss.Struct<import("./documentId").DocumentId[] | undefined, ss.Describe<import("./documentId").DocumentId>>;
}>;
export type FindexInvestment = ISavedDocument<Omit<IInvestment, 'asset'>, string> & {
    asset: ISavedDocument<IAsset>;
};
export type FullInvestment = Omit<IInvestment, 'asset'> & {
    asset: FullAsset;
};
export type PotentialInvestment = Omit<FindexInvestment, '_id' | 'asset' | 'externalId'> & {
    externalId: string;
    isFirstTimeSeen: boolean;
} & {
    asset: PotentialAsset;
};
export declare const getInvestmentCurrency: (investment: Partial<IInvestment> | Partial<FindexInvestment>) => string;
