import { IAsset } from "./asset";
import { IAttachment } from "./attachment";
import { ICompanyProfile } from "./companyProfile";
import { TDocRef } from "./docref";
import { IntervalSchedule } from "./intervalSchedule";
import { ITimeDifference } from "./timeDifference";
import { IUser } from "./user";
import { IValue } from "./value";
export declare enum ELiabilitySubtype {
    MORTAGE = "MORTAGE",
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
    sign: number;
    subtype?: ELiabilitySubtype;
    ownedByCompany?: TDocRef<ICompanyProfile>;
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
};
