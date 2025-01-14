import { ELiabilitySubtype, ELiabilityType } from "../../liability";
import { SelectOption } from "../types/selectOption";

export const AVAILABLE_LIABILITY_SUBTYPES: SelectOption[] = [
 // { value: ELiabilitySubtype.GOLD, label: 'Gold' },
 // { value: ELiabilitySubtype.GUARANTOR, label: 'Guarantor' },
  { value: ELiabilitySubtype.MORTAGE, label: 'Mortage' },
  { value: ELiabilitySubtype.BOND, label: 'Bond' },
  { value: ELiabilitySubtype.OTHER, label: 'Other' },
//  { value: ELiabilitySubtype.REAL_ESTATE, label: 'Real Estate' },
  //{ value: ELiabilitySubtype.SHARES, label: 'Shares' },
  //{ value: ELiabilitySubtype.STOCK_OPTIONS, label: 'Stock Options' },
];

export const AVAILABLE_LIABILITY_TYPES: SelectOption[] = [
  { value: ELiabilityType.CREDIT, label: 'Credit' },
  { value: ELiabilityType.DEBT, label: 'Debt' },
];
