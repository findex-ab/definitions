import { IAssetRelation } from './assetRelation';
import { EColorPreference } from './colorPreference';
import { ECurrency } from './currency';
import * as ss from 'superstruct';
export interface IUserDefinitions {
    assetRelations?: IAssetRelation[];
    colorPreference?: EColorPreference;
    currency?: ECurrency;
}
export declare const UserDefinitionsSchema: ss.Describe<IUserDefinitions>;
