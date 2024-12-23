import { ITimeDifference } from './timeDifference';
import { IValue } from './value';
export type IntervalSchedule = {
    occurrence: ITimeDifference;
    value: IValue;
};
