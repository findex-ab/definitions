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
exports.GenerateKeyCodeRequestSchema = exports.EKeyCodeType = void 0;
const ss = __importStar(require("superstruct"));
var EKeyCodeType;
(function (EKeyCodeType) {
    EKeyCodeType["UNKNOWN"] = "UNKNOWN";
    EKeyCodeType["BETA_CODE"] = "BETA_CODE";
})(EKeyCodeType || (exports.EKeyCodeType = EKeyCodeType = {}));
exports.GenerateKeyCodeRequestSchema = ss.type({
    entropy: ss.optional(ss.union([ss.string(), ss.number()])),
    format: ss.optional(ss.string()),
    timeToLiveSeconds: ss.optional(ss.number()),
    type: ss.optional(ss.enums([
        EKeyCodeType.UNKNOWN,
        EKeyCodeType.BETA_CODE
    ])),
    count: ss.optional(ss.number())
});
