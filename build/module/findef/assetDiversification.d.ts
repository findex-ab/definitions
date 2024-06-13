import { EAssetType } from "./asset";
import { IValue } from "./value";
export type AssetDiversificationSlot = {
    count: number;
    value: IValue;
    fraction: number;
    listed: boolean;
    type: EAssetType;
};
export type AssetDiversification = Record<EAssetType, {
    listed: AssetDiversificationSlot;
    unlisted: AssetDiversificationSlot;
}>;
