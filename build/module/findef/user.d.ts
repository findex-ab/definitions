import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IInvestment } from "./investment";
import * as ss from 'superstruct';
import { IUserDefinitions } from "./userDefinitions";
import { IntegrationProvider } from "./integrationProvider";
import { Portfolio } from "./portfolio";
export declare enum EUserStatus {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export interface IUser {
    authUserId?: string;
    firstname?: string;
    lastname?: string;
    email: string;
    phone?: string;
    personalNumber?: string;
    password?: string;
    investments?: IInvestment[];
    administratedAssets?: TDocRef<IAsset>[];
    status?: EUserStatus;
    definitions?: IUserDefinitions;
    providers?: IntegrationProvider[];
    portfolio?: Portfolio;
}
export declare const UserSchema: ss.Struct<{
    email: string;
    status?: EUserStatus | undefined;
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
        automatic?: boolean | undefined;
        time?: any;
        returnValue?: import("./value").IValue | undefined;
        price?: import("./value").IValue | undefined;
    }[] | undefined;
    administratedAssets?: string[] | undefined;
    definitions?: IUserDefinitions | undefined;
    providers?: IntegrationProvider[] | undefined;
    portfolio?: {
        total: import("./portfolio").PortfolioValueSlot;
        diversification: Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>;
    } | undefined;
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
        automatic?: boolean | undefined;
        time?: any;
        returnValue?: import("./value").IValue | undefined;
        price?: import("./value").IValue | undefined;
    }[] | undefined, ss.Struct<{
        asset: string;
        invested: import("./value").IValue;
        quantity: number;
        automatic?: boolean | undefined;
        time?: any;
        returnValue?: import("./value").IValue | undefined;
        price?: import("./value").IValue | undefined;
    }, {
        asset: ss.Struct<string, null>;
        invested: ss.Describe<import("./value").IValue>;
        returnValue: ss.Struct<import("./value").IValue | undefined, {
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
    }>>;
    administratedAssets: ss.Struct<string[] | undefined, ss.Struct<string, null>>;
    status: ss.Struct<EUserStatus | undefined, {
        PENDING: EUserStatus.PENDING;
        RESOLVED: EUserStatus.RESOLVED;
    }>;
    definitions: ss.Struct<IUserDefinitions | undefined, {
        assetRelations?: ss.Describe<import("./assetRelation").IAssetRelation[] | undefined> | undefined;
        colorPreference?: ss.Describe<import("./colorPreference").EColorPreference | undefined> | undefined;
        currency?: ss.Describe<import("./currency").ECurrency | undefined> | undefined;
    }>;
    providers: ss.Struct<IntegrationProvider[] | undefined, ss.Describe<IntegrationProvider>>;
    portfolio: ss.Struct<{
        total: import("./portfolio").PortfolioValueSlot;
        diversification: Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>;
    } | undefined, {
        total: ss.Describe<import("./portfolio").PortfolioValueSlot>;
        diversification: ss.Struct<Record<import("./asset").EAssetType, import("./portfolio").PortfolioValueSlot>, null>;
    }>;
}>;
export type IInvestor = IUser;
