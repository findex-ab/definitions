import { IAttachment } from "./attachment"
import { TDocRef } from "./docref"
import { IUser } from "./user"

export type ICompanyProfile = {
  symbol: string
  price: number
  beta: number
  volAvg: number
  mktCap: number
  lastDiv: number
  range: string
  changes: number
  companyName: string
  currency: string
  cik: string
  isin: string
  cusip: string
  exchange: string
  exchangeShortName: string
  industry: string
  website: string
  description: string
  CEO: string
  sector: string
  country: string
  fullTimeEmployees: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  DCF_diff: number
  DCF: number
  image?: TDocRef<IAttachment>;
  ipoDate: string
  defaultImage: boolean
  isEtf: boolean
  isActivelyTrading: boolean
  isFund: boolean
  isAdr: boolean
  uid?: string;
  listed?: boolean;
  manuallyAdded?: boolean;
  createdBy?: TDocRef<IUser>;
} 
