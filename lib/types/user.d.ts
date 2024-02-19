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
export declare const UserSchema: ss.Describe<IUser>;
export type IInvestor = IUser;
