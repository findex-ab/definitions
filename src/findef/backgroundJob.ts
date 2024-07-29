export type IBackgroundJob = {
  name: string;
  started: Date;
  finished?: Date;
  running: boolean;
  averageDuration: number;
}
