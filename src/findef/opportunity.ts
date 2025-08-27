import { IAsset } from "./asset";
import { IAttachment } from "./attachment";
import { ICompanyProfile } from "./companyProfile";
import { TDocRef } from "./docref";
import { IOpportunityInquire } from "./opportunityInquire";
import { EOpportunityType } from "./opportunityType";
import { IValue } from "./value";

export type IOpportunity = {
  asset?: TDocRef<IAsset>;
  companyProfile?: TDocRef<ICompanyProfile>
  title?: string;
  description?: string;
  isBuyable?: boolean;
  isSellable?: boolean;
  image?: TDocRef<IAttachment>;
  opportunityType: EOpportunityType;
  inquires?: Array<TDocRef<IOpportunityInquire>>;
  minTicket?: IValue;
  industry?: string;
  headquarters?: string;
  latestSharePrice?: IValue;
  prio?: number;
  tradingWindows?: string;
}
