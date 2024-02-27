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
exports.PortfolioSchema = exports.PortfolioValueSlotSchema = void 0;
const asset_1 = require("./asset");
const ss = __importStar(require("superstruct"));
exports.PortfolioValueSlotSchema = ss.type({
    assetCount: ss.number(),
    value: ss.number(),
    invested: ss.number(),
    roi: ss.number(),
    partition: ss.number()
});
exports.PortfolioSchema = ss.type({
    total: exports.PortfolioValueSlotSchema,
    diversification: ss.record(ss.enums([
        asset_1.EAssetType.ALTERNATIVE,
        asset_1.EAssetType.LISTED_EQUITY,
        asset_1.EAssetType.REAL_ESTATE,
        asset_1.EAssetType.UNDEFINED,
        asset_1.EAssetType.UNLISTED_EQUITY,
    ]), exports.PortfolioValueSlotSchema),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGZvbGlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZpbmRlZi9wb3J0Zm9saW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBcUM7QUFDckMsZ0RBQWtDO0FBVXJCLFFBQUEsd0JBQXdCLEdBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDTixVQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUN2QixLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNsQixRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNyQixHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNoQixTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtDQUN2QixDQUFDLENBQUM7QUFTUSxRQUFBLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3JDLEtBQUssRUFBRSxnQ0FBd0I7SUFDL0IsZUFBZSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDUCxrQkFBVSxDQUFDLFdBQVc7UUFDdEIsa0JBQVUsQ0FBQyxhQUFhO1FBQ3hCLGtCQUFVLENBQUMsV0FBVztRQUN0QixrQkFBVSxDQUFDLFNBQVM7UUFDcEIsa0JBQVUsQ0FBQyxlQUFlO0tBQzNCLENBQUMsRUFDRixnQ0FBd0IsQ0FDekI7Q0FDRixDQUFDLENBQUMifQ==