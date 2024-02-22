import * as ss from 'superstruct';
export type IAssetRelation = {
    asset: string;
    investorIds?: string[];
    parentAsset?: string;
    childrenAssets?: string[];
};
export declare const AssetRelationSchema: ss.Describe<IAssetRelation>;
