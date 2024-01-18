import { IAsset } from "./asset";
import { ICoreAsset } from "./coreAsset";

export const isCoreAsset = (x: any): x is ICoreAsset => {
  if (!x) return false;
  return (typeof x.id !== 'undefined' || typeof x.specifics !== 'undefined');
}

export const isIRAsset = (x: any): x is IAsset => {
  if (!x) return false;
  return isCoreAsset(x) === false;
}
