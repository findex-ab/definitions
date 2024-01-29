import * as ss from 'superstruct';
import { DocumentId, ILedger } from ".";
import { IDBModel } from './dbModel';
export declare enum EAssetType {
    UNDEFINED = "UNDEFINED",
    LISTED_EQUITY = "LISTED_EQUITY",
    UNLISTED_EQUITY = "UNLISTED_EQUITY",
    REAL_ESTATE = "REAL_ESTATE",
    ALTERNATIVE = "ALTERNATIVE"
}
export interface IAsset extends IDBModel {
    name: string;
    organizationNumber: string;
    contactEmail: string;
    ledger: ILedger;
    assetId?: string;
    type?: EAssetType;
    parent?: DocumentId;
    children?: DocumentId[];
}
export declare const AssetSchema: ss.Describe<Omit<IAsset, keyof IDBModel>>;
export type ICompany = IAsset;
