import * as ss from 'superstruct';
export const GenerateKeyCodeRequestSchema = ss.type({
    entropy: ss.optional(ss.union([ss.string(), ss.number()])),
    format: ss.optional(ss.string()),
    timeToLiveSeconds: ss.optional(ss.number())
});
