import { EAssetUserRole } from "./assetUserRole";

export interface IAssetUserRelation {
  userId?: string;
  assetId: string;
  role: EAssetUserRole;
}
