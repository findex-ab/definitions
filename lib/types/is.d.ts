import { IAsset } from "./asset";
import { ICoreAsset } from "./coreAsset";
import { ICoreInvestment } from "./coreInvestment";
import { IInvestment } from "./investment";
export declare const isIRAsset: (x: any) => x is IAsset;
export declare const isCoreAsset: (x: any) => x is ICoreAsset;
export declare const isIRInvestment: (x: any) => x is IInvestment;
export declare const isCoreInvestment: (x: any) => x is ICoreInvestment;
