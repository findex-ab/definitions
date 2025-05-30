"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetShouldHaveAutomaticLogo = exports.ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST = void 0;
const asset_1 = require("./asset");
exports.ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST = [
    asset_1.EAssetType.CASH,
    asset_1.EAssetType.COMMODITY,
    asset_1.EAssetType.REAL_ESTATE,
    asset_1.EAssetType.ALTERNATIVE,
    asset_1.EAssetType.DEBT,
];
const assetShouldHaveAutomaticLogo = (asset) => {
    if (exports.ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST.includes(asset.type))
        return false;
    const subtypes = asset.subtypes || [];
    if (subtypes.includes(asset_1.EAssetSubtype.CASH))
        return false;
    if (subtypes.includes(asset_1.EAssetSubtype.LOAN))
        return false;
    if (subtypes.includes(asset_1.EAssetSubtype.SAVINGS_ACCOUNT))
        return false;
    if (subtypes.includes(asset_1.EAssetSubtype.INVESTMENT_ACCOUNT))
        return false;
    if (subtypes.includes(asset_1.EAssetSubtype.CHECKING_ACCOUNT))
        return false;
    if (asset.isBankAccount)
        return false;
    return true;
};
exports.assetShouldHaveAutomaticLogo = assetShouldHaveAutomaticLogo;
