import { EAssetSubtype } from '../../asset';
import { SelectOption } from '../types/selectOption';

export const AVAILABLE_REAL_ESTATE_SUBTYPES: SelectOption[] = [
  { value: EAssetSubtype.APARTMENT, label: 'Apartment' },
  { value: EAssetSubtype.BUILDING, label: 'Building' },
  { value: EAssetSubtype.HOUSE, label: 'House' },
  { value: EAssetSubtype.PARKING, label: 'Parking' },
  { value: EAssetSubtype.LAND, label: 'Land' },
  { value: EAssetSubtype.COMMERCIAL, label: 'Commercial' },
  { value: EAssetSubtype.OTHER, label: 'Other' },
];