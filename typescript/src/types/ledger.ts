import { IValue } from './value';

export interface ILedger {
  sharesIssued: number;
  sharePrice: IValue;
}


export const isLedger = (it: any): it is ILedger => {
  return !!it && 'sharesissued' in it && 'sharePrice' in it;
}
