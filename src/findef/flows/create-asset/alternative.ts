import { EAssetSubtype } from '../../asset';
import { SelectOption } from '../types/selectOption';

export const AVAILABLE_ALTERNATIVE_SUBTYPES: SelectOption[] = [
  { value: EAssetSubtype.BOND, label: 'Bond' },
  { value: EAssetSubtype.NFT, label: 'NFT' },
  { value: EAssetSubtype.WATCH, label: 'Watch' },
  { value: EAssetSubtype.JEWELLRY, label: 'Jewellry' },
  { value: EAssetSubtype.CAR, label: 'Car' },
  { value: EAssetSubtype.BOAT, label: 'Boat' },
  { value: EAssetSubtype.ART, label: 'Art' },
  { value: EAssetSubtype.FOREST_INVESTMENT, label: 'Forest' },
  { value: EAssetSubtype.WINE, label: 'Wine' },
  { value: EAssetSubtype.SNEAKERS, label: 'Sneakers' },
  { value: EAssetSubtype.PRIVATE_EQUITY, label: 'Private Equity' },
  { value: EAssetSubtype.HEDGE_FUND, label: 'Hedge Fund' },
  { value: EAssetSubtype.COLLECTIBLE, label: 'Collectible' },
  { value: EAssetSubtype.WEB_DOMAIN, label: 'Web Domain' },
  { value: EAssetSubtype.OTHER, label: 'Other' },
];
