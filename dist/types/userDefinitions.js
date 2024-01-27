"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefinitionsSchema = void 0;
const assetRelation_1 = require("./assetRelation");
const colorPreference_1 = require("./colorPreference");
const currency_1 = require("./currency");
const ss = require("superstruct");
exports.UserDefinitionsSchema = ss.type({
    assetRelations: ss.optional(ss.array(assetRelation_1.AssetRelationSchema)),
    colorPreference: ss.optional(ss.enums([colorPreference_1.EColorPreference.NONE, colorPreference_1.EColorPreference.LIGHT, colorPreference_1.EColorPreference.DARK])),
    currency: ss.optional(ss.enums(currency_1.AVAILABLE_CURRENCIES))
});
//# sourceMappingURL=userDefinitions.js.map