export declare enum EAIAgentType {
    ARB = "ARB",
    CHATBOT = "CHATBOT",
    GUARDRAIL = "GUARDRAIL",
    TOOL = "TOOL"
}
export type IAIAgent<OutputType extends Record<string, any> = Record<string, any>> = {
    name: string;
    model: string;
    instructions: string;
    agentType: EAIAgentType;
    identifier: string;
    description?: string;
    outputGuardrailIdentifiers?: Array<string>;
    inputGuardrailIdentifiers?: Array<string>;
    outputType?: OutputType;
};
