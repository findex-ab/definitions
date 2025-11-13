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
import { ICommodityQuote } from './commodityQuote';
import { ICompanyProfile } from './companyProfile';
import { CONVERSION_CURRENCY } from './currency';
import { ILogoInformation } from './logoInformation';
import { IScoredImage } from './scoredImage';
import { IEmbeddingVector } from './embedding';
import { ICompanySector } from './companySector';

export enum EAssetType {
  UNDEFINED = 'UNDEFINED',
  EQUITY = 'EQUITY',
  REAL_ESTATE = 'REAL_ESTATE',
  ALTERNATIVE = 'ALTERNATIVE',
  CRYPTO = 'CRYPTO',
  COMMODITY = 'COMMODITY',
  CASH = 'CASH',
  DEBT = 'DEBT',
}

export enum EAssetSource {
  IR = 'IR',
  AUTOMATIC = 'AUTOMATIC',
  MANUAL = 'MANUAL'
}

export enum EAssetMaintainer {
  IR = 'IR',
  MANUAL = 'MANUAL',
  TICKER = 'TICKER',
  PROVIDER = 'PROVIDER'
}

export enum EAssetAutomationLevel {
  MANUAL = 'MANUAL',
  SEMI_AUTOMATIC = 'SEMI_AUTOMATIC',
  AUTOMATIC = 'AUTOMATIC',
}

export enum EAssetSubtype {
  // EQUITIES
  STOCK = 'STOCK',
  STOCK_OPTIONS = 'STOCK_OPTIONS',
  FUND = 'FUND',
  BOND = 'BOND',
  ETF = 'ETF',
  PENSION = 'PENSION',
  LOAN = 'LOAN',
  CERTIFICATE = 'CERTIFICATE',
  // REAL ESTATE
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  BUILDING = 'BUILDING',
  PARKING = 'PARKING',
  COMMERCIAL = 'COMMERCIAL',
  // ALTERNATIVES
  CRYPTO = 'CRYPTO',
  NFT = 'NFT',
  COMMODITY = 'COMMODITY',
  WATCH = 'WATCH',
  JEWELLRY = 'JEWELLRY',
  GEMSTONE = 'GEMSTONE',
  LAND = 'LAND',
  CAR = 'CAR',
  BOAT = 'BOAT',
  ART = 'ART',
  FOREST_INVESTMENT = 'FOREST_INVESTMENT',
  WINE = 'WINE',
  SNEAKERS = 'SNEAKERS',
  PRIVATE_DEBT = 'PRIVATE_DEBT',
  PRIVATE_EQUITY = 'PRIVATE_EQUITY',
  HEDGE_FUND = 'HEDGE_FUND',
  COLLECTIBLE = 'COLLECTIBLE',
  SAVINGS_ACCOUNT = 'SAVINGS_ACCOUNT',
  CHECKING_ACCOUNT = 'CHECKING_ACCOUNT',
  INVESTMENT_ACCOUNT = 'INVESTMENT_ACCOUNT',
  BANK_ACCOUNT = 'BANK_ACCOUNT',
  NO_ACCOUNT = 'NO_ACCOUNT',
  CASH = 'CASH',
  OTHER = 'OTHER',
  WEB_DOMAIN = 'WEB_DOMAIN'
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

export enum EAssetWidget {
  LATEST_SHARE_PRICE = 'LATEST_SHARE_PRICE',
  OUTSTANDING_SHARES = 'OUTSTANDING_SHARES',
  EQUITY_RAISED = 'EQUITY_RAISED',
  COMPANY_VALUATION = 'COMPANY_VALUATION',
  OWNERSHIP_DISTRIBUTION = 'OWNERSHIP_DISTRIBUTION',
  INVESTOR_UPDATES = 'INVESTOR_UPDATES',
  SHARE_LEDGER = 'SHARE_LEDGER'
}

export interface IAsset extends IDBModel {
  name: string;
  enabledWidgets?: EAssetWidget[];
  providerImport?: TDocRef<IProviderImport>;
  organizationNumber?: string;
  uid?: string;
  zip?: string;
  contactEmail: string;
  ledger: ILedger;
  listed: boolean;
  assetId?: string;
  externalId?: string;
  type?: EAssetType;
  subtypes?: EAssetSubtype[];
  tags?: string[];
  searchTags?: string[];
  isBankAccount?: boolean;
  source?: EAssetSource;
  maintained?: EAssetMaintainer;
  automation?: EAssetAutomationLevel;
  provider?: IntegrationProvider; // this is how it's stored in the database
  symbol?: string;
  parentId?: TDocRef<IAsset>;
  childrenIds?: DocumentId[];
  automatic?: boolean;
  articles?: TDocRef<FindexNewsArticle>[];
  lastNewsUpdate?: Date;
  transactions?: InvestmentTransaction[];
  image?: TDocRef<IAttachment>;
  imageSuggestion?: TDocRef<IScoredImage>;
  logos?: Array<TDocRef<ILogoInformation>>;
  directory?: TDocRef<IAttachment>;
  publicDirectory?: TDocRef<IAttachment>;
  shareholderDirectories?: Array<TDocRef<IAttachment>>;
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
  interest?: number;
  isMock?: boolean;
  isFromCSV?: boolean;
  ticker?: ITicker;
  cryptoQuote?: TDocRef<ICryptoQuote>;
  commodityQuote?: TDocRef<ICommodityQuote>;
  companyProfile?: TDocRef<ICompanyProfile>;
  stock?: TDocRef<IStock>;
  hasEmbedding?: boolean;
  embeddingPointIds?: number[];
  embeddings?: Array<TDocRef<IEmbeddingVector>>;
  vectorIds?: string[];
  description?: string;
  sectors?: ICompanySector[];
  bannerColor?: string;
}

export const AssetSchema = ss.type({
  name: ss.string(),
  enabledWidgets: ss.optional(ss.array(ss.enums(Object.keys(EAssetWidget)))),
  providerImport: ss.optional(ss.any()),
  organizationNumber: ss.optional(ss.string()),
  contactEmail: ss.string(),
  ledger: LedgerSchema,
  listed: ss.optional(ss.boolean()),
  assetId: ss.optional(ss.any()),
  externalId: ss.optional(ss.string()),
  uid: ss.optional(ss.string()),
  type: ss.optional(ss.enums(Object.keys(EAssetType))),
  subtypes: ss.optional(ss.array(ss.enums(Object.keys(EAssetSubtype)))),
  tags: ss.optional(ss.array(ss.string())),
  searchTags: ss.optional(ss.array(ss.string())),
  isBankAccount: ss.optional(ss.boolean()),
  source: ss.optional(ss.enums(Object.keys(EAssetSource))),
  maintained: ss.optional(ss.enums(Object.keys(EAssetMaintainer))),
  provider: ss.optional(ss.string()),
  symbol: ss.optional(ss.string()),
  parent: ss.optional(DocumentIdSchema),
  children: ss.optional(ss.array(DocumentIdSchema)),
  automatic: ss.optional(ss.boolean()),
  articles: ss.optional(ss.array(ss.any())),
  lastNewsUpdate: ss.optional(ss.any()),
  image: ss.optional(ss.string()),
  automaticLogoFailed: ss.optional(ss.boolean()),
  realEstateInformation: ss.optional(
    ss.object({
      type: ss.optional(ss.string()),
      country: ss.optional(ss.string()),
      city: ss.optional(ss.string()),
      address: ss.optional(ss.string()),
    }),
  ),
  realEstateType: ss.optional(ss.string()),
  country: ss.optional(ss.string()),
  city: ss.optional(ss.string()),
  address: ss.optional(ss.string()),
  assetAdmins: ss.optional(ss.array(DocumentIdSchema)),
  currency: ss.optional(ss.string()),
  interest: ss.optional(ss.number()),
  createdBy: ss.optional(ss.string()),
  description: ss.optional(ss.string()),
  ticker: ss.optional(DocumentIdSchema),
  cryptoQuote: ss.optional(DocumentIdSchema),
  bannerColor: ss.optional(ss.string())
});

export type FullAsset = Omit<IAsset, 'commodityQuote' | 'cryptoQuote' | 'companyProfile'> & {
  commodityQuote?: ICommodityQuote | ISavedDocument<ICommodityQuote, string>;
  cryptoQuote?: ICryptoQuote | ISavedDocument<ICryptoQuote, string>;
  companyProfile?: ICompanyProfile | ISavedDocument<ICompanyProfile, string>;
}

export type AssetWithArticle = {
  asset: IAsset;
  article: FindexNewsArticle;
};

export type AssetNewsMap = Record<string, FindexNewsArticle[]>;

export const emptyAsset: IAsset = {
  _id: '____',
  name: '',
  contactEmail: '',
  ledger: {
    sharesIssued: 0,
    sharePrice: emptyValue,
  },
  listed: false,
};

export type PotentialAsset = Omit<
  ISavedDocument<IAsset>,
  '_id' | 'externalId'
> & { externalId: string };

export const assetTypeCanBeListedAndUnlisted = (
  assetType: EAssetType,
): boolean => {
  return [EAssetType.EQUITY].includes(assetType);
};

export const assetHasAutomaticTicker = (asset: IAsset): boolean => {
  if (asset.companyProfile && typeof asset.companyProfile === 'object') {
    const companyProfile = asset.companyProfile as ICompanyProfile;
    if (companyProfile.manuallyAdded) return false;
  }

  if (asset.commodityQuote && typeof asset.commodityQuote === 'object') {
    const commodity = asset.commodityQuote as ICommodityQuote;
    if (commodity.manuallyAdded) return false;
  }

  if (asset.cryptoQuote && typeof asset.cryptoQuote === 'object') {
    const crypto = asset.cryptoQuote as ICryptoQuote;
    if (crypto.manuallyAdded) return false;
  }

  if (
    asset.ticker ||
    asset.provider ||
    asset.providerImport ||
    asset.listed === true ||
    asset.type === EAssetType.COMMODITY ||
    asset.type === EAssetType.CRYPTO ||
    asset.cryptoQuote
  )
    return true;
  if (asset.companyProfile) {
    if (typeof asset.companyProfile === 'object') {
      const profile = asset.companyProfile as ICompanyProfile;
      if (profile.manuallyAdded === true || profile.listed === false)
        return false;
      return true;
    }
  }
  return false;
};

export const getAssetMaintainedType = (asset: Partial<IAsset>): EAssetMaintainer => {
  if (asset.maintained) return asset.maintained;

  if (asset.companyProfile && typeof asset.companyProfile === 'object') {
    const companyProfile = asset.companyProfile as ICompanyProfile;
    if (companyProfile.manuallyAdded) return EAssetMaintainer.MANUAL;
    return EAssetMaintainer.TICKER;
  }

  if (asset.commodityQuote && typeof asset.commodityQuote === 'object') {
    const commodity = asset.commodityQuote as ICommodityQuote;
    if (commodity.manuallyAdded) return EAssetMaintainer.MANUAL;
    return EAssetMaintainer.TICKER;
  }
  if (asset.cryptoQuote && typeof asset.cryptoQuote === 'object') {
    const crypto = asset.cryptoQuote as ICryptoQuote;
    if (crypto.manuallyAdded) return EAssetMaintainer.MANUAL;
    return EAssetMaintainer.TICKER;
  }
  if (asset.type === EAssetType.COMMODITY) return EAssetMaintainer.TICKER;
  if (asset.provider || asset.providerImport) return EAssetMaintainer.PROVIDER;
  if (asset.cryptoQuote) return EAssetMaintainer.TICKER;
  if (asset.companyProfile && typeof asset.companyProfile === 'object') {
    const profile = asset.companyProfile as ICompanyProfile;
    if (profile.listed) return EAssetMaintainer.TICKER;
  }
  return EAssetMaintainer.MANUAL;
}

export const getAssetMaintainedText = (asset: IAsset): string => {
  const maintained = getAssetMaintainedType(asset);
  switch (maintained) {
    case EAssetMaintainer.IR: return 'Investor Relations';
    case EAssetMaintainer.PROVIDER: return 'Provider';
    case EAssetMaintainer.TICKER: return 'Ticker';
    default:
    case EAssetMaintainer.MANUAL: return 'Manual';
  }
}

export const getAssetCurrency = (asset: Partial<IAsset>): string => {
  if (asset.ledger && asset.ledger.sharePrice && typeof asset.ledger.sharePrice.type === 'string') return asset.ledger.sharePrice.type;
  const companyProfile = (asset.companyProfile as ICompanyProfile | null);
  if (companyProfile && typeof companyProfile === 'object') {
    if (typeof companyProfile.currency === 'string') return companyProfile.currency;
  }
  const crypto = (asset.cryptoQuote as ICryptoQuote | null);
  if (crypto && typeof crypto === 'object') {
    if (typeof crypto.tickerFrom === 'string') return crypto.tickerFrom;
  }
  if (typeof asset.currency === 'string') return asset.currency;
  return CONVERSION_CURRENCY;
}


export const evaluateAssetAutomationLevel = (asset: FullAsset): EAssetAutomationLevel => {
  if (asset.commodityQuote) {
    if (asset.commodityQuote.manuallyAdded) return EAssetAutomationLevel.MANUAL;
    return EAssetAutomationLevel.SEMI_AUTOMATIC;
  }
  if (asset.cryptoQuote) {
    if (asset.cryptoQuote.manuallyAdded) return EAssetAutomationLevel.MANUAL;
    return EAssetAutomationLevel.SEMI_AUTOMATIC;
  }
  if (asset.companyProfile) {
    if (asset.companyProfile.manuallyAdded || (asset.companyProfile.isActivelyTrading !== true)) return EAssetAutomationLevel.MANUAL;
    return EAssetAutomationLevel.SEMI_AUTOMATIC;
  }

  if (asset.provider || asset.providerImport) return EAssetAutomationLevel.AUTOMATIC;

  return EAssetAutomationLevel.MANUAL;
}
