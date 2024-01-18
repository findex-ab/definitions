import { ITransaction } from "./transaction";

export interface ICoreInvestment {
  id: string;
  invested: number;
  currency: string;
  quantity: number;
  transactions: Array<ITransaction>|null;//[];
};
