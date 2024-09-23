import * as ss from 'superstruct';
import { IDBModel } from './dbModel';
import { ILedger, LedgerSchema } from './ledger';
import { DocumentId, DocumentIdSchema } from './documentId';
import { FindexNewsArticle } from './news';
import { TDocRef } from './docref';
import { InvestmentTransaction } from './investmentTransaction';
import { IntegrationProvider } from './integrationProvider';
import { IUser } from './user';
import { IProviderImport } from './providerImport';
import { IAttachment } from './attachment';
import { emptyValue } from './value';
import { IAssetAdmin } from './assetAdmin';
import { ISavedDocument } from './savedDocument';
import { ITicker } from './ticker';
import { ICryptoQuote } from './cryptoQuote';
import { IStock } from './stock';
import { ITicCompany } from './ticCompany';
import { ICommodityQuote } from './commodityQuote';
import { ICompanyProfile } from './companyProfile';

export enum EAssetType {
  UNDEFINED = "UNDEFINED",
  EQUITY = "EQUITY",
  REAL_ESTATE = "REAL_ESTATE",
  ALTERNATIVE = "ALTERNATIVE",
  CRYPTO = "CRYPTO",
  COMMODITY = "COMMODITY",
  CASH = "CASH",
  DEBT = "DEBT"
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
  LOAN = "LOAN",
  CERTIFICATE = "CERTIFICATE",
  // REAL ESTATE
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  BUILDING = "BUILDING",
  PARKING = "PARKING",
  COMMERCIAL = "COMMERCIAL",
  // ALTERNATIVES
  CRYPTO = "CRYPTO",
  NFT = "NFT",
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
  INVESTMENT_ACCOUNT = "INVESTMENT_ACCOUNT",
  BANK_ACCOUNT = "BANK_ACCOUNT",
  CASH = "CASH",
  OTHER = "OTHER"
}

export enum EAssetIndustry {
  AGRICULTURE = 'AGRICULTURE',
  AUTOMOTIVE = 'AUTOMOTIVE',
  BANKING = 'BANKING',
  BIOTECHNOLOGY = 'BIOTECHNOLOGY',
  CONSTRUCTION = 'CONSTRUCTION',
  CONSUMER_GOODS = 'CONSUMER_GOODS',
  EDUCATION = 'EDUCATION',
  ENERGY = 'ENERGY',
  ENTERTAINMENT = 'ENTERTAINMENT',
  FINANCIAL_SERVICES = 'FINANCIAL_SERVICES',
  FINTECH = 'FINTECH',
  FOOD_BEVERAGE = 'FOOD_BEVERAGE',
  GOVERNMENT = 'GOVERNMENT',
  HEALTHCARE = 'HEALTHCARE',
  HOSPITALITY = 'HOSPITALITY',
  INFORMATION_TECHNOLOGY = 'INFORMATION_TECHNOLOGY',
  INSURANCE = 'INSURANCE',
  MANUFACTURING = 'MANUFACTURING',
  MEDIA = 'MEDIA',
  MINING = 'MINING',
  PHARMACEUTICAL = 'PHARMACEUTICAL',
  PROPTECH = 'PROPTECH',
  REAL_ESTATE = 'REAL_ESTATE',
  RETAIL = 'RETAIL',
  TELECOMMUNICATIONS = 'TELECOMMUNICATIONS',
  TRANSPORTATION = 'TRANSPORTATION',
  UTILITIES = 'UTILITIES',
}

export interface IAsset extends IDBModel {
  name: string;
  providerImport?: TDocRef<IProviderImport>;
  organizationNumber?: string;
  contactEmail: string;
  ledger: ILedger;
  listed: boolean;
  assetId?: string;
  externalId?: string;
  type?: EAssetType;
  subtypes?: EAssetSubtype[];
  tags?: string[];
  isBankAccount?: boolean;
  source?: EAssetSource;
  provider?: IntegrationProvider; // this is how it's stored in the database
  symbol?: string;
  parentId?: DocumentId;
  childrenIds?: DocumentId[];
  automatic?: boolean;
  articles?: TDocRef<FindexNewsArticle>[];
  lastNewsUpdate?: Date;
  transactions?: InvestmentTransaction[];
  image?: TDocRef<IAttachment>;
  directory?: TDocRef<IAttachment>;
  automaticLogoFailed?: boolean;
  realEstateInformation?: {
    type?: string;
    country?: string;
    city?: string;
    address?: string;
  };
  realEstateType?: string;
  country?: string;
  city?: string;
  address?: string;
  industry?: EAssetIndustry;
  websiteURL?: string;
  linkedInURL?: string;
  assetAdmins?: TDocRef<IAssetAdmin>[];
  createdBy?: TDocRef<IUser>;
  currency?: string;
  isMock?: boolean;
  ticker?: ITicker;
  cryptoQuote?: TDocRef<ICryptoQuote>;
  commodityQuote?: TDocRef<ICommodityQuote>;
  companyProfile?: TDocRef<ICompanyProfile>;
  stock?: TDocRef<IStock>;
  ticCompany?: ITicCompany;
}

export const AssetSchema = ss.type({
  name: ss.string(),
  providerImport: ss.optional(ss.any()),
  organizationNumber: ss.optional(ss.string()),
  contactEmail: ss.string(),
  ledger: LedgerSchema,
  listed: ss.optional(ss.boolean()),
  assetId: ss.optional(ss.any()),
  externalId: ss.optional(ss.string()),
  type: ss.optional(ss.enums(Object.keys(EAssetType))),
  subtypes: ss.optional(ss.array(ss.enums(Object.keys(EAssetSubtype)))),
  tags: ss.optional(ss.array(ss.string())),
  isBankAccount: ss.optional(ss.boolean()),
  source: ss.optional(ss.enums(Object.keys(EAssetSource))),
  provider: ss.optional(ss.string()),
  symbol: ss.optional(ss.string()),
  parent: ss.optional(DocumentIdSchema),
  children: ss.optional(ss.array(DocumentIdSchema)),
  automatic: ss.optional(ss.boolean()),
  articles: ss.optional(ss.array(ss.any())),
  lastNewsUpdate: ss.optional(ss.any()),
  image: ss.optional(ss.string()),
  automaticLogoFailed: ss.optional(ss.boolean()),
  realEstateInformation: ss.optional(ss.object({
    type: ss.optional(ss.string()),
    country: ss.optional(ss.string()),
    city: ss.optional(ss.string()),
    address: ss.optional(ss.string())
  })),
  realEstateType: ss.optional(ss.string()),
  country: ss.optional(ss.string()),
  city: ss.optional(ss.string()),
  address: ss.optional(ss.string()),
  assetAdmins: ss.optional(ss.array(DocumentIdSchema)),
  currency: ss.optional(ss.string()),
  createdBy: ss.optional(ss.string()),
  ticker: ss.optional(DocumentIdSchema),
  cryptoQuote: ss.optional(DocumentIdSchema),
  ticCompany: ss.optional(DocumentIdSchema),
});

export type AssetWithArticle = {
  asset: IAsset,
  article: FindexNewsArticle;
}

export type AssetNewsMap = Record<string, FindexNewsArticle[]>;


export const emptyAsset: IAsset = {
  _id: '____',
  name: '',
  contactEmail: '',
  ledger: {
    sharesIssued: 0,
    sharePrice: emptyValue,
  },
  listed: false
}


export type PotentialAsset = Omit<ISavedDocument<IAsset>, '_id' | 'externalId'> & { externalId: string; }
