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
    type: EInviteType;
    status: EInviteStatus;
    user: {
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
        }[] | undefined;
        administratedAssets?: string[] | undefined;
        status?: import("./user").EUserStatus | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
        portfolio?: {
            total: import("./portfolio").PortfolioValueSlot;
            diversification: Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>;
        } | undefined;
    };
}, {
    user: ss.Struct<{
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
        }[] | undefined;
        administratedAssets?: string[] | undefined;
        status?: import("./user").EUserStatus | undefined;
        definitions?: import("./userDefinitions").IUserDefinitions | undefined;
        providers?: import("./integrationProvider").IntegrationProvider[] | undefined;
        portfolio?: {
            total: import("./portfolio").PortfolioValueSlot;
            diversification: Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>;
        } | undefined;
    }, {
        email: ss.Struct<string, null>;
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
        }[] | undefined, ss.Struct<{
            asset: string;
            invested: import("./value").IValue;
            quantity: number;
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
        }, {
            asset: ss.Struct<string, null>;
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
        }>>;
        administratedAssets: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
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
        } | undefined, {
            total: ss.Describe<import("./portfolio").PortfolioValueSlot>;
            diversification: ss.Struct<Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>, null>;
        }>;
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
