import { ILedger, isLedger } from './ledger';

export interface ICompany {
  title: string;
  assetId?: string;
  ledger: ILedger;
  adminIds?: string[];
  investorIds?: string[];
}

export const isCompany = (it: any): it is ICompany => {
  return !!it && 'ledger' in it && isLedger(it.ledger);
}
