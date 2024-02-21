"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefinitionsSchema = void 0;
const assetRelation_1 = require("./assetRelation");
const colorPreference_1 = require("./colorPreference");
const currency_1 = require("./currency");
const ss = __importStar(require("superstruct"));
exports.UserDefinitionsSchema = ss.type({
    assetRelations: ss.optional(ss.array(assetRelation_1.AssetRelationSchema)),
    colorPreference: ss.optional(ss.enums([colorPreference_1.EColorPreference.NONE, colorPreference_1.EColorPreference.LIGHT, colorPreference_1.EColorPreference.DARK])),
    currency: ss.optional(ss.enums(currency_1.AVAILABLE_CURRENCIES))
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL3VzZXJEZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRTtBQUN0RSx1REFBcUQ7QUFDckQseUNBQTZEO0FBQzdELGdEQUFrQztBQVFyQixRQUFBLHFCQUFxQixHQUFrQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzFFLGNBQWMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1CLENBQUMsQ0FBQztJQUMxRCxlQUFlLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsa0NBQWdCLENBQUMsSUFBSSxFQUFFLGtDQUFnQixDQUFDLEtBQUssRUFBRSxrQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlHLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQW9CLENBQUMsQ0FBQztDQUN0RCxDQUFDLENBQUMifQ==