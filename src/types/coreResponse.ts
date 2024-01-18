import { ICoreAsset } from "./coreAsset";
import { ICoreInvestment } from "./coreInvestment";

export interface ICoreGetAssetResponse {
  investment: ICoreInvestment; 
  asset: ICoreAsset; 
  currentValue: {
    amount: number;
    currency: string;
  };
  roi: number;
}
