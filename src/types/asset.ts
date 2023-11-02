import z from 'zod';
import { ValueSchema, ILedger } from ".";


export interface IAsset {
  name: string;
  organizationNumber: string;
  contactEmail: string;
  ledger: ILedger;
  assetId?: string;
}


const defaultLedger: ILedger = {
  sharePrice: { value: 0 },
  sharesIssued: 0
}

export const AssetSchema = z.object({
  name: z.string().min(1),
  organizationNumber: z.string().min(1),
  contactEmail: z.string().min(1),
  ledger: z.object({
      sharePrice: ValueSchema,
      sharesIssued: z.number()
  }).optional().default(defaultLedger),
  assetId: z.any()
});


export type ICompany = IAsset;
