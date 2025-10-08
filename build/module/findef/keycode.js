import * as ss from 'superstruct';
export var EKeyCodeType;
(function (EKeyCodeType) {
    EKeyCodeType["UNKNOWN"] = "UNKNOWN";
    EKeyCodeType["REFERRAL_CODE"] = "REFERRAL_CODE";
    EKeyCodeType["BETA_CODE"] = "BETA_CODE";
    EKeyCodeType["EMAIL_VERIFICATION"] = "EMAIL_VERIFICATION";
})(EKeyCodeType || (EKeyCodeType = {}));
export const GenerateKeyCodeRequestSchema = ss.type({
    entropy: ss.optional(ss.union([ss.string(), ss.number()])),
    format: ss.optional(ss.string()),
    timeToLiveSeconds: ss.optional(ss.number()),
    type: ss.optional(ss.enums([
        EKeyCodeType.UNKNOWN,
        EKeyCodeType.BETA_CODE,
        EKeyCodeType.EMAIL_VERIFICATION,
        EKeyCodeType.REFERRAL_CODE
    ])),
    count: ss.optional(ss.number()),
    reusable: ss.optional(ss.boolean()),
    data: ss.any()
});
