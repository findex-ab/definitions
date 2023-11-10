import * as ss from 'superstruct';
import { ILedger } from ".";
export interface IAsset {
    name: string;
    organizationNumber: string;
    contactEmail: string;
    ledger: ILedger;
    assetId?: string;
}
export declare const AssetSchema: ss.Describe<IAsset>;
export type ICompany = IAsset;
