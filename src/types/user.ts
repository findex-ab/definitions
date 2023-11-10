import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IInvestment, InvestmentSchema } from "./investment";
import ss from 'superstruct';


export enum EUserStatus {
  PENDING = "PENDING",
  RESOLVED = "RESOLVED"
}

export interface IUser {
  authUserId?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  phone?: string;
  password?: string;
  investments?: IInvestment[];
  administratedAssets?: TDocRef<IAsset>[];
  status?: EUserStatus;
}

//export const userFields = keys<IUser>();

export const UserSchema: ss.Describe<IUser> = ss.object({
  authUserId: ss.optional(ss.string()),
  firstname: ss.optional(ss.string()),
  lastname: ss.optional(ss.string()),
  email: ss.string(),
  phone: ss.optional(ss.string()),
  password: ss.optional(ss.string()),
  investments: ss.optional(ss.array(InvestmentSchema)),
  administratedAssets: ss.optional(ss.array(ss.string())),
  status: ss.optional(ss.enums([EUserStatus.PENDING, EUserStatus.RESOLVED]))
})


export type IInvestor = IUser;
