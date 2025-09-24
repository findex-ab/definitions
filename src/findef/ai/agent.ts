export enum EAIAgentType {
  ARB = 'ARB',
  CHATBOT = 'CHATBOT',
  GUARDRAIL = 'GUARDRAIL',
  TOOL = 'TOOL',
  HANDOFF = 'HANDOFF'
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
  handoffIdentifiers?: Array<string>;
  toolIdentifiers?: Array<string>;
  outputType?: OutputType;
}
