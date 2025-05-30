import { EAssetSubtype, EAssetType } from './asset';
export const ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST = [
    EAssetType.CASH,
    EAssetType.COMMODITY,
    EAssetType.REAL_ESTATE,
    EAssetType.ALTERNATIVE,
    EAssetType.DEBT,
];
export const assetShouldHaveAutomaticLogo = (asset) => {
    if (ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST.includes(asset.type))
        return false;
    const subtypes = asset.subtypes || [];
    if (subtypes.includes(EAssetSubtype.CASH))
        return false;
    if (subtypes.includes(EAssetSubtype.LOAN))
        return false;
    if (subtypes.includes(EAssetSubtype.SAVINGS_ACCOUNT))
        return false;
    if (subtypes.includes(EAssetSubtype.INVESTMENT_ACCOUNT))
        return false;
    if (subtypes.includes(EAssetSubtype.CHECKING_ACCOUNT))
        return false;
    if (asset.isBankAccount)
        return false;
    return true;
};
