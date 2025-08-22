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
exports.BatchMailSchema = exports.MailSchema = exports.EMailStatus = exports.MailTemplate = void 0;
const ss = __importStar(require("superstruct"));
var MailTemplate;
(function (MailTemplate) {
    // Regular Invite
    MailTemplate["EARLY_ACCESS_INVITE"] = "d-f55f7b67bad148c3a2167d549c3b82d1";
    // Verify Email
    MailTemplate["VERIFY_EMAIL_WITH_CODE"] = "d-a3ef05a79f0c4671b708556bfb10f8cd";
    MailTemplate["VERIFY_EMAIL_WITHOUT_CODE"] = "d-4c5cff40a77a4d14a4eda8077280e459";
    // Invite Shareholder
    MailTemplate["SHAREHOLDER_INVITE_NEW_USER"] = "d-adc7ca03bcdb488891950b0f4c5276d0";
    MailTemplate["SHAREHOLDER_INVITE_EXISITING_USER"] = "d-82b58d4365384318a6da7dd44524858e";
    // Invite Company Admin
    MailTemplate["SUPERADMIN_INVITE_IR_ADMIN_NEW_USER"] = "d-f9da809b556241fc9f41534f467d5a26";
    MailTemplate["SUPERADMIN_INVITE_IR_ADMIN_EXISTING_USER"] = "d-16906d6ed3a744169a6edcd13ed91a51";
    MailTemplate["IR_ADMIN_INVITE_IR_ADMIN_NEW_USER"] = "d-6aa6221a6656458387eb0260fdf360f5";
    MailTemplate["IR_ADMIN_INVITE_IR_ADMIN_EXISTING_USER"] = "d-71b830cf50a148a5845f222682bf9423";
    // Investor Update
    MailTemplate["INVESTOR_UPDATE_FULL"] = "d-905df082a89f41c5aa36a54ee73010ef";
    MailTemplate["INVESTOR_UPDATE_NOTIFICATION"] = "d-4d0fa787eff54086980320dc09232de2";
    // Co-investor Invite
    MailTemplate["INVITE_CO_INVESTOR"] = "d-c745c4d9aa114f36b3e3a0a5425fa9cf";
    // Opportunity Inquire Order confirmation
    MailTemplate["OPPORTUNITY_INQUIRE_RECEIPT"] = "d-d7541d1c7d624ca7b100cfeba5fae81f";
})(MailTemplate || (exports.MailTemplate = MailTemplate = {}));
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
    attachments: ss.optional(ss.array(ss.any())),
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
    attachments: ss.optional(ss.array(ss.any())),
    templateId: ss.optional(ss.string()),
    customArgs: ss.optional(ss.record(ss.string(), ss.any())),
    dynamicTemplateData: ss.optional(ss.record(ss.string(), ss.any())),
    sendGridBatchId: ss.optional(ss.string())
});
