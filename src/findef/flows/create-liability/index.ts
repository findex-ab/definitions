import { ELiabilitySecurity, ELiabilityType } from "../../liability";
import { SelectOption } from "../types/selectOption";

export const AVAILABLE_LIABILITY_SECURITY_OPTIONS: SelectOption[] = [
  { value: ELiabilitySecurity.GOLD, label: 'Gold' },
  { value: ELiabilitySecurity.GUARANTOR, label: 'Guarantor' },
  { value: ELiabilitySecurity.MORTAGE, label: 'Mortage' },
  { value: ELiabilitySecurity.REAL_ESTATE, label: 'Real Estate' },
  { value: ELiabilitySecurity.SHARES, label: 'Shares' },
  { value: ELiabilitySecurity.STOCK_OPTIONS, label: 'Stock Options' },
];

export const AVAILABLE_LIABILITY_TYPES: SelectOption[] = [
  { value: ELiabilityType.CREDIT, label: 'Credit' },
  { value: ELiabilityType.DEBT, label: 'Debt' },
];
