import * as ss from 'superstruct';
export var ECommunicationStatus;
(function (ECommunicationStatus) {
    ECommunicationStatus["DRAFT"] = "DRAFT";
    ECommunicationStatus["SENT"] = "SENT";
    ECommunicationStatus["SCHEDULED"] = "SCHEDULED";
})(ECommunicationStatus || (ECommunicationStatus = {}));
export const CommunicationSchema = ss.type({
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
