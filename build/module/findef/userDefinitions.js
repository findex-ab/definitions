import { AssetRelationSchema } from './assetRelation';
import { EColorPreference } from './colorPreference';
import { AVAILABLE_CURRENCIES } from './currency';
import * as ss from 'superstruct';
export const UserDefinitionsSchema = ss.type({
    assetRelations: ss.optional(ss.array(AssetRelationSchema)),
    colorPreference: ss.optional(ss.enums([EColorPreference.NONE, EColorPreference.LIGHT, EColorPreference.DARK])),
    currency: ss.optional(ss.enums(AVAILABLE_CURRENCIES))
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZpbmRlZi91c2VyRGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBYSxNQUFNLFlBQVksQ0FBQztBQUM3RCxPQUFPLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVFsQyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0MsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMxRSxjQUFjLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDMUQsZUFBZSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Q0FDdEQsQ0FBQyxDQUFDIn0=