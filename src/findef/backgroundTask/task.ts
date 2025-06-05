import { EBackgroundTaskStatus } from "./status";

export type IBackgroundTask<K extends string = string> = {
  taskType: K;
  uuid: string;
  timeStarted: Date | string;
  progress: number;
  status: EBackgroundTaskStatus;
  statusMessage?: string;
}
