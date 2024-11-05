import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IInvestment } from "./investment";
import * as ss from 'superstruct';
import { IntegrationProvider, ProviderSession } from "./integrationProvider";
import { Portfolio } from "./portfolio";
import { EAuthenticationMethod } from "./auth";
import { IntegrationImport } from "./integrationImport";
import { EUserRole, FindexUserRole } from "./userRole";
import { IAttachment } from "./attachment";
import { WorldLocation } from "./worldLocation";
export declare enum EUserStatus {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export type UserDetails = {
    emailVerified: boolean;
};
export interface IUser {
    authUserId?: string;
    firstname?: string;
    lastname?: string;
    email: string;
    emailVerified?: boolean;
    lastVerificationEmailSentAt?: Date;
    alternativeEmail?: string;
    authenticationMethod?: EAuthenticationMethod;
    phone?: string;
    personalNumber?: string;
    password?: string;
    investments?: IInvestment[];
    administratedAssets?: TDocRef<IAsset>[];
    status?: EUserStatus;
    providers?: IntegrationProvider[];
    providerSessions?: ProviderSession[];
    integrationImports?: IntegrationImport[];
    color: string;
    portfolio?: Portfolio;
    country?: string;
    currency?: string;
    agreedTermsOfUseDate?: Date;
    lastActivity?: Date;
    lastOnline?: Date;
    subscribedToNewsletter?: boolean;
    roles?: FindexUserRole[];
    avatar?: TDocRef<IAttachment>;
    lastSessionTimeSeconds?: number;
    isOnline?: boolean;
    location?: Partial<WorldLocation>;
}
export declare const UserSchema: ss.Struct<{
    email: string;
    status?: EUserStatus | undefined;
    authUserId?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    emailVerified?: boolean | undefined;
    phone?: string | undefined;
    personalNumber?: string | undefined;
    password?: string | undefined;
    investments?: {
        asset: string;
        invested: import("./value").IValue;
        quantity: number;
        symbol?: string | undefined;
        image?: string | undefined;
        providerImport?: any;
        externalAccountId?: string | undefined;
        externalId?: string | undefined;
        externalOrderBookId?: string | undefined;
        userDoesNotWantImage?: boolean | undefined;
        currency?: string | undefined;
        provider?: {
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
            externalId?: number | undefined;
            displayName?: string | undefined;
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
            companyProfile?: TDocRef<{
                [key: string]: any;
            }, import("./documentId").DocumentId> | undefined;
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
        parentId?: import("./documentId").DocumentId | undefined;
        childrenIds?: import("./documentId").DocumentId[] | undefined;
    }[] | undefined;
    currency?: string | undefined;
    administratedAssets?: any[] | undefined;
    definitions?: import("./userDefinitions").IUserDefinitions | undefined;
    providers?: IntegrationProvider[] | undefined;
    country?: string | undefined;
    portfolio?: {
        currency: string;
        total: import("./portfolio").PortfolioValueSlot;
        diversification: Record<import("./asset").EAssetType, {
            listed?: import("./portfolio").PortfolioValueSlot | undefined;
            unlisted?: import("./portfolio").PortfolioValueSlot | undefined;
            all?: import("./portfolio").PortfolioValueSlot | undefined;
        }>;
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
    authenticationMethod?: EAuthenticationMethod | undefined;
    agreedTermsOfUseDate?: string | undefined;
    lastActivity?: string | undefined;
    lastOnline?: string | undefined;
    subscribedToNewsletter?: boolean | undefined;
    avatar?: string | {
        _id: string;
    } | undefined;
    lastSessionTimeSeconds?: number | undefined;
    isOnline?: boolean | undefined;
}, {
    authUserId: ss.Struct<string | undefined, null>;
    firstname: ss.Struct<string | undefined, null>;
    lastname: ss.Struct<string | undefined, null>;
    email: ss.Struct<string, null>;
    emailVerified: ss.Struct<boolean | undefined, null>;
    phone: ss.Struct<string | undefined, null>;
    personalNumber: ss.Struct<string | undefined, null>;
    password: ss.Struct<string | undefined, null>;
    investments: ss.Struct<{
        asset: string;
        invested: import("./value").IValue;
        quantity: number;
        symbol?: string | undefined;
        image?: string | undefined;
        providerImport?: any;
        externalAccountId?: string | undefined;
        externalId?: string | undefined;
        externalOrderBookId?: string | undefined;
        userDoesNotWantImage?: boolean | undefined;
        currency?: string | undefined;
        provider?: {
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
            externalId?: number | undefined;
            displayName?: string | undefined;
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
            companyProfile?: TDocRef<{
                [key: string]: any;
            }, import("./documentId").DocumentId> | undefined;
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
        parentId?: import("./documentId").DocumentId | undefined;
        childrenIds?: import("./documentId").DocumentId[] | undefined;
    }[] | undefined, ss.Struct<{
        asset: string;
        invested: import("./value").IValue;
        quantity: number;
        symbol?: string | undefined;
        image?: string | undefined;
        providerImport?: any;
        externalAccountId?: string | undefined;
        externalId?: string | undefined;
        externalOrderBookId?: string | undefined;
        userDoesNotWantImage?: boolean | undefined;
        currency?: string | undefined;
        provider?: {
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
            externalId?: number | undefined;
            displayName?: string | undefined;
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
            companyProfile?: TDocRef<{
                [key: string]: any;
            }, import("./documentId").DocumentId> | undefined;
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
        parentId?: import("./documentId").DocumentId | undefined;
        childrenIds?: import("./documentId").DocumentId[] | undefined;
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
        provider: ss.Struct<{
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
            externalId?: number | undefined;
            displayName?: string | undefined;
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
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        currentValue: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        price: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        quantity: ss.Struct<number, null>;
        automatic: ss.Struct<boolean | undefined, null>;
        time: ss.Struct<any, null>;
        ROI: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        acquiredPrice: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        lastPrice: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        morningPriceTC: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        marketValueTC: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
        }>;
        marketValueAC: ss.Struct<import("./value").IValue | undefined, {
            value: ss.Describe<number>;
            percentage?: ss.Describe<number | undefined> | undefined;
            type?: ss.Describe<string | undefined> | undefined;
            time?: ss.Describe<Date | undefined> | undefined;
            __isValue?: ss.Describe<boolean | undefined> | undefined;
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
            companyProfile?: TDocRef<{
                [key: string]: any;
            }, import("./documentId").DocumentId> | undefined;
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
    }>>;
    administratedAssets: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
    status: ss.Struct<EUserStatus | undefined, {
        PENDING: EUserStatus.PENDING;
        RESOLVED: EUserStatus.RESOLVED;
    }>;
    definitions: ss.Struct<import("./userDefinitions").IUserDefinitions | undefined, {
        assetRelations?: ss.Describe<import("./assetRelation").IAssetRelation[] | undefined> | undefined;
        colorPreference?: ss.Describe<import("./colorPreference").EColorPreference | undefined> | undefined;
        currency?: ss.Describe<import("./currency").ECurrency | undefined> | undefined;
    }>;
    providers: ss.Struct<IntegrationProvider[] | undefined, ss.Describe<IntegrationProvider>>;
    portfolio: ss.Struct<{
        currency: string;
        total: import("./portfolio").PortfolioValueSlot;
        diversification: Record<import("./asset").EAssetType, {
            listed?: import("./portfolio").PortfolioValueSlot | undefined;
            unlisted?: import("./portfolio").PortfolioValueSlot | undefined;
            all?: import("./portfolio").PortfolioValueSlot | undefined;
        }>;
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
        diversification: ss.Struct<Record<import("./asset").EAssetType, {
            listed?: import("./portfolio").PortfolioValueSlot | undefined;
            unlisted?: import("./portfolio").PortfolioValueSlot | undefined;
            all?: import("./portfolio").PortfolioValueSlot | undefined;
        }>, null>;
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
        currency: ss.Struct<string, null>;
    }>;
    authenticationMethod: ss.Struct<EAuthenticationMethod | undefined, {
        PASSWORD: EAuthenticationMethod.PASSWORD;
        BANKID: EAuthenticationMethod.BANKID;
    }>;
    country: ss.Struct<string | undefined, null>;
    currency: ss.Struct<string | undefined, null>;
    agreedTermsOfUseDate: ss.Struct<string | undefined, null>;
    lastActivity: ss.Struct<string | undefined, null>;
    lastOnline: ss.Struct<string | undefined, null>;
    subscribedToNewsletter: ss.Struct<boolean | undefined, null>;
    avatar: ss.Struct<string | {
        _id: string;
    } | undefined, null>;
    lastSessionTimeSeconds: ss.Struct<number | undefined, null>;
    isOnline: ss.Struct<boolean | undefined, null>;
}>;
export type IInvestor = IUser;
export declare const userHasRole: (user: IUser, role: EUserRole) => boolean;
export type CreateUserAccountRequest = {
    email: string;
    firstname?: string;
    lastname?: string;
    newsLetter?: boolean;
    authUserId?: string;
    country?: string;
    agreeTermsDate: Date;
    authenticationMethod: EAuthenticationMethod;
    betaCode?: string;
    inviteId?: string;
};
export declare const CreateUserAccountSchema: ss.Struct<{
    email: string;
    authenticationMethod: EAuthenticationMethod;
    agreeTermsDate: string;
    authUserId?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    country?: string | undefined;
    newsLetter?: boolean | undefined;
    betaCode?: string | undefined;
    inviteId?: string | undefined;
}, {
    email: ss.Struct<string, null>;
    firstname: ss.Struct<string | undefined, null>;
    lastname: ss.Struct<string | undefined, null>;
    authUserId: ss.Struct<string | undefined, null>;
    country: ss.Struct<string | undefined, null>;
    newsLetter: ss.Struct<boolean | undefined, null>;
    agreeTermsDate: ss.Struct<string, null>;
    authenticationMethod: ss.Struct<EAuthenticationMethod, {
        PASSWORD: EAuthenticationMethod.PASSWORD;
        BANKID: EAuthenticationMethod.BANKID;
    }>;
    betaCode: ss.Struct<string | undefined, null>;
    inviteId: ss.Struct<string | undefined, null>;
}>;
export declare const isUser: (x: any) => x is IUser;
