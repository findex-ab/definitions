import { IAsset } from "../asset";
import { INewsEntry } from "./entry";
export type INewsEntryWithAssets = INewsEntry & {
    assets: IAsset[];
};
