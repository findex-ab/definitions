import * as ss from 'superstruct';
export var ECommunicationStatus;
(function (ECommunicationStatus) {
    ECommunicationStatus["DRAFT"] = "DRAFT";
    ECommunicationStatus["SENT"] = "SENT";
    ECommunicationStatus["SCHEDULED"] = "SCHEDULED";
    ECommunicationStatus["FAILED"] = "FAILED";
})(ECommunicationStatus || (ECommunicationStatus = {}));
export const CommunicationSchema = ss.type({
    asset: ss.string(),
    sender: ss.optional(ss.string()),
    recepients: ss.array(ss.string()),
    headline: ss.string(),
    body: ss.string(),
    version: ss.optional(ss.string()),
    status: ss.enums(Object.keys(ECommunicationStatus)),
    attachments: ss.array(ss.any()),
    isDraft: ss.boolean(),
    shouldSendEmail: ss.boolean(),
    publishedAt: ss.optional(ss.date()),
    createdBy: ss.string(),
    showInAssetPage: ss.boolean(),
    inAppReadBy: ss.array(ss.string()),
    emailReadBy: ss.array(ss.string()),
    batchMail: ss.optional(ss.string())
});
