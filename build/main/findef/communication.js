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
exports.CommunicationSchema = exports.ECommunicationStatus = void 0;
const ss = __importStar(require("superstruct"));
var ECommunicationStatus;
(function (ECommunicationStatus) {
    ECommunicationStatus["DRAFT"] = "DRAFT";
    ECommunicationStatus["SENT"] = "SENT";
    ECommunicationStatus["SCHEDULED"] = "SCHEDULED";
})(ECommunicationStatus || (exports.ECommunicationStatus = ECommunicationStatus = {}));
exports.CommunicationSchema = ss.type({
    asset: ss.string(),
    sender: ss.string(),
    recepients: ss.array(ss.string()),
    headline: ss.string(),
    body: ss.string(),
    status: ss.enums(Object.keys(ECommunicationStatus)),
    attachments: ss.array(ss.any()),
    isDraft: ss.boolean(),
    shouldSendEmail: ss.boolean(),
    publishedAt: ss.optional(ss.date()),
    showInAssetPage: ss.boolean(),
    inAppReadBy: ss.array(ss.string()),
    emailReadBy: ss.array(ss.string())
});
