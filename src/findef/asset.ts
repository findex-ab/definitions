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

export enum EAssetSubType {
  CRYPTO = "CRYPTO",
  COMMODITY = "COMMODITY",
  WATCH = "WATCH",
  JEWELLRY = "JEWELLRY",
  GEMSTONE = "GEMSTONE",
  LAND = "LAND",
  CAR = "CAR",
  ART = "ART",
  FOREST_INVESTMENT = "FOREST_INVESTMENT",
  WINE = "WINE",
  SNEAKERS = "SNEAKERS",
  PRIVATE_DEBT = "PRIVATE_DEBT",
  PRIVATE_EQUITY = "PRIVATE_EQUITY",
  HEDGE_FUND = "HEDGE_FUND",
  COLLECTIBLE = "COLLECTIBLE",
  SAVINGS_ACCOUNT = "SAVINGS_ACCOUNT",
  CHECKING_ACCOUNT = "CHECKING_ACCOUNT",
  OTHER = "OTHER"
}

export interface IAsset extends IDBModel {
  name: string;
  organizationNumber?: string;
  contactEmail: string;
  ledger: ILedger;
  assetId?: string;
  externalId?: string;
  type?: EAssetType;
  subType?: EAssetSubType;
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
  realEstateInformation?: {
    type?: string;
    country?: string;
    city?: string;
    address?: string;
  }
}

export const AssetSchema = ss.type({
  name: ss.string(),
  organizationNumber: ss.optional(ss.string()),
  contactEmail: ss.string(),
  ledger: LedgerSchema,
  assetId: ss.optional(ss.any()),
  externalId: ss.optional(ss.string()),
  type: ss.optional(ss.enums([EAssetType.UNDEFINED,EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE])),
  subType: ss.optional(ss.enums([
    EAssetSubType.CRYPTO,
    EAssetSubType.COMMODITY,
    EAssetSubType.WATCH,
    EAssetSubType.JEWELLRY,
    EAssetSubType.GEMSTONE,
    EAssetSubType.LAND,
    EAssetSubType.CAR,
    EAssetSubType.ART,
    EAssetSubType.FOREST_INVESTMENT,
    EAssetSubType.WINE,
    EAssetSubType.SNEAKERS,
    EAssetSubType.PRIVATE_DEBT,
    EAssetSubType.PRIVATE_EQUITY,
    EAssetSubType.HEDGE_FUND,
    EAssetSubType.COLLECTIBLE,
    EAssetSubType.SAVINGS_ACCOUNT,
    EAssetSubType.CHECKING_ACCOUNT,
    EAssetSubType.OTHER
  ])),
  source: ss.optional(ss.enums([EAssetSource.IR, EAssetSource.AUTOMATIC, EAssetSource.MANUAL])),
  provider: ss.optional(ss.string()),
  parent: ss.optional(DocumentIdSchema),
  children: ss.optional(ss.array(DocumentIdSchema)),
  automatic: ss.optional(ss.boolean()),
  articles: ss.optional(ss.array(ss.any())),
  lastNewsUpdate: ss.optional(ss.any()),
  logoBase64: ss.optional(ss.string()),
  automaticLogoFailed: ss.optional(ss.boolean()),
  realEstateInformation: ss.optional(ss.object({
    type: ss.optional(ss.string()),
    country: ss.optional(ss.string()),
    city: ss.optional(ss.string()),
    address: ss.optional(ss.string())
  }))
});


export type ICompany = IAsset;

export type AssetWithArticle = {
  asset: IAsset,
  article: FindexNewsArticle;
}

export type AssetNewsMap = Record<string, FindexNewsArticle[]>;
