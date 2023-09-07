import { EInvestorStatus } from "./investorStatus";
import { IValue } from "./value";

export interface IInvestor {
  id: string;
  userId: string;
  assetId: string;
  name: string;
  status: EInvestorStatus;

  shares: number;
  stake: IValue;
  invested: IValue;
  roi: IValue;
}
