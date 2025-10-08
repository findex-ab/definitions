import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';

export enum EKeyCodeType {
  UNKNOWN = "UNKNOWN",
  REFERRAL_CODE = 'REFERRAL_CODE',
  BETA_CODE = "BETA_CODE",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}

export type IKeyCode = {
  value: string;
  hashInput: bigint;
  type?: EKeyCodeType;
  consumed?: boolean;
  consumedDate?: Date;
  expiryDate?: Date;
  reusable?: boolean;
  createdBy?: TDocRef<IUser>;
  data?: any;
}

export type GenerateKeyCodeRequest = {
  entropy?: string | number;
  format?: string;
  timeToLiveSeconds?: number;
  type?: EKeyCodeType;
  count?: number;
  reusable?: boolean;
  data?: any;
}

export type ConsumeKeyCodeRequest = {
  type?: EKeyCodeType;
}

export const GenerateKeyCodeRequestSchema: ss.Describe<GenerateKeyCodeRequest> = ss.type({
  entropy: ss.optional(ss.union([ss.string(), ss.number()])),
  format: ss.optional(ss.string()),
  timeToLiveSeconds: ss.optional(ss.number()),
  type: ss.optional(ss.enums([
    EKeyCodeType.UNKNOWN,
    EKeyCodeType.BETA_CODE,
    EKeyCodeType.EMAIL_VERIFICATION,
    EKeyCodeType.REFERRAL_CODE
  ])),
  count: ss.optional(ss.number()),
  reusable: ss.optional(ss.boolean()),
  data: ss.any()
})
