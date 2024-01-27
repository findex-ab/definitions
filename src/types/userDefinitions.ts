import { IAssetRelation } from './assetRelation';
import { EColorPreference } from './colorPreference';
import { ECurrency } from './currency';

export interface IUserDefinitions {
  assetRelations: IAssetRelation;
  colorPreference?: EColorPreference;
  currency?: ECurrency;
} 
