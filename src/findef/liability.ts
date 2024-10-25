import { IAttachment } from "./attachment";
import { ICompanyProfile } from "./companyProfile";
import { TDocRef } from "./docref";
import { IntervalSchedule } from "./intervalSchedule";
import { IUser } from "./user";
import { IValue } from "./value";

export enum ELiabilitySecurity {
  MORTAGE = 'MORTAGE',
  STOCK_OPTIONS = 'STOCK_OPTIONS',
  SHARES = 'SHARES',
  REAL_ESTATE = 'REAL_ESTATE',
  GOLD = 'GOLD',
  GUARANTOR = 'GUARANTOR'
}

export type ILiability = {
  name: string;
  sign: number;
  security?: ELiabilitySecurity;
  ownedByCompany?: TDocRef<ICompanyProfile>;
  amount: IValue;
  interestRate: number;
  issueDate: Date;
  expiryDate: Date;
  paymentSchedule?: IntervalSchedule;
  value: IValue;
  user: TDocRef<IUser>;
  image?: TDocRef<IAttachment>;
}
