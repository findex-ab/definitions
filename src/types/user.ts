import { IAsset } from "./asset";
import { TDocRef } from "./docref";
import { IInvestment, InvestmentSchema } from "./investment";
import z from 'zod';


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

export const UserSchema = z.object({
  authUserId: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().min(3),
  phone: z.string().optional(),
  password: z.string().optional(),
  investments: z.array(InvestmentSchema),
  administratedAssets: z.array(z.string()).optional(),
  status: z.string().optional()
})


export type IInvestor = IUser;
