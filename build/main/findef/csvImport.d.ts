import { FullAsset } from "./asset";
import { FullInvestment } from "./investment";
export type ICSVImport = {
    assets: Array<FullAsset>;
    investments: Array<FullInvestment>;
};
