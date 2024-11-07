import { EAssetSubtype } from "../../asset";
export const AVAILABLE_LISTED_EQUITY_SUBTYPES = [
    { value: EAssetSubtype.STOCK, label: 'Stock' },
    { value: EAssetSubtype.STOCK_OPTIONS, label: 'Stock Options', disabled: true },
    { value: EAssetSubtype.FUND, label: 'Fund' }
];
