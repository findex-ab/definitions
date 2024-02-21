"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRelationSchema = void 0;
const ss = require("superstruct");
exports.AssetRelationSchema = ss.type({
    asset: ss.string(),
    parentAsset: ss.optional(ss.string()),
    childrenAssets: ss.optional(ss.array(ss.string())),
    investorIds: ss.optional(ss.array(ss.string())),
    parentAssetId: ss.optional(ss.string())
});
//# sourceMappingURL=assetRelation.js.map