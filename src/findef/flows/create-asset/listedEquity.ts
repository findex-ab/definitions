import { EAssetSubtype } from "../../asset";
import { SelectOption } from "../types/selectOption";

export const AVAILABLE_LISTED_EQUITY_SUBTYPES: SelectOption[] = [
  { value: EAssetSubtype.STOCK, label: 'Stock' },
  { value: EAssetSubtype.STOCK_OPTIONS, label: 'Stock Options', disabled: true },
  { value: EAssetSubtype.CERTIFICATE, label: 'Certificate' },
  { value: EAssetSubtype.FUND, label: 'Fund' },
  { value: EAssetSubtype.ETF, label: 'ETF' }
];
