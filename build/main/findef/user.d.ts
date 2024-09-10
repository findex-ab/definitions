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
    country?: string | undefined;
    currency?: string | undefined;
    status?: EUserStatus | undefined;
    authUserId?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    emailVerified?: boolean | undefined;
    phone?: string | undefined;
    personalNumber?: string | undefined;
    password?: string | undefined;
    investments?: {
        quantity: number;
        asset: string;
        invested: import("./value").IValue;
        symbol?: string | undefined;
        providerImport?: any;
        externalId?: string | undefined;
        provider?: {
            name?: string | undefined;
            externalId?: number | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
            displayName?: string | undefined;
        } | undefined;
        automatic?: boolean | undefined;
        image?: string | undefined;
        currency?: string | undefined;
        price?: import("./value").IValue | undefined;
        time?: any;
        externalAccountId?: string | undefined;
        externalOrderBookId?: string | undefined;
        userDoesNotWantImage?: boolean | undefined;
        returnValue?: import("./value").IValue | undefined;
        currentValue?: import("./value").IValue | undefined;
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
    providers?: IntegrationProvider[] | undefined;
    portfolio?: {
        currency: string;
        total: import("./portfolio").PortfolioValueSlot;
        diversification: Record<import("./asset").EAssetType.UNDEFINED | import("./asset").EAssetType.EQUITY | import("./asset").EAssetType.REAL_ESTATE | import("./asset").EAssetType.ALTERNATIVE, {
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
        quantity: number;
        asset: string;
        invested: import("./value").IValue;
        symbol?: string | undefined;
        providerImport?: any;
        externalId?: string | undefined;
        provider?: {
            name?: string | undefined;
            externalId?: number | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
            displayName?: string | undefined;
        } | undefined;
        automatic?: boolean | undefined;
        image?: string | undefined;
        currency?: string | undefined;
        price?: import("./value").IValue | undefined;
        time?: any;
        externalAccountId?: string | undefined;
        externalOrderBookId?: string | undefined;
        userDoesNotWantImage?: boolean | undefined;
        returnValue?: import("./value").IValue | undefined;
        currentValue?: import("./value").IValue | undefined;
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
        quantity: number;
        asset: string;
        invested: import("./value").IValue;
        symbol?: string | undefined;
        providerImport?: any;
        externalId?: string | undefined;
        provider?: {
            name?: string | undefined;
            externalId?: number | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
            displayName?: string | undefined;
        } | undefined;
        automatic?: boolean | undefined;
        image?: string | undefined;
        currency?: string | undefined;
        price?: import("./value").IValue | undefined;
        time?: any;
        externalAccountId?: string | undefined;
        externalOrderBookId?: string | undefined;
        userDoesNotWantImage?: boolean | undefined;
        returnValue?: import("./value").IValue | undefined;
        currentValue?: import("./value").IValue | undefined;
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
        externalOrderBookId: ss.Struct<string | undefined, null>;
        image: ss.Struct<string | undefined, null>;
        userDoesNotWantImage: ss.Struct<boolean | undefined, null>;
        currency: ss.Struct<string | undefined, null>;
        provider: ss.Struct<{
            name?: string | undefined;
            externalId?: number | undefined;
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
        diversification: Record<import("./asset").EAssetType.UNDEFINED | import("./asset").EAssetType.EQUITY | import("./asset").EAssetType.REAL_ESTATE | import("./asset").EAssetType.ALTERNATIVE, {
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
        diversification: ss.Struct<Record<import("./asset").EAssetType.UNDEFINED | import("./asset").EAssetType.EQUITY | import("./asset").EAssetType.REAL_ESTATE | import("./asset").EAssetType.ALTERNATIVE, {
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
    country?: string | undefined;
    authUserId?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
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
