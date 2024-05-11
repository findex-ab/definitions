import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IInvestment } from "./investment";
import * as ss from 'superstruct';
import { IntegrationProvider, ProviderSession } from "./integrationProvider";
import { Portfolio } from "./portfolio";
import { EAuthenticationMethod } from "./auth";
import { IntegrationImport } from "./integrationImport";
import { EUserRole, FindexUserRole } from "./userRole";
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
    subscribedToNewsletter?: boolean;
    roles?: FindexUserRole[];
    pictureBase64?: string;
}
export declare const UserSchema: ss.Struct<{
    email: string;
    authUserId?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
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
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
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
    status?: EUserStatus | undefined;
    administratedAssets?: any[] | undefined;
    definitions?: import("./userDefinitions").IUserDefinitions | undefined;
    currency?: string | undefined;
    providers?: IntegrationProvider[] | undefined;
    country?: string | undefined;
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
    authenticationMethod?: EAuthenticationMethod | undefined;
    agreedTermsOfUseDate?: string | undefined;
    lastActivity?: string | undefined;
    subscribedToNewsletter?: boolean | undefined;
    pictureBase64?: string | undefined;
}, {
    authUserId: ss.Struct<string | undefined, null>;
    firstname: ss.Struct<string | undefined, null>;
    lastname: ss.Struct<string | undefined, null>;
    email: ss.Struct<string, null>;
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
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
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
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
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
            name?: string | undefined;
            status?: import("./integrationProvider").EProviderSessionStatus | undefined;
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
    authenticationMethod: ss.Struct<EAuthenticationMethod | undefined, {
        PASSWORD: EAuthenticationMethod.PASSWORD;
        BANKID: EAuthenticationMethod.BANKID;
    }>;
    country: ss.Struct<string | undefined, null>;
    currency: ss.Struct<string | undefined, null>;
    agreedTermsOfUseDate: ss.Struct<string | undefined, null>;
    lastActivity: ss.Struct<string | undefined, null>;
    subscribedToNewsletter: ss.Struct<boolean | undefined, null>;
    pictureBase64: ss.Struct<string | undefined, null>;
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
