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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwZXMvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBa0M7QUFXckIsUUFBQSxpQkFBaUIsR0FBOEIsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDakQsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDckIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDdkIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDckIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Q0FDckIsQ0FBQyxDQUFDIn0=