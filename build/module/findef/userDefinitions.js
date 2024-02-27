import { AssetRelationSchema } from './assetRelation';
import { EColorPreference } from './colorPreference';
import { AVAILABLE_CURRENCIES } from './currency';
import * as ss from 'superstruct';
export const UserDefinitionsSchema = ss.type({
    assetRelations: ss.optional(ss.array(AssetRelationSchema)),
    colorPreference: ss.optional(ss.enums([EColorPreference.NONE, EColorPreference.LIGHT, EColorPreference.DARK])),
    currency: ss.optional(ss.enums(AVAILABLE_CURRENCIES))
});
