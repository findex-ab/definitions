import { IAsset } from "./asset";
import { IAttachment } from "./attachment";
import { TDocRef } from "./docref";
import { EOpportunityType } from "./opportunityType";

export type IOpportunity = {
  asset?: TDocRef<IAsset>;
  title?: string;
  description?: string;
  isBuyable?: boolean;
  isSellable?: boolean;
  image?: TDocRef<IAttachment>;
  opportunityType: EOpportunityType;
}
