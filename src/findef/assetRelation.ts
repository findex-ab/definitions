import * as ss from 'superstruct';

export type IAssetRelation = {
  asset: string;
  investorIds?: string[];
  parentAsset?: string;
  childrenAssets?: string[];
}

export const AssetRelationSchema: ss.Describe<IAssetRelation> = ss.type({
  asset: ss.string(),
  parentAsset: ss.optional(ss.string()),
  childrenAssets: ss.optional(ss.array(ss.string())),
  investorIds: ss.optional(ss.array(ss.string())),
  parentAssetId: ss.optional(ss.string())
});
