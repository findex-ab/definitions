import { EAssetSubtype } from "../../asset";
import { SelectOption } from "../types/selectOption";

export const AVAILABLE_UNLISTED_EQUITY_SUBTYPES: SelectOption[] = [
  { value: EAssetSubtype.STOCK, label: 'Stock' },
  { value: EAssetSubtype.STOCK_OPTIONS, label: 'Stock Options', disabled: true },
  { value: EAssetSubtype.FUND, label: 'Fund' }
];
