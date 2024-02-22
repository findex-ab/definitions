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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRJZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maW5kZWYvZG9jdW1lbnRJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdEQUFrQztBQUtsQyxNQUFNLEdBQUcsR0FBRyxDQUFzQyxDQUFpQixFQUFFLEdBQVcsRUFBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRTlGLFFBQUEsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBVyxVQUFVLEVBQUUsQ0FBQyxLQUFjLEVBQUUsRUFBRTtJQUNuRixJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3pCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuSCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEUsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQTRCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsMEJBQWtCLENBQUMsQ0FBNEIsQ0FBQyJ9