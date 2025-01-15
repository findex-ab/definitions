import { EAssetSubtype } from "../../asset";
import { SelectOption } from "../types/selectOption";

export const AVAILABLE_CASH_SUBTYPES: SelectOption[] = [
  { value: EAssetSubtype.CHECKING_ACCOUNT, label: 'Checking Account' },
  { value: EAssetSubtype.SAVINGS_ACCOUNT, label: 'Savings Account' },
  { value: EAssetSubtype.INVESTMENT_ACCOUNT, label: 'Investment Account' },
  { value: EAssetSubtype.NO_ACCOUNT, label: 'No Account' }
];
