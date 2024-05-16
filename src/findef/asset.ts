import * as ss from 'superstruct';
import { IDBModel } from './dbModel';
import { ILedger, LedgerSchema } from './ledger';
import { DocumentId, DocumentIdSchema } from './documentId';
import { FindexNewsArticle } from './news';
import { TDocRef } from './docref';
import { InvestmentTransaction } from './investmentTransaction';
import { IntegrationProvider } from './integrationProvider';
import { IUser } from './user';

export enum EAssetType {
  UNDEFINED = "UNDEFINED",
  EQUITY = "EQUITY",
  REAL_ESTATE = "REAL_ESTATE",
  ALTERNATIVE = "ALTERNATIVE"
}

export enum EAssetSource {
  IR = "IR",
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL"
}

export enum EAssetSubtype {
  // EQUITIES
  STOCK = "STOCK",
  FUND = "FUND",
  BOND = "BOND",
  ETF = "ETF",
  PENSION = "PENSION",
  // REAL ESTATE
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  BUILDING = "BUILDING",
  PARKING = "PARKING",
  COMMERCIAL = "COMMERCIAL",
  // ALTERNATIVES
  CRYPTO = "CRYPTO",
  COMMODITY = "COMMODITY",
  WATCH = "WATCH",
  JEWELLRY = "JEWELLRY",
  GEMSTONE = "GEMSTONE",
  LAND = "LAND",
  CAR = "CAR",
  BOAT = "BOAT",
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
  listed: boolean;
  assetId?: string;
  externalId?: string;
  type?: EAssetType;
  subtypes?: EAssetSubtype[];
  source?: EAssetSource;
  provider?: IntegrationProvider; // this is how it's stored in the database
  symbol?: string;
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
  };
  createdBy?: TDocRef<IUser>;
}

export const AssetSchema = ss.type({
  name: ss.string(),
  organizationNumber: ss.optional(ss.string()),
  contactEmail: ss.string(),
  ledger: LedgerSchema,
  listed: ss.optional(ss.boolean()),
  assetId: ss.optional(ss.any()),
  externalId: ss.optional(ss.string()),
  type: ss.optional(ss.enums([
    EAssetType.UNDEFINED,
    EAssetType.EQUITY,
    EAssetType.REAL_ESTATE,
    EAssetType.ALTERNATIVE
  ])),
  subtypes: ss.optional(ss.array(ss.enums([
    EAssetSubtype.STOCK,
    EAssetSubtype.FUND,
    EAssetSubtype.BOND,
    EAssetSubtype.PENSION,
    EAssetSubtype.ETF,
    EAssetSubtype.APARTMENT,
    EAssetSubtype.HOUSE,
    EAssetSubtype.BUILDING,
    EAssetSubtype.PARKING,
    EAssetSubtype.COMMERCIAL,
    EAssetSubtype.CRYPTO,
    EAssetSubtype.COMMODITY,
    EAssetSubtype.WATCH,
    EAssetSubtype.JEWELLRY,
    EAssetSubtype.GEMSTONE,
    EAssetSubtype.LAND,
    EAssetSubtype.CAR,
    EAssetSubtype.ART,
    EAssetSubtype.FOREST_INVESTMENT,
    EAssetSubtype.WINE,
    EAssetSubtype.SNEAKERS,
    EAssetSubtype.PRIVATE_DEBT,
    EAssetSubtype.PRIVATE_EQUITY,
    EAssetSubtype.HEDGE_FUND,
    EAssetSubtype.COLLECTIBLE,
    EAssetSubtype.SAVINGS_ACCOUNT,
    EAssetSubtype.CHECKING_ACCOUNT,
    EAssetSubtype.OTHER
  ]))),
  source: ss.optional(ss.enums([EAssetSource.IR, EAssetSource.AUTOMATIC, EAssetSource.MANUAL])),
  provider: ss.optional(ss.string()),
  symbol: ss.optional(ss.string()),
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
  })),
  createdBy: ss.optional(ss.string())
});


export type ICompany = IAsset;

export type AssetWithArticle = {
  asset: IAsset,
  article: FindexNewsArticle;
}

export type AssetNewsMap = Record<string, FindexNewsArticle[]>;
