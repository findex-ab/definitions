import { TDocRef } from "./docref";
import { IUser } from "./user";
export type IOpportunityInquire = {
    user: TDocRef<IUser>;
    note?: string;
};
