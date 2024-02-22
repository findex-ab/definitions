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
exports.IntegrationProviderSchema = void 0;
const ss = __importStar(require("superstruct"));
exports.IntegrationProviderSchema = ss.type({
    id: ss.number(),
    name: ss.string(),
    displayName: ss.string(),
    country: ss.string(),
    customer: ss.string(),
    providerType: ss.string(),
    iconUrl: ss.string()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25Qcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maW5kZWYvaW50ZWdyYXRpb25Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUFrQztBQVlyQixRQUFBLHlCQUF5QixHQUFxQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2pGLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ2YsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDakIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDeEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDcEIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDckIsWUFBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDekIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Q0FDckIsQ0FBQyxDQUFDIn0=