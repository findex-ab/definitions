import { EAssetSubtype } from "../../asset";
export const AVAILABLE_CASH_SUBTYPES = [
    { value: EAssetSubtype.CHECKING_ACCOUNT, label: 'Checking Account' },
    { value: EAssetSubtype.SAVINGS_ACCOUNT, label: 'Savings Account' },
    { value: EAssetSubtype.INVESTMENT_ACCOUNT, label: 'Investment Account' },
    { value: EAssetSubtype.NO_ACCOUNT, label: 'No Account' }
];
