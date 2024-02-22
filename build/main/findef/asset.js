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
exports.AssetSchema = exports.EAssetType = void 0;
const ss = __importStar(require("superstruct"));
const ledger_1 = require("./ledger");
const documentId_1 = require("./documentId");
var EAssetType;
(function (EAssetType) {
    EAssetType["UNDEFINED"] = "UNDEFINED";
    EAssetType["LISTED_EQUITY"] = "LISTED_EQUITY";
    EAssetType["UNLISTED_EQUITY"] = "UNLISTED_EQUITY";
    EAssetType["REAL_ESTATE"] = "REAL_ESTATE";
    EAssetType["ALTERNATIVE"] = "ALTERNATIVE";
})(EAssetType || (exports.EAssetType = EAssetType = {}));
exports.AssetSchema = ss.type({
    name: ss.string(),
    organizationNumber: ss.string(),
    contactEmail: ss.string(),
    ledger: ledger_1.LedgerSchema,
    assetId: ss.optional(ss.any()),
    externalId: ss.optional(ss.string()),
    type: ss.optional(ss.enums([EAssetType.UNDEFINED, EAssetType.LISTED_EQUITY, EAssetType.UNLISTED_EQUITY, EAssetType.REAL_ESTATE, EAssetType.ALTERNATIVE])),
    parent: ss.optional(documentId_1.DocumentIdSchema),
    children: ss.optional(ss.array(documentId_1.DocumentIdSchema)),
    automatic: ss.optional(ss.boolean()),
    articles: ss.optional(ss.array(ss.any())),
    lastNewsUpdate: ss.optional(ss.any())
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmluZGVmL2Fzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQWtDO0FBRWxDLHFDQUFpRDtBQUNqRCw2Q0FBNEQ7QUFJNUQsSUFBWSxVQU1YO0FBTkQsV0FBWSxVQUFVO0lBQ3BCLHFDQUF1QixDQUFBO0lBQ3ZCLDZDQUErQixDQUFBO0lBQy9CLGlEQUFtQyxDQUFBO0lBQ25DLHlDQUEyQixDQUFBO0lBQzNCLHlDQUEyQixDQUFBO0FBQzdCLENBQUMsRUFOVyxVQUFVLDBCQUFWLFVBQVUsUUFNckI7QUFpQlksUUFBQSxXQUFXLEdBQThDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDNUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDakIsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUMvQixZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUN6QixNQUFNLEVBQUUscUJBQVk7SUFDcEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLFVBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4SixNQUFNLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyw2QkFBZ0IsQ0FBQztJQUNyQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUFnQixDQUFDLENBQUM7SUFDakQsU0FBUyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQ3RDLENBQThDLENBQUMifQ==