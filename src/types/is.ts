import { IAsset } from "./asset";
import { ICoreAsset } from "./coreAsset";
import { ICoreInvestment } from "./coreInvestment";
import { IInvestment } from "./investment";

export const isCoreAsset = (x: any): x is ICoreAsset => {
  if (!x) return false;
  return ((typeof x.id !== 'undefined' && typeof x.currency !== 'undefined') || typeof x.specifics !== 'undefined');
}

export const isIRAsset = (x: any): x is IAsset => {
  if (!x) return false;
  return isCoreAsset(x) === false;
}

export const isCoreInvestment = (x: any): x is ICoreInvestment => {
  if (!x) return false;
  return (
    (typeof x.transactions !== 'undefined' && (Array.isArray(x.transactions))) ||
    (typeof x.currency !== 'undefined')
  );
}

export const isIRInvestment = (x: any): x is IInvestment => {
  if (!x) return false;
  return isCoreInvestment(x) === false;
}
