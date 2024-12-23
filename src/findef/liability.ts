import { IAsset } from "./asset";
import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { IntervalSchedule } from "./intervalSchedule";
import { IInvestment } from "./investment";
import { ITimeDifference } from "./timeDifference";
import { IUser } from "./user";
import { IValue } from "./value";

export enum ELiabilitySubtype {
  MORTAGE = 'MORTAGE',
  STOCK_OPTIONS = 'STOCK_OPTIONS',
  SHARES = 'SHARES',
  REAL_ESTATE = 'REAL_ESTATE',
  GOLD = 'GOLD',
  GUARANTOR = 'GUARANTOR'
}

export enum ELiabilityType {
  DEBT = 'DEBT',
  CREDIT = 'CREDIT'
}

export type ILiability = {
  name: string;
  sign: number;
  subtype?: ELiabilitySubtype;
  parentInvestmentId?: TDocRef<IInvestment>;
  type?: ELiabilityType;
  amount: IValue;
  alreadyAmortized: IValue;
  interestRate: number;
  issueDate: Date;
  expiryDate?: Date;
  loanTerm: ITimeDifference;
  paymentSchedule?: IntervalSchedule;
  relatedAsset?: TDocRef<IAsset>;
  value: IValue;
  user: TDocRef<IUser>;
  image?: TDocRef<IAttachment>;
}
