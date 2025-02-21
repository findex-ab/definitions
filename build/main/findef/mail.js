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
exports.BatchMailSchema = exports.MailSchema = exports.EMailStatus = void 0;
const ss = __importStar(require("superstruct"));
var EMailStatus;
(function (EMailStatus) {
    EMailStatus["QUEUED"] = "QUEUED";
    EMailStatus["SENDING"] = "SENDING";
    EMailStatus["SENT"] = "SENT";
    EMailStatus["FAILED"] = "FAILED";
    EMailStatus["OPENED"] = "OPENED";
})(EMailStatus || (exports.EMailStatus = EMailStatus = {}));
exports.MailSchema = ss.type({
    _id: ss.optional(ss.string()),
    to: ss.string(),
    from: ss.string(),
    subject: ss.string(),
    fromName: ss.optional(ss.string()),
    body: ss.optional(ss.string()),
    templateId: ss.optional(ss.string()),
    customArgs: ss.optional(ss.record(ss.string(), ss.any())),
    dynamicTemplateData: ss.optional(ss.record(ss.string(), ss.any())),
    communication: ss.optional(ss.string()),
    sendGridMessageId: ss.optional(ss.string()),
    status: ss.enums(Object.values(EMailStatus)),
    error: ss.optional(ss.string()),
    sentAt: ss.optional(ss.date()),
    readAt: ss.optional(ss.date())
});
exports.BatchMailSchema = ss.type({
    _id: ss.optional(ss.string()),
    communication: ss.optional(ss.string()),
    status: ss.enums(Object.values(EMailStatus)),
    total: ss.number(),
    sent: ss.number(),
    failed: ss.number(),
    startedAt: ss.date(),
    completedAt: ss.optional(ss.date()),
    error: ss.optional(ss.string()),
    mails: ss.optional(ss.array(ss.string())),
    from: ss.string(),
    fromName: ss.optional(ss.string()),
    to: ss.array(ss.string()),
    subject: ss.string(),
    body: ss.optional(ss.string()),
    templateId: ss.optional(ss.string()),
    customArgs: ss.optional(ss.record(ss.string(), ss.any())),
    dynamicTemplateData: ss.optional(ss.record(ss.string(), ss.any())),
    sendGridBatchId: ss.optional(ss.string())
});
