import { AssetSchema } from "./asset";
import * as ss from 'superstruct';
const AssetExtendedAttributesSchema = ss.type({
    automaticLogo: ss.optional(ss.boolean())
});
;
export const AssetPreferencesSchema = ss.type({
    userId: ss.optional(ss.string()),
    modified: ss.optional(ss.partial(ss.assign(AssetSchema, AssetExtendedAttributesSchema)))
});
