import * as ss from 'superstruct';
export var EMailStatus;
(function (EMailStatus) {
    EMailStatus["QUEUED"] = "QUEUED";
    EMailStatus["SENDING"] = "SENDING";
    EMailStatus["SENT"] = "SENT";
    EMailStatus["FAILED"] = "FAILED";
})(EMailStatus || (EMailStatus = {}));
export const MailSchema = ss.type({
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
    sentAt: ss.optional(ss.date())
});
export const BatchMailSchema = ss.type({
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
