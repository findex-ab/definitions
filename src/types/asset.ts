import * as ss from 'superstruct';
import { DocumentId, DocumentIdSchema, ILedger, LedgerSchema } from ".";
import { IDBModel } from './dbModel';

export enum EAssetType {
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

export const AssetSchema: ss.Describe<Omit<IAsset, keyof IDBModel>> = ss.type({
  name: ss.string(),
  organizationNumber: ss.string(),
  contactEmail: ss.string(),
  ledger: LedgerSchema,
  assetId: ss.optional(ss.any()),
  type: ss.optional(ss.enums([EAssetType.UNDEFINED,EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE])),
  parent: ss.optional(DocumentIdSchema),
  children: ss.optional(ss.array(DocumentIdSchema))
});


export type ICompany = IAsset;
