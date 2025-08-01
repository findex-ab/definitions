import { EAssetType } from "./asset";
import { TDocRef } from "./docref";
import { IUser } from "./user";
import { IValue } from "./value";

export type IUserAssetDiversification = {
  count: number;
  fraction: number;
  listed?: boolean;
  assetType: EAssetType;
  roi: number;
  value: IValue;
  invested: IValue;
}

export type IUserWorth = {
  user: TDocRef<IUser>;
  assetCount: number;
  liabilityCount: number;
  totalAmortization: number;
  totalNetWorth: number;  // (assets - liabilities)
  totalAssetValue: number;
  value: number;
  valueChange: number;
  valueChangePercent: number;
  invested: number;
  roi: number;
  roiValue: number;
  currency: string;
  diversification: IUserAssetDiversification[];
}
