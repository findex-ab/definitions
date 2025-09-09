import { IAsset } from "./asset";
import { ICompanyProfile } from "./companyProfile";
import { TDocRef } from "./docref";
import { IValue } from "./value";
export type IFinanceRound = {
    date: Date;
    companyProfile?: TDocRef<ICompanyProfile>;
    asset?: TDocRef<IAsset>;
    sharePrice?: IValue;
    valuation?: IValue;
    type: EFinanceRoundType;
};
export declare enum EFinanceRoundType {
    SHARE_ISSUE = "SHARE_ISSUE"
}
