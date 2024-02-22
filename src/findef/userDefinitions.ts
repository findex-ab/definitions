import { AssetRelationSchema, IAssetRelation } from './assetRelation';
import { EColorPreference } from './colorPreference';
import { AVAILABLE_CURRENCIES, ECurrency } from './currency';
import * as ss from 'superstruct';

export interface IUserDefinitions {
  assetRelations?: IAssetRelation[];
  colorPreference?: EColorPreference;
  currency?: ECurrency;
}

export const UserDefinitionsSchema: ss.Describe<IUserDefinitions> = ss.type({
  assetRelations: ss.optional(ss.array(AssetRelationSchema)),
  colorPreference: ss.optional(ss.enums([EColorPreference.NONE, EColorPreference.LIGHT, EColorPreference.DARK])),
  currency: ss.optional(ss.enums(AVAILABLE_CURRENCIES))
});
