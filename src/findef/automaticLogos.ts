import { EAssetSubtype, EAssetType, FullAsset, IAsset } from './asset';
import { ISavedDocument } from './savedDocument';

export const ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST: Array<EAssetType> = [
  EAssetType.CASH,
  EAssetType.COMMODITY,
  EAssetType.REAL_ESTATE,
  EAssetType.ALTERNATIVE,
  EAssetType.DEBT,
];

export const assetShouldHaveAutomaticLogo = (
  asset:
    | Partial<IAsset>
    | Partial<ISavedDocument<IAsset>>
    | Partial<ISavedDocument<IAsset, string>>
    | Partial<FullAsset>,
): boolean => {
  if (
    ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST.includes(asset.type as unknown as any)
  )
    return false;

  const subtypes = asset.subtypes || [];
  if (subtypes.includes(EAssetSubtype.CASH)) return false;
  if (subtypes.includes(EAssetSubtype.LOAN)) return false;
  if (subtypes.includes(EAssetSubtype.SAVINGS_ACCOUNT)) return false;
  if (subtypes.includes(EAssetSubtype.INVESTMENT_ACCOUNT)) return false;
  if (subtypes.includes(EAssetSubtype.CHECKING_ACCOUNT)) return false;
  if (asset.isBankAccount) return false;
  return true;
};
