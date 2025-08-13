import { TDocRef } from "./docref";
import { EOpportunityType } from "./opportunityType";
import { IUser } from "./user";

export type IOpportunityInterest = {
  user: TDocRef<IUser>;
  note?: string;
  opportunityType: EOpportunityType;
  requestedType: string;
}
