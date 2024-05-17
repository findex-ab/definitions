import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';

export enum EKeyCodeType {
  UNKNOWN = "UNKNOWN",
  BETA_CODE = "BETA_CODE"
}

export type IKeyCode = {
  value: string;
  hashInput: bigint;
  type?: EKeyCodeType;
  consumed?: boolean;
  consumedDate?: Date;
  expiryDate?: Date;
  createdBy?: TDocRef<IUser>;
}

export type GenerateKeyCodeRequest = {
  entropy?: string | number;
  format?: string;
  timeToLiveSeconds?: number;
  type?: EKeyCodeType;
}

export const GenerateKeyCodeRequestSchema: ss.Describe<GenerateKeyCodeRequest> = ss.type({
  entropy: ss.optional(ss.union([ss.string(), ss.number()])),
  format: ss.optional(ss.string()),
  timeToLiveSeconds: ss.optional(ss.number()),
  type: ss.optional(ss.enums([
    EKeyCodeType.UNKNOWN,
    EKeyCodeType.BETA_CODE
  ]))
})
