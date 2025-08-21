import { FullAsset } from "./asset";
import { FullInvestment } from "./investment";
export type ICSVImport = {
    assets: Array<FullAsset>;
    investments: Array<FullInvestment>;
};
export type ICSVImportDiff = {
    newAssets: Array<FullAsset>;
    newInvestments: Array<FullInvestment>;
    oldAssets: Array<FullAsset>;
    oldInvestments: Array<FullInvestment>;
};
