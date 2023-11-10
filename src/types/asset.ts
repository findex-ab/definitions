import * as ss from 'superstruct';
import { ILedger, LedgerSchema } from ".";


export interface IAsset {
  name: string;
  organizationNumber: string;
  contactEmail: string;
  ledger: ILedger;
  assetId?: string;
}

export const AssetSchema: ss.Describe<IAsset> = ss.object({
  name: ss.string(),
  organizationNumber: ss.string(),
  contactEmail: ss.string(),
  ledger: LedgerSchema,
  assetId: ss.optional(ss.any()),
});


export type ICompany = IAsset;
