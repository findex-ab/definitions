import { IAsset } from "./asset";
import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { IntervalSchedule } from "./intervalSchedule";
import { IInvestment } from "./investment";
import { ITimeDifference } from "./timeDifference";
import { IUser } from "./user";
import { IValue } from "./value";
export declare enum ELiabilitySubtype {
    MORTAGE = "MORTAGE",
    BOND = "BOND",
    OTHER = "OTHER",
    STOCK_OPTIONS = "STOCK_OPTIONS",
    SHARES = "SHARES",
    REAL_ESTATE = "REAL_ESTATE",
    GOLD = "GOLD",
    GUARANTOR = "GUARANTOR"
}
export declare enum ELiabilityType {
    DEBT = "DEBT",
    CREDIT = "CREDIT"
}
export type ILiability = {
    name: string;
    subtype?: ELiabilitySubtype;
    parentInvestmentId?: TDocRef<IInvestment>;
    type?: ELiabilityType;
    quantity: number;
    amount: IValue;
    alreadyAmortized: IValue;
    remainingDebt?: IValue;
    interestRate: number;
    issueDate: Date;
    expiryDate?: Date;
    loanTerm: ITimeDifference;
    paymentSchedule?: IntervalSchedule;
    hasPaymentSchedule?: boolean;
    relatedAsset?: TDocRef<IAsset>;
    directory?: TDocRef<IAttachment>;
    value: IValue;
    user: TDocRef<IUser>;
    image?: TDocRef<IAttachment>;
};
type LoanDetails = {
    borrowedAmount: number;
    yearlyInterestRate: number;
    alreadyAmortized: number;
    loanIssueDate: Date;
    loanTerm: number;
    amortizationSchedule: boolean;
    paymentAmount: number;
    paymentFrequency: number;
    quantity: number;
};
export declare const calculateRemainingDebtAndInterest: (loanDetails: LoanDetails) => {
    remainingDebt: number;
    remainingInterest: number;
};
export declare const calculateLiabilityRemainingDebtAndInterest: (liab: Omit<ILiability, 'user'>, hasAmortizationSchedule?: boolean) => {
    remainingDebt: number;
    remainingInterest: number;
};
export declare const calculateLiabilityExpirationDate: (liab: Omit<ILiability, 'user'>) => Date | null;
export {};
