import { EInvestorStatus } from "./investorStatus";
import { IValue } from "./value";


export interface IInvestor {
  id?: string;
  userId?: string;
  assetIds: string[];
  firstName?: string;
  lastName?: string;
  status: EInvestorStatus;

  shares: number;
  stake: IValue;
  invested: IValue;
  roi: IValue;
  totalValue?: IValue;
}


export const isInvestor = (it: any): it is IInvestor => {
  return 'firstName' in it && 'lastName' in it;
}
