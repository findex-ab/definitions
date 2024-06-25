import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { RequiredFields } from './required';
import * as ss from 'superstruct';
import { Modify } from "./utils";
import { ISavedDocument } from "./savedDocument";
import { IKeyCode } from "./keycode";
export declare enum EInviteStatus {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export declare enum EInviteType {
    ASSET_ADMIN = "ASSET_ADMIN",
    SHAREHOLDER = "SHAREHOLDER",
    GENERIC_USER = "GENERIC_USER",
    CO_INVESTOR = "CO_INVESTOR"
}
export interface IInvite {
    user: RequiredFields<Partial<IUser>, 'email'>;
    sender?: TDocRef<IUser>;
    asset?: TDocRef<IAsset>;
    status: EInviteStatus;
    type: EInviteType;
    betaCode?: string;
    keyCode?: TDocRef<IKeyCode>;
}
export type IInviteDocument = Modify<ISavedDocument<IInvite>, {
    asset: ISavedDocument<IAsset>;
}>;
export declare const InviteSchema: ss.Struct<{
    type: EInviteType.ASSET_ADMIN | EInviteType.SHAREHOLDER | EInviteType.GENERIC_USER;
    user: {
        email: string;
        country?: string | undefined;
        status?: import("./user").EUserStatus | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        authUserId?: string | undefined;
        emailVerified?: boolean | undefined;
        phone?: string | undefined;
        personalNumber?: string | undefined;
        password?: string | undefined;
        investments?: {
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            time?: any;
            externalAccountId?: string | undefined;
            externalId?: string | undefined;
            providerImport?: any;
            image?: string | undefined;
            provider?: {
                externalId?: number | undefined;
                name?: string | undefined;
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                displayName?: string | undefined;
            } | undefined;
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
        }[] | undefined;
        administratedAssets?: any[] | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        currency?: string | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
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
        authenticationMethod?: import("./auth").EAuthenticationMethod | undefined;
        agreedTermsOfUseDate?: string | undefined;
        lastActivity?: string | undefined;
        lastOnline?: string | undefined;
        subscribedToNewsletter?: boolean | undefined;
        avatar?: string | {
            _id: string;
        } | undefined;
        lastSessionTimeSeconds?: number | undefined;
        isOnline?: boolean | undefined;
    };
    status: EInviteStatus;
    asset?: TDocRef<IAsset, import("./documentId").DocumentId> | undefined;
    betaCode?: string | undefined;
    sender?: TDocRef<IUser, import("./documentId").DocumentId> | undefined;
    keyCode?: TDocRef<IKeyCode, import("./documentId").DocumentId> | undefined;
}, {
    user: ss.Struct<{
        email: string;
        country?: string | undefined;
        status?: import("./user").EUserStatus | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        authUserId?: string | undefined;
        emailVerified?: boolean | undefined;
        phone?: string | undefined;
        personalNumber?: string | undefined;
        password?: string | undefined;
        investments?: {
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            time?: any;
            externalAccountId?: string | undefined;
            externalId?: string | undefined;
            providerImport?: any;
            image?: string | undefined;
            provider?: {
                externalId?: number | undefined;
                name?: string | undefined;
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                displayName?: string | undefined;
            } | undefined;
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
        }[] | undefined;
        administratedAssets?: any[] | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        currency?: string | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
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
        authenticationMethod?: import("./auth").EAuthenticationMethod | undefined;
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
        email: ss.Struct<string, null>;
        country: ss.Struct<string | undefined, null>;
        status: ss.Struct<import("./user").EUserStatus | undefined, {
            PENDING: import("./user").EUserStatus.PENDING;
            RESOLVED: import("./user").EUserStatus.RESOLVED;
        }>;
        firstname: ss.Struct<string | undefined, null>;
        lastname: ss.Struct<string | undefined, null>;
        authUserId: ss.Struct<string | undefined, null>;
        emailVerified: ss.Struct<boolean | undefined, null>;
        phone: ss.Struct<string | undefined, null>;
        personalNumber: ss.Struct<string | undefined, null>;
        password: ss.Struct<string | undefined, null>;
        investments: ss.Struct<{
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            time?: any;
            externalAccountId?: string | undefined;
            externalId?: string | undefined;
            providerImport?: any;
            image?: string | undefined;
            provider?: {
                externalId?: number | undefined;
                name?: string | undefined;
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                displayName?: string | undefined;
            } | undefined;
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
        }[] | undefined, ss.Struct<{
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
            symbol?: string | undefined;
            time?: any;
            externalAccountId?: string | undefined;
            externalId?: string | undefined;
            providerImport?: any;
            image?: string | undefined;
            provider?: {
                externalId?: number | undefined;
                name?: string | undefined;
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
                displayName?: string | undefined;
            } | undefined;
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
            image: ss.Struct<string | undefined, null>;
            provider: ss.Struct<{
                externalId?: number | undefined;
                name?: string | undefined;
                status?: import("./integrationProvider").EProviderSessionStatus | undefined;
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
            } | undefined, {
                name: ss.Struct<string | undefined, null>;
                organizationNbr: ss.Struct<string | undefined, null>;
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
        }>>;
        administratedAssets: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
        definitions: ss.Struct<import("./userDefinitions").IUserDefinitions | undefined, {
            assetRelations?: ss.Describe<import("./assetRelation").IAssetRelation[] | undefined> | undefined;
            colorPreference?: ss.Describe<import("./colorPreference").EColorPreference | undefined> | undefined;
            currency?: ss.Describe<import("./currency").ECurrency | undefined> | undefined;
        }>;
        currency: ss.Struct<string | undefined, null>;
        providers: ss.Struct<import("./integrationProvider").IntegrationProvider[] | undefined, ss.Describe<import("./integrationProvider").IntegrationProvider>>;
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
        authenticationMethod: ss.Struct<import("./auth").EAuthenticationMethod | undefined, {
            PASSWORD: import("./auth").EAuthenticationMethod.PASSWORD;
            BANKID: import("./auth").EAuthenticationMethod.BANKID;
        }>;
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
    sender: ss.Struct<TDocRef<IUser, import("./documentId").DocumentId> | undefined, {
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
        _id: ss.Describe<string | import("bson").ObjectId | import("bson").ObjectIdLike>;
    } | {
        _id: ss.Describe<string | import("bson").ObjectId | import("bson").ObjectIdLike>;
        authUserId?: ss.Describe<string | undefined> | undefined;
        firstname?: ss.Describe<string | undefined> | undefined;
        lastname?: ss.Describe<string | undefined> | undefined;
        email: ss.Describe<string>;
        emailVerified?: ss.Describe<boolean | undefined> | undefined;
        lastVerificationEmailSentAt?: ss.Describe<Date | undefined> | undefined;
        alternativeEmail?: ss.Describe<string | undefined> | undefined;
        authenticationMethod?: ss.Describe<import("./auth").EAuthenticationMethod | undefined> | undefined;
        phone?: ss.Describe<string | undefined> | undefined;
        personalNumber?: ss.Describe<string | undefined> | undefined;
        password?: ss.Describe<string | undefined> | undefined;
        investments?: ss.Describe<import("./investment").IInvestment[] | undefined> | undefined;
        administratedAssets?: ss.Describe<TDocRef<IAsset>[] | undefined> | undefined;
        status?: ss.Describe<import("./user").EUserStatus | undefined> | undefined;
        providers?: ss.Describe<import("./integrationProvider").IntegrationProvider[] | undefined> | undefined;
        providerSessions?: ss.Describe<import("./integrationProvider").ProviderSession[] | undefined> | undefined;
        integrationImports?: ss.Describe<import("./integrationImport").IntegrationImport[] | undefined> | undefined;
        color: ss.Describe<string>;
        portfolio?: ss.Describe<import("./portfolio").Portfolio | undefined> | undefined;
        country?: ss.Describe<string | undefined> | undefined;
        currency?: ss.Describe<string | undefined> | undefined;
        agreedTermsOfUseDate?: ss.Describe<Date | undefined> | undefined;
        lastActivity?: ss.Describe<Date | undefined> | undefined;
        lastOnline?: ss.Describe<Date | undefined> | undefined;
        subscribedToNewsletter?: ss.Describe<boolean | undefined> | undefined;
        roles?: ss.Describe<import("./userRole").FindexUserRole[] | undefined> | undefined;
        avatar?: ss.Describe<TDocRef<import("./attachment").IAttachment> | undefined> | undefined;
        lastSessionTimeSeconds?: ss.Describe<number | undefined> | undefined;
        isOnline?: ss.Describe<boolean | undefined> | undefined;
    } | null>;
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
        _id: ss.Describe<string | import("bson").ObjectId | import("bson").ObjectIdLike>;
    } | {
        _id: ss.Describe<(string | import("bson").ObjectId | import("bson").ObjectIdLike) & (string | undefined)>;
        name: ss.Describe<string>;
        providerImport?: ss.Describe<TDocRef<import("./providerImport").IProviderImport> | undefined> | undefined;
        organizationNumber?: ss.Describe<string | undefined> | undefined;
        contactEmail: ss.Describe<string>;
        ledger: ss.Describe<import("./ledger").ILedger>;
        listed: ss.Describe<boolean>;
        assetId?: ss.Describe<string | undefined> | undefined;
        externalId?: ss.Describe<string | undefined> | undefined;
        type?: ss.Describe<import("./asset").EAssetType | undefined> | undefined;
        subtypes?: ss.Describe<import("./asset").EAssetSubtype[] | undefined> | undefined;
        tags?: ss.Describe<string[] | undefined> | undefined;
        isBankAccount?: ss.Describe<boolean | undefined> | undefined;
        source?: ss.Describe<import("./asset").EAssetSource | undefined> | undefined;
        provider?: ss.Describe<import("./integrationProvider").IntegrationProvider | undefined> | undefined;
        symbol?: ss.Describe<string | undefined> | undefined;
        parentId?: ss.Describe<import("./documentId").DocumentId | undefined> | undefined;
        childrenIds?: ss.Describe<import("./documentId").DocumentId[] | undefined> | undefined;
        automatic?: ss.Describe<boolean | undefined> | undefined;
        articles?: ss.Describe<TDocRef<import("./news").FindexNewsArticle>[] | undefined> | undefined;
        lastNewsUpdate?: ss.Describe<Date | undefined> | undefined;
        transactions?: ss.Describe<import("./investmentTransaction").InvestmentTransaction[] | undefined> | undefined;
        image?: ss.Describe<TDocRef<import("./attachment").IAttachment> | undefined> | undefined;
        automaticLogoFailed?: ss.Describe<boolean | undefined> | undefined;
        realEstateInformation?: ss.Describe<{
            type?: string | undefined;
            country?: string | undefined;
            city?: string | undefined;
            address?: string | undefined;
        } | undefined> | undefined;
        createdBy?: ss.Describe<TDocRef<IUser> | undefined> | undefined;
        isMock?: ss.Describe<boolean | undefined> | undefined;
        id?: ss.Describe<string | undefined> | undefined;
        createdAt?: ss.Describe<Date | undefined> | undefined;
        updatedAt?: ss.Describe<Date | undefined> | undefined;
    } | null>;
    status: ss.Struct<EInviteStatus, {
        PENDING: EInviteStatus.PENDING;
        RESOLVED: EInviteStatus.RESOLVED;
    }>;
    type: ss.Struct<EInviteType.ASSET_ADMIN | EInviteType.SHAREHOLDER | EInviteType.GENERIC_USER, {
        ASSET_ADMIN: EInviteType.ASSET_ADMIN;
        SHAREHOLDER: EInviteType.SHAREHOLDER;
        GENERIC_USER: EInviteType.GENERIC_USER;
    }>;
    betaCode: ss.Struct<string | undefined, null>;
    keyCode: ss.Struct<TDocRef<IKeyCode, import("./documentId").DocumentId> | undefined, {
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
        _id: ss.Describe<string | import("bson").ObjectId | import("bson").ObjectIdLike>;
    } | {
        _id: ss.Describe<string | import("bson").ObjectId | import("bson").ObjectIdLike>;
        value: ss.Describe<string>;
        hashInput: ss.Describe<bigint>;
        type?: ss.Describe<import("./keycode").EKeyCodeType | undefined> | undefined;
        consumed?: ss.Describe<boolean | undefined> | undefined;
        consumedDate?: ss.Describe<Date | undefined> | undefined;
        expiryDate?: ss.Describe<Date | undefined> | undefined;
        reusable?: ss.Describe<boolean | undefined> | undefined;
        createdBy?: ss.Describe<TDocRef<IUser> | undefined> | undefined;
        data?: ss.Describe<any> | undefined;
    } | null>;
}>;
export type ResolveInviteRequest = {
    inviteId?: string;
    keyCode?: string;
    email?: string;
};
export declare const ResolveInviteSchema: ss.Describe<ResolveInviteRequest>;
