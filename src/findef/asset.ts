import * as ss from 'superstruct';
import { IDBModel } from './dbModel';
import { ILedger, LedgerSchema } from './ledger';
import { DocumentId, DocumentIdSchema } from './documentId';
import { FindexNewsArticle } from './news';
import { TDocRef } from './docref';
import { InvestmentTransaction } from './investmentTransaction';

export enum EAssetType {
  UNDEFINED = "UNDEFINED",
//  ANY = "ANY",
  LISTED_EQUITY = "LISTED_EQUITY",
  UNLISTED_EQUITY = "UNLISTED_EQUITY",
  REAL_ESTATE = "REAL_ESTATE",
  ALTERNATIVE = "ALTERNATIVE"
}

export enum EAssetSource {
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
  transactions?: InvestmentTransaction[];
  logoBase64?: string;
  automaticLogoFailed?: boolean;
}

export const AssetSchema = ss.type({
  name: ss.string(),
  organizationNumber: ss.string(),
  contactEmail: ss.string(),
  ledger: LedgerSchema,
  assetId: ss.optional(ss.any()),
  externalId: ss.optional(ss.string()),
  type: ss.optional(ss.enums([EAssetType.UNDEFINED,EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE])),
  source: ss.optional(ss.enums([EAssetSource.IR, EAssetSource.AUTOMATIC, EAssetSource.MANUAL])),
  provider: ss.optional(ss.string()),
  parent: ss.optional(DocumentIdSchema),
  children: ss.optional(ss.array(DocumentIdSchema)),
  automatic: ss.optional(ss.boolean()),
  articles: ss.optional(ss.array(ss.any())),
  lastNewsUpdate: ss.optional(ss.any()),
  logoBase64: ss.optional(ss.string()),
  automaticLogoFailed: ss.optional(ss.boolean())
});


export type ICompany = IAsset;

export type AssetWithArticle = {
  asset: IAsset,
  article: FindexNewsArticle;
}

export type AssetNewsMap = Record<string, FindexNewsArticle[]>;
