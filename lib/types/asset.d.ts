import * as ss from 'superstruct';
import { IDBModel } from './dbModel';
import { ILedger } from './ledger';
import { DocumentId } from './documentId';
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
    externalId?: string;
    type?: EAssetType;
    parentId?: DocumentId;
    childrenIds?: DocumentId[];
    automatic?: boolean;
}
export declare const AssetSchema: ss.Describe<Omit<IAsset, keyof IDBModel>>;
export type ICompany = IAsset;
