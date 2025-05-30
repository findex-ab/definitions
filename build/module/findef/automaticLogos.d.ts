import { EAssetType, FullAsset, IAsset } from './asset';
import { ISavedDocument } from './savedDocument';
export declare const ASSET_TYPE_AUTOMATIC_LOGO_BLACKLIST: Array<EAssetType>;
export declare const assetShouldHaveAutomaticLogo: (asset: Partial<IAsset> | Partial<ISavedDocument<IAsset>> | Partial<ISavedDocument<IAsset, string>> | Partial<FullAsset>) => boolean;
