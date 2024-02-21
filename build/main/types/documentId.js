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
exports.DocumentIdSchema = exports.ObjectIdSchemaType = void 0;
const ss = __importStar(require("superstruct"));
const has = (a, key) => !!(key in a);
exports.ObjectIdSchemaType = ss.define('ObjectId', (value) => {
    if (!value)
        return false;
    if (typeof value === 'object' && (has(value, '_id') || has(value, '__id') || has(value, '_bsontype')))
        return true;
    if (typeof value === 'string' || typeof value === 'number')
        return true;
    return false;
});
exports.DocumentIdSchema = ss.union([ss.string(), exports.ObjectIdSchemaType]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRJZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBlcy9kb2N1bWVudElkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQWtDO0FBS2xDLE1BQU0sR0FBRyxHQUFHLENBQXNDLENBQWlCLEVBQUUsR0FBVyxFQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFOUYsUUFBQSxrQkFBa0IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFXLFVBQVUsRUFBRSxDQUFDLEtBQWMsRUFBRSxFQUFFO0lBQ25GLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDekIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ25ILElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN4RSxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBNEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSwwQkFBa0IsQ0FBQyxDQUE0QixDQUFDIn0=