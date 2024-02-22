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
exports.TransactionSchema = void 0;
const ss = __importStar(require("superstruct"));
exports.TransactionSchema = ss.type({
    action: ss.enums(["BUY", "SELL", "PRICE_UPDATE"]),
    quantity: ss.number(),
    totalPrice: ss.number(),
    currency: ss.string(),
    source: ss.enums(["MANUAL", "AUTOMATIC"]),
    timestamp: ss.date(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmluZGVmL3RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQWtDO0FBV3JCLFFBQUEsaUJBQWlCLEdBQThCLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3JCLFVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3JCLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFO0NBQ3JCLENBQUMsQ0FBQyJ9