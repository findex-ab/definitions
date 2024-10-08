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
exports.PortfolioSchema = exports.PortfolioTrendsSchema = exports.PortfolioValueSlotSchema = void 0;
const asset_1 = require("./asset");
const ss = __importStar(require("superstruct"));
exports.PortfolioValueSlotSchema = ss.type({
    currency: ss.string(),
    assetCount: ss.number(),
    value: ss.number(),
    valueChange: ss.number(),
    valueChangePercent: ss.number(),
    invested: ss.number(),
    roi: ss.number(),
    partition: ss.number()
});
const AssetDiversificationSlotSchema = ss.object({
    listed: ss.optional(exports.PortfolioValueSlotSchema),
    unlisted: ss.optional(exports.PortfolioValueSlotSchema),
    all: ss.optional(exports.PortfolioValueSlotSchema),
});
exports.PortfolioTrendsSchema = ss.type({
    transaction: ss.object({
        count: ss.number()
    }),
    value: ss.object({
        change: ss.number(),
        roi: ss.number()
    }),
    total: exports.PortfolioValueSlotSchema
});
exports.PortfolioSchema = ss.type({
    total: exports.PortfolioValueSlotSchema,
    diversification: ss.record(ss.enums(Object.values(asset_1.EAssetType)), AssetDiversificationSlotSchema),
    trends: exports.PortfolioTrendsSchema,
    currency: ss.string()
});
