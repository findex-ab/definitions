import { TDocRef } from "./docref";
import { IValue, ValueSchema } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";
import { ISavedDocument } from "./savedDocument";
import { EProviderSessionStatus } from "./integrationProvider";
import { CoInvestorSchema, ICoInvestor } from "./coInvestor";

const parseDate = (value: Date | string | number): Date => {
  if (typeof value === 'object' && !!value.getDay) return value;
  try {
    if (typeof value === 'string') return new Date(Date.parse(value));
    return new Date(value);
  } catch (e) {
    console.warn(e);
    return new Date();
  }
}

export const DateField = ss.coerce(ss.date(), ss.string(), (value) => {
  return parseDate(value);
});

export enum EShareholderType {
  ANGEL_INVESTOR = "ANGEL_INVESTOR",
  EMPLOYEE = "EMPLOYEE",
  FOUNDER = "FOUNDER",
  INVESTMENT_COMPANY = "INVESTMENT_COMPANY",
  RETAIL_INVESTOR = "RETAIL_INVESTOR",
  VC = "VC",
  OTHER = "OTHER",
}

export type IInvestmentProvider = {
  status?: EProviderSessionStatus;
  name?: string;
  displayName?: string;
  externalId: number;
}

export interface IInvestment {
  asset: TDocRef<IAsset>;
  symbol?: string;
  logoBase64?: string;
  provider?: IInvestmentProvider;
  invested: IValue;
  returnValue?: IValue,
  currentValue?: IValue;
  price?: IValue;
  quantity: number;
  automatic?: boolean;
  time?: Date;
  ROI?: IValue;
  acquiredPrice?: IValue;
  lastPrice?: IValue;
  morningPriceTC?: IValue;
  marketValueTC?: IValue;
  marketValueAC?: IValue;
  pctReturn?: number;
  pctToday?: number;
  shareholderType?: EShareholderType;
  ownedBy?: {
    name?: string;
    organizationNbr?: string;
  },
  coInvestors?: ICoInvestor[];
}

export const InvestmentSchema = ss.type({
  asset: ss.string(),
  symbol: ss.optional(ss.string()),
  logoBase64: ss.optional(ss.string()),
  provider: ss.optional(ss.type({
    status: ss.optional(ss.enums([
      EProviderSessionStatus.CONNECTED,
      EProviderSessionStatus.DISCONNECTED
    ])),
    name: ss.optional(ss.string()),
    displayName: ss.optional(ss.string()),
    externalId: ss.optional(ss.number())
  })),
  invested: ValueSchema,
  returnValue: ss.optional(ValueSchema),
  currentValue: ss.optional(ValueSchema),
  price: ss.optional(ValueSchema),
  quantity: ss.number(),
  automatic: ss.optional(ss.boolean()),
  time: ss.any(),
  ROI: ss.optional(ValueSchema),
  acquiredPrice: ss.optional(ValueSchema),
  lastPrice: ss.optional(ValueSchema),
  morningPriceTC: ss.optional(ValueSchema),
  marketValueTC: ss.optional(ValueSchema),
  marketValueAC: ss.optional(ValueSchema),
  pctReturn: ss.optional(ss.number()),
  pctToday: ss.optional(ss.number()),
  shareholderType: ss.optional(ss.enums([
    EShareholderType.RETAIL_INVESTOR,
    EShareholderType.ANGEL_INVESTOR,
    EShareholderType.FOUNDER,
    EShareholderType.INVESTMENT_COMPANY,
    EShareholderType.EMPLOYEE,
    EShareholderType.VC,
    EShareholderType.OTHER
  ])),
  ownedBy: ss.optional(ss.object({
    name: ss.optional(ss.string()),
    organizationNbr: ss.optional(ss.string())
  })),
  coInvestors: ss.optional(ss.array(CoInvestorSchema))
})

export type FindexInvestment = ISavedDocument<IInvestment, string> & { asset: ISavedDocument<IAsset> };
