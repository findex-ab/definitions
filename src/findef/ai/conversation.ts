import { TDocRef } from "../docref";
import { IUser } from "../user";

export type IAIConversation = {
  user: TDocRef<IUser>;
  assistantId: string;
  threadId?: string;
  runId?: string;
}

export type IAIMessage = {
  value: string;
}
