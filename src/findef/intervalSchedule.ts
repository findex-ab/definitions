export const __IntervalSchedule = 'tmp';

export enum EIntervalScheduleoccurrence {
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  HALF_YEAR = 'HALF_YEAR',
  YEAR = 'YEAR'
}

export type IntervalSchedule = {
  each: number;
  occurrence: EIntervalScheduleoccurrence;
}
