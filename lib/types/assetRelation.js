import * as ss from 'superstruct';
export const AssetRelationSchema = ss.type({
    asset: ss.string(),
    parentAsset: ss.optional(ss.string()),
    childrenAssets: ss.optional(ss.array(ss.string())),
    investorIds: ss.optional(ss.array(ss.string())),
    parentAssetId: ss.optional(ss.string())
});
//# sourceMappingURL=assetRelation.js.map