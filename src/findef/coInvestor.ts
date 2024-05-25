import * as ss from 'superstruct';
import { TDocRef } from './docref';
import { IUser } from './user';

export enum ECoInvestorRole {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  MEMBER = "MEMBER"
}

export type ICoInvestor = {
  user?: TDocRef<IUser>;
  userData?: {
    firstname: string;
    lastname: string;
    email: string;
  }
  fraction: number;
  role: ECoInvestorRole;
}

export const CoInvestorSchema = ss.type({
  user: ss.any(),
  fraction: ss.number(),
  role: ss.enums(Object.keys(ECoInvestorRole)),
  userData: ss.optional(ss.type({
    firstname: ss.string(),
    lastname: ss.string(),
    email: ss.string()
  }))
})