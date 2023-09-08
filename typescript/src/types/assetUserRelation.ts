import { EAssetUserRole } from "./assetUserRole";

export interface IAssetUserRelation {
  userId?: string;
  pendingInvestorId?: string;
  assetId: string;
  role: EAssetUserRole;
}
