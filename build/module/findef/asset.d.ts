import * as ss from 'superstruct';
import { IDBModel } from './dbModel';
import { ILedger } from './ledger';
import { DocumentId } from './documentId';
import { FindexNewsArticle } from './news';
import { TDocRef } from './docref';
export declare enum EAssetType {
    UNDEFINED = "UNDEFINED",
    LISTED_EQUITY = "LISTED_EQUITY",
    UNLISTED_EQUITY = "UNLISTED_EQUITY",
    REAL_ESTATE = "REAL_ESTATE",
    ALTERNATIVE = "ALTERNATIVE"
}
export declare enum EAssetSource {
    IR = "IR",
    AUTOMATIC = "AUTOMATIC",
    MANUAL = "MANUAL"
}
export interface IAsset extends IDBModel {
    name: string;
    organizationNumber: string;
    contactEmail: string;
    ledger: ILedger;
    assetId?: string;
    externalId?: string;
    type?: EAssetType;
    source?: EAssetSource;
    provider?: string;
    parentId?: DocumentId;
    childrenIds?: DocumentId[];
    automatic?: boolean;
    articles?: TDocRef<FindexNewsArticle>[];
    lastNewsUpdate?: Date;
}
export declare const AssetSchema: ss.Describe<Omit<IAsset, keyof IDBModel>>;
export type ICompany = IAsset;
export type AssetWithArticle = {
    asset: IAsset;
    article: FindexNewsArticle;
};
export type AssetNewsMap = Record<string, FindexNewsArticle[]>;
