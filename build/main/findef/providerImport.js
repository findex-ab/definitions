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
exports.ProviderImportRequestSchema = exports.emptyProviderImport = void 0;
const ss = __importStar(require("superstruct"));
const integrationProvider_1 = require("./integrationProvider");
exports.emptyProviderImport = {
    providerId: -1,
    provider: integrationProvider_1.emptyIntegrationProvider,
    session: { connected: false, id: '' },
    previous: { selected: { investmentIds: [] } },
    selected: { investmentIds: [] },
    available: { bankAccounts: [] },
    lastSync: new Date(),
    runCount: 0
};
exports.ProviderImportRequestSchema = ss.type({
    providerId: ss.number(),
    userAccountId: ss.optional(ss.string()),
    session: ss.type({
        id: ss.string()
    }),
    doNotRun: ss.optional(ss.boolean()),
    selected: ss.type({
        investmentIds: ss.array(ss.string())
    })
});
