export enum EAIAgentType {
  ARB = 'ARB',
  CHATBOT = 'CHATBOT',
  GUARDRAIL = 'GUARDRAIL'
}

export type IAIAgent = {
  name: string;
  model: string;
  instructions: string;
  agentType: EAIAgentType;
  identifier: string;
}
