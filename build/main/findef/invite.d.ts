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
    SHAREHOLDER = "SHAREHOLDER"
}
export interface IInvite {
    user: RequiredFields<Partial<IUser>, 'email'>;
    asset: TDocRef<IAsset>;
    status: EInviteStatus;
    type: EInviteType;
}
export type IInviteDocument = Modify<ISavedDocument<IInvite>, {
    asset: ISavedDocument<IAsset>;
}>;
export declare const InviteSchema: ss.Struct<{
    asset: TDocRef<IAsset, import("./documentId").DocumentId>;
    status: EInviteStatus;
    type: EInviteType;
    user: {
        email: string;
        status?: import("./user").EUserStatus | undefined;
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
        }[] | undefined;
        administratedAssets?: any[] | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
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
        authenticationMethod?: import("./auth").EAuthenticationMethod | undefined;
        agreedTermsOfUseDate?: string | undefined;
        subscribedToNewsletter?: boolean | undefined;
        pictureBase64?: string | undefined;
    };
}, {
    user: ss.Struct<{
        email: string;
        status?: import("./user").EUserStatus | undefined;
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
        }[] | undefined;
        administratedAssets?: any[] | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
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
        authenticationMethod?: import("./auth").EAuthenticationMethod | undefined;
        agreedTermsOfUseDate?: string | undefined;
        subscribedToNewsletter?: boolean | undefined;
        pictureBase64?: string | undefined;
    }, {
        email: ss.Struct<string, null>;
        status: ss.Struct<import("./user").EUserStatus | undefined, {
            PENDING: import("./user").EUserStatus.PENDING;
            RESOLVED: import("./user").EUserStatus.RESOLVED;
        }>;
        authUserId: ss.Struct<string | undefined, null>;
        firstname: ss.Struct<string | undefined, null>;
        lastname: ss.Struct<string | undefined, null>;
        phone: ss.Struct<string | undefined, null>;
        personalNumber: ss.Struct<string | undefined, null>;
        password: ss.Struct<string | undefined, null>;
        investments: ss.Struct<{
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
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
        }[] | undefined, ss.Struct<{
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
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
        }, {
            asset: ss.Struct<string, null>;
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
        }>>;
        administratedAssets: ss.Struct<any[] | undefined, ss.Struct<any, null>>;
        definitions: ss.Struct<import("./userDefinitions").IUserDefinitions | undefined, {
            assetRelations?: ss.Describe<import("./assetRelation").IAssetRelation[] | undefined> | undefined;
            colorPreference?: ss.Describe<import("./colorPreference").EColorPreference | undefined> | undefined;
            currency?: ss.Describe<import("./currency").ECurrency | undefined> | undefined;
        }>;
        providers: ss.Struct<import("./integrationProvider").IntegrationProvider[] | undefined, ss.Describe<import("./integrationProvider").IntegrationProvider>>;
        country: ss.Struct<string | undefined, null>;
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
        authenticationMethod: ss.Struct<import("./auth").EAuthenticationMethod | undefined, {
            PASSWORD: import("./auth").EAuthenticationMethod.PASSWORD;
            BANKID: import("./auth").EAuthenticationMethod.BANKID;
        }>;
        agreedTermsOfUseDate: ss.Struct<string | undefined, null>;
        subscribedToNewsletter: ss.Struct<boolean | undefined, null>;
        pictureBase64: ss.Struct<string | undefined, null>;
    }>;
    asset: ss.Describe<TDocRef<IAsset, import("./documentId").DocumentId>>;
    status: ss.Struct<EInviteStatus, {
        PENDING: EInviteStatus.PENDING;
        RESOLVED: EInviteStatus.RESOLVED;
    }>;
    type: ss.Struct<EInviteType, {
        ASSET_ADMIN: EInviteType.ASSET_ADMIN;
        SHAREHOLDER: EInviteType.SHAREHOLDER;
    }>;
}>;
