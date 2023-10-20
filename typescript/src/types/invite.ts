import { IAsset } from "./asset";
import { IPendingUser } from "./user";

export enum EInvite {
  ADMIN = 'admin',
  INVESTOR = 'investor'
};

export interface IInvite {
  id: string;
  type: EInvite;
  userInfo: IPendingUser;
  asset?: Partial<IAsset>;
}
