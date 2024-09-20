import { TDocRef } from "./docref";
import { IUser } from "./user";
type EOpportunityType = {
    INVESTMENT_OPPORTUNITY: 'INVESTMENT_OPPORTUNITY';
    ADVISORY: 'ADVISORY';
    INSURANCE: 'INSURANCE';
    FINANCIAL_SOLUTIONS: 'FINANCIAL_SOLUTIONS';
};
export type IOpportunityInterest = {
    user: TDocRef<IUser>;
    note?: string;
    opportunityType: EOpportunityType;
};
export {};
