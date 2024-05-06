import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { RequiredFields } from './required';
import * as ss from 'superstruct';
import { Modify } from "./utils";
import { ISavedDocument } from "./savedDocument";
export declare enum EInviteStatus {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export declare enum EInviteType {
    ASSET_ADMIN = "ASSET_ADMIN",
    SHAREHOLDER = "SHAREHOLDER",
    GENERIC_USER = "GENERIC_USER"
}
export interface IInvite {
    user: RequiredFields<Partial<IUser>, 'email'>;
    asset?: TDocRef<IAsset>;
    status: EInviteStatus;
    type: EInviteType;
    betaCode?: string;
}
export type IInviteDocument = Modify<ISavedDocument<IInvite>, {
    asset: ISavedDocument<IAsset>;
}>;
export declare const InviteSchema: ss.Struct<{
    status: EInviteStatus;
    user: {
        email: string;
        authUserId?: string | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        authenticationMethod?: import("./auth").EAuthenticationMethod | undefined;
        phone?: string | undefined;
        personalNumber?: string | undefined;
        password?: string | undefined;
        investments?: {
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            logoBase64?: string | undefined;
            provider?: {
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                name?: string | undefined;
                displayName?: string | undefined;
                externalId?: number | undefined;
            } | undefined;
            time?: any;
            returnValue?: import("./value").IValue | undefined;
            currentValue?: import("./value").IValue | undefined;
            price?: import("./value").IValue | undefined;
            automatic?: boolean | undefined;
            ROI?: import("./value").IValue | undefined;
            acquiredPrice?: import("./value").IValue | undefined;
            lastPrice?: import("./value").IValue | undefined;
            morningPriceTC?: import("./value").IValue | undefined;
            marketValueTC?: import("./value").IValue | undefined;
            marketValueAC?: import("./value").IValue | undefined;
            pctReturn?: number | undefined;
            pctToday?: number | undefined;
            shareholderType?: import("./investment").EShareholderType | undefined;
            ownedBy?: {
                name?: string | undefined;
                organizationNbr?: string | undefined;
            } | undefined;
        }[] | undefined;
        administratedAssets?: any[] | undefined;
        status?: import("./user").EUserStatus | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
        portfolio?: {
            total: import("./portfolio").PortfolioValueSlot;
            diversification: Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>;
            trends: {
                value: {
                    roi: number;
                    change: number;
                };
                total: import("./portfolio").PortfolioValueSlot;
                transaction: {
                    count: number;
                };
            };
        } | undefined;
        country?: string | undefined;
        currency?: string | undefined;
        agreedTermsOfUseDate?: string | undefined;
        lastActivity?: string | undefined;
        subscribedToNewsletter?: boolean | undefined;
        pictureBase64?: string | undefined;
    };
    type: EInviteType.ASSET_ADMIN | EInviteType.SHAREHOLDER;
    asset?: TDocRef<IAsset, import("./documentId").DocumentId> | undefined;
    betaCode?: string | undefined;
}, {
    user: ss.Struct<{
        email: string;
        authUserId?: string | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        authenticationMethod?: import("./auth").EAuthenticationMethod | undefined;
        phone?: string | undefined;
        personalNumber?: string | undefined;
        password?: string | undefined;
        investments?: {
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            logoBase64?: string | undefined;
            provider?: {
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                name?: string | undefined;
                displayName?: string | undefined;
                externalId?: number | undefined;
            } | undefined;
            time?: any;
            returnValue?: import("./value").IValue | undefined;
            currentValue?: import("./value").IValue | undefined;
            price?: import("./value").IValue | undefined;
            automatic?: boolean | undefined;
            ROI?: import("./value").IValue | undefined;
            acquiredPrice?: import("./value").IValue | undefined;
            lastPrice?: import("./value").IValue | undefined;
            morningPriceTC?: import("./value").IValue | undefined;
            marketValueTC?: import("./value").IValue | undefined;
            marketValueAC?: import("./value").IValue | undefined;
            pctReturn?: number | undefined;
            pctToday?: number | undefined;
            shareholderType?: import("./investment").EShareholderType | undefined;
            ownedBy?: {
                name?: string | undefined;
                organizationNbr?: string | undefined;
            } | undefined;
        }[] | undefined;
        administratedAssets?: any[] | undefined;
        status?: import("./user").EUserStatus | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
        portfolio?: {
            total: import("./portfolio").PortfolioValueSlot;
            diversification: Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>;
            trends: {
                value: {
                    roi: number;
                    change: number;
                };
                total: import("./portfolio").PortfolioValueSlot;
                transaction: {
                    count: number;
                };
            };
        } | undefined;
        country?: string | undefined;
        currency?: string | undefined;
        agreedTermsOfUseDate?: string | undefined;
        lastActivity?: string | undefined;
        subscribedToNewsletter?: boolean | undefined;
        pictureBase64?: string | undefined;
    }, {
        email: ss.Struct<string, null>;
        authUserId: ss.Struct<string | undefined, null>;
        firstname: ss.Struct<string | undefined, null>;
        lastname: ss.Struct<string | undefined, null>;
        authenticationMethod: ss.Struct<import("./auth").EAuthenticationMethod | undefined, {
            PASSWORD: import("./auth").EAuthenticationMethod.PASSWORD;
            BANKID: import("./auth").EAuthenticationMethod.BANKID;
        }>;
        phone: ss.Struct<string | undefined, null>;
        personalNumber: ss.Struct<string | undefined, null>;
        password: ss.Struct<string | undefined, null>;
        investments: ss.Struct<{
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            logoBase64?: string | undefined;
            provider?: {
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                name?: string | undefined;
                displayName?: string | undefined;
                externalId?: number | undefined;
            } | undefined;
            time?: any;
            returnValue?: import("./value").IValue | undefined;
            currentValue?: import("./value").IValue | undefined;
            price?: import("./value").IValue | undefined;
            automatic?: boolean | undefined;
            ROI?: import("./value").IValue | undefined;
            acquiredPrice?: import("./value").IValue | undefined;
            lastPrice?: import("./value").IValue | undefined;
            morningPriceTC?: import("./value").IValue | undefined;
            marketValueTC?: import("./value").IValue | undefined;
            marketValueAC?: import("./value").IValue | undefined;
            pctReturn?: number | undefined;
            pctToday?: number | undefined;
            shareholderType?: import("./investment").EShareholderType | undefined;
            ownedBy?: {
                name?: string | undefined;
                organizationNbr?: string | undefined;
            } | undefined;
        }[] | undefined, ss.Struct<{
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            logoBase64?: string | undefined;
            provider?: {
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                name?: string | undefined;
                displayName?: string | undefined;
                externalId?: number | undefined;
            } | undefined;
            time?: any;
            returnValue?: import("./value").IValue | undefined;
            currentValue?: import("./value").IValue | undefined;
            price?: import("./value").IValue | undefined;
            automatic?: boolean | undefined;
            ROI?: import("./value").IValue | undefined;
            acquiredPrice?: import("./value").IValue | undefined;
            lastPrice?: import("./value").IValue | undefined;
            morningPriceTC?: import("./value").IValue | undefined;
            marketValueTC?: import("./value").IValue | undefined;
            marketValueAC?: import("./value").IValue | undefined;
            pctReturn?: number | undefined;
            pctToday?: number | undefined;
            shareholderType?: import("./investment").EShareholderType | undefined;
            ownedBy?: {
                name?: string | undefined;
                organizationNbr?: string | undefined;
            } | undefined;
        }, {
            asset: ss.Struct<string, null>;
            symbol: ss.Struct<string | undefined, null>;
            logoBase64: ss.Struct<string | undefined, null>;
            provider: ss.Struct<{
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                name?: string | undefined;
                displayName?: string | undefined;
                externalId?: number | undefined;
            } | undefined, {
                status: ss.Struct<import("./integrationProvider").EProviderSessionStatus | undefined, {
                    CONNECTED: import("./integrationProvider").EProviderSessionStatus.CONNECTED;
                    DISCONNECTED: import("./integrationProvider").EProviderSessionStatus.DISCONNECTED;
                }>;
                name: ss.Struct<string | undefined, null>;
                displayName: ss.Struct<string | undefined, null>;
                externalId: ss.Struct<number | undefined, null>;
            }>;
            invested: ss.Describe<import("./value").IValue>;
            returnValue: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            currentValue: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            price: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            quantity: ss.Struct<number, null>;
            automatic: ss.Struct<boolean | undefined, null>;
            time: ss.Struct<any, null>;
            ROI: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            acquiredPrice: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            lastPrice: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            morningPriceTC: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            marketValueTC: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            marketValueAC: ss.Struct<import("./value").IValue | undefined, {
                value: ss.Describe<number>;
                percentage?: ss.Describe<number | undefined> | undefined;
                type?: ss.Describe<string | undefined> | undefined;
                time?: ss.Describe<Date | undefined> | undefined;
            }>;
            pctReturn: ss.Struct<number | undefined, null>;
            pctToday: ss.Struct<number | undefined, null>;
            shareholderType: ss.Struct<import("./investment").EShareholderType | undefined, {
                ANGEL_INVESTOR: import("./investment").EShareholderType.ANGEL_INVESTOR;
                EMPLOYEE: import("./investment").EShareholderType.EMPLOYEE;
                FOUNDER: import("./investment").EShareholderType.FOUNDER;
                INVESTMENT_COMPANY: import("./investment").EShareholderType.INVESTMENT_COMPANY;
                RETAIL_INVESTOR: import("./investment").EShareholderType.RETAIL_INVESTOR;
                VC: import("./investment").EShareholderType.VC;
                OTHER: import("./investment").EShareholderType.OTHER;
            }>;
            ownedBy: ss.Struct<{
                name?: string | undefined;
                organizationNbr?: string | undefined;
            } | undefined, {
                name: ss.Struct<string | undefined, null>;
                organizationNbr: ss.Struct<string | undefined, null>;
            }>;
        }>>;
        administratedAssets: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
        status: ss.Struct<import("./user").EUserStatus | undefined, {
            PENDING: import("./user").EUserStatus.PENDING;
            RESOLVED: import("./user").EUserStatus.RESOLVED;
        }>;
        definitions: ss.Struct<import("./userDefinitions").IUserDefinitions | undefined, {
            assetRelations?: ss.Describe<import("./assetRelation").IAssetRelation[] | undefined> | undefined;
            colorPreference?: ss.Describe<import("./colorPreference").EColorPreference | undefined> | undefined;
            currency?: ss.Describe<import("./currency").ECurrency | undefined> | undefined;
        }>;
        providers: ss.Struct<import("./integrationProvider").IntegrationProvider[] | undefined, ss.Describe<import("./integrationProvider").IntegrationProvider>>;
        portfolio: ss.Struct<{
            total: import("./portfolio").PortfolioValueSlot;
            diversification: Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>;
            trends: {
                value: {
                    roi: number;
                    change: number;
                };
                total: import("./portfolio").PortfolioValueSlot;
                transaction: {
                    count: number;
                };
            };
        } | undefined, {
            total: ss.Describe<import("./portfolio").PortfolioValueSlot>;
            diversification: ss.Struct<Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>, null>;
            trends: ss.Struct<{
                value: {
                    roi: number;
                    change: number;
                };
                total: import("./portfolio").PortfolioValueSlot;
                transaction: {
                    count: number;
                };
            }, {
                transaction: ss.Struct<{
                    count: number;
                }, {
                    count: ss.Struct<number, null>;
                }>;
                value: ss.Struct<{
                    roi: number;
                    change: number;
                }, {
                    change: ss.Struct<number, null>;
                    roi: ss.Struct<number, null>;
                }>;
                total: ss.Describe<import("./portfolio").PortfolioValueSlot>;
            }>;
        }>;
        country: ss.Struct<string | undefined, null>;
        currency: ss.Struct<string | undefined, null>;
        agreedTermsOfUseDate: ss.Struct<string | undefined, null>;
        lastActivity: ss.Struct<string | undefined, null>;
        subscribedToNewsletter: ss.Struct<boolean | undefined, null>;
        pictureBase64: ss.Struct<string | undefined, null>;
    }>;
    asset: ss.Struct<TDocRef<IAsset, import("./documentId").DocumentId> | undefined, {
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
    } | {
        name: ss.Describe<string>;
        organizationNumber?: ss.Describe<string | undefined> | undefined;
        contactEmail: ss.Describe<string>;
        ledger: ss.Describe<import("./ledger").ILedger>;
        assetId?: ss.Describe<string | undefined> | undefined;
        externalId?: ss.Describe<string | undefined> | undefined;
        type?: ss.Describe<import("./asset").EAssetType | undefined> | undefined;
        subtype?: ss.Describe<import("./asset").EAssetSubtype | undefined> | undefined;
        source?: ss.Describe<import("./asset").EAssetSource | undefined> | undefined;
        provider?: ss.Describe<import("./integrationProvider").IntegrationProvider | undefined> | undefined;
        symbol?: ss.Describe<string | undefined> | undefined;
        parentId?: ss.Describe<import("./documentId").DocumentId | undefined> | undefined;
        childrenIds?: ss.Describe<import("./documentId").DocumentId[] | undefined> | undefined;
        automatic?: ss.Describe<boolean | undefined> | undefined;
        articles?: ss.Describe<TDocRef<import("./news").FindexNewsArticle>[] | undefined> | undefined;
        lastNewsUpdate?: ss.Describe<Date | undefined> | undefined;
        transactions?: ss.Describe<import("./investmentTransaction").InvestmentTransaction[] | undefined> | undefined;
        logoBase64?: ss.Describe<string | undefined> | undefined;
        automaticLogoFailed?: ss.Describe<boolean | undefined> | undefined;
        realEstateInformation?: ss.Describe<{
            type?: string | undefined;
            country?: string | undefined;
            city?: string | undefined;
            address?: string | undefined;
        } | undefined> | undefined;
        createdBy?: ss.Describe<TDocRef<IUser> | undefined> | undefined;
        _id: ss.Describe<(string | undefined) & import("./documentId").DocumentId>;
        id?: ss.Describe<string | undefined> | undefined;
        createdAt?: ss.Describe<Date | undefined> | undefined;
        updatedAt?: ss.Describe<Date | undefined> | undefined;
    } | null>;
    status: ss.Struct<EInviteStatus, {
        PENDING: EInviteStatus.PENDING;
        RESOLVED: EInviteStatus.RESOLVED;
    }>;
    type: ss.Struct<EInviteType.ASSET_ADMIN | EInviteType.SHAREHOLDER, {
        ASSET_ADMIN: EInviteType.ASSET_ADMIN;
        SHAREHOLDER: EInviteType.SHAREHOLDER;
    }>;
    betaCode: ss.Struct<string | undefined, null>;
}>;
