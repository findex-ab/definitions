import { IRelation } from './relation';
export type IAssetRelation = IRelation<{
    assetId: string;
    investorIds?: string[];
}>;
