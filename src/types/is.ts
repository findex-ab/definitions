import { IAsset } from "./asset";
import { ICoreAsset } from "./coreAsset";
import { ICoreInvestment } from "./coreInvestment";
import { ICoreGetAssetResponse } from "./coreResponse";
import { IInvestment } from "./investment";

export const isIRAsset = (x: any): x is IAsset => {
  if (!x) return false;
  if (typeof x.__type === 'object') {
    return x.__type === 'IR';
  }
  return false;
}

export const isCoreAsset = (x: any): x is ICoreAsset => {
  if (!x) return false;
  return isIRAsset(x) === false; 
}

export const isIRInvestment = (x: any): x is IInvestment => {
  if (!x) return false;
  if (x.asset && isIRAsset(x.asset)) return true;
  return false;
}

export const isCoreInvestment = (x: any): x is ICoreInvestment => {
  if (!x) return false;
  return isIRInvestment(x) === false;
}

export const isCoreGetAssetResponse = (x: any): x is ICoreGetAssetResponse => {
  if (!x) return false;
  return !!x.investment;
}
