import { TDocRef } from "./docref";
import { IUser } from "./user";
import * as ss from 'superstruct';

export type IKeyCode = {
  value: string;
  hashInput: bigint;
  consumed?: boolean;
  consumedDate?: Date;
  expiryDate?: Date;
  createdBy?: TDocRef<IUser>;
}

export type GenerateKeyCodeRequest = {
  entropy?: string | number;
  format?: string;
}

export const GenerateKeyCodeRequestSchema: ss.Describe<GenerateKeyCodeRequest> = ss.type({
  entropy: ss.optional(ss.union([ss.string(), ss.number()])),
  format: ss.optional(ss.string())
})
