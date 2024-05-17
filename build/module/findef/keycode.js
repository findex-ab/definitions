import * as ss from 'superstruct';
export var EKeyCodeType;
(function (EKeyCodeType) {
    EKeyCodeType["UNKNOWN"] = "UNKNOWN";
    EKeyCodeType["BETA_CODE"] = "BETA_CODE";
})(EKeyCodeType || (EKeyCodeType = {}));
export const GenerateKeyCodeRequestSchema = ss.type({
    entropy: ss.optional(ss.union([ss.string(), ss.number()])),
    format: ss.optional(ss.string()),
    timeToLiveSeconds: ss.optional(ss.number()),
    type: ss.optional(ss.enums([
        EKeyCodeType.UNKNOWN,
        EKeyCodeType.BETA_CODE
    ]))
});
