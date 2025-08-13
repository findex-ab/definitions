import { EAssetSubtype, EAssetType } from "./asset";
import { TDocRef } from "./docref";
import { EOpportunityType } from "./opportunityType";
import { IUser } from "./user";

export type IOpportunityInterest = {
  user: TDocRef<IUser>;
  note?: string;
  opportunityType: EOpportunityType;
  assetType?: EAssetType;
  listed?: boolean;
  assetSubtype?: EAssetSubtype
}
