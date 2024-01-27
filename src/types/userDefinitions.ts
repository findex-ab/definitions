import { IAssetRelation } from './assetRelation';
import { EColorPreference } from './colorPreference';
import { ECurrency } from './currency';

export interface IUserDefinitions {
  userId: string;
  assetRelations: IAssetRelation;
  colorPreference?: EColorPreference;
  currency?: ECurrency;
} 
