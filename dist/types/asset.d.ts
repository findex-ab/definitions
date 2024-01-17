import * as ss from 'superstruct';
import { ILedger } from ".";
export declare enum EAssetType {
    UNDEFINED = "UNDEFINED",
    LISTED_EQUITY = "LISTED_EQUITY",
    UNLISTED_EQUITY = "UNLISTED_EQUITY",
    REAL_ESTATE = "REAL_ESTATE",
    ALTERNATIVE = "ALTERNATIVE"
}
export interface IAsset {
    name: string;
    organizationNumber: string;
    contactEmail: string;
    ledger: ILedger;
    assetId?: string;
    type?: EAssetType;
}
export declare const AssetSchema: ss.Describe<IAsset>;
export type ICompany = IAsset;
