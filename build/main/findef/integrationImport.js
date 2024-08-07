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
exports.IntegrationImportSchema = exports.IntegrationBankAccountImportSchema = void 0;
const ss = __importStar(require("superstruct"));
exports.IntegrationBankAccountImportSchema = ss.type({
    accountId: ss.string(),
    positionIds: ss.array(ss.string()),
    positionIdsToRemove: ss.optional(ss.array(ss.string()))
});
exports.IntegrationImportSchema = ss.type({
    providerId: ss.number(),
    userAccountId: ss.string(),
    bankAccounts: ss.array(exports.IntegrationBankAccountImportSchema),
    alive: ss.optional(ss.boolean()),
    sessionId: ss.optional(ss.string()),
    positionsImportedCount: ss.optional(ss.number()),
    counter: ss.optional(ss.number())
});
