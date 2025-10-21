import { ICompanyProfile } from './companyProfile';
import { TDocRef } from './docref';
import { IInvite } from './invite';
import { IUser } from './user';
export declare enum EReferralType {
    ARB = "ARB",// arbitrary
    INVESTOR = "INVESTOR",
    STARTUP = "STARTUP",
    COMPANY = "COMPANY"
}
export type IReferral = {
    firstname?: string;
    lastname?: string;
    email: string;
    createdBy: TDocRef<IUser>;
    note?: string;
    referralType?: EReferralType;
    inviteSentAt?: Date | string;
    companyProfile?: TDocRef<ICompanyProfile>;
    invite?: TDocRef<IInvite>;
};
