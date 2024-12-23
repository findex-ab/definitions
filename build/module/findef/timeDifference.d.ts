export declare enum ETimeDifferenceUnit {
    MILLISECOND = "MILLISECOND",
    SECOND = "SECOND",
    MINUTE = "MINUTE",
    HOUR = "HOUR",
    DAY = "DAY",
    WEEK = "WEEK",
    MONTH = "MONTH",
    HALF_YEAR = "HALF_YEAR",
    YEAR = "YEAR"
}
export type ITimeDifference = {
    unit: ETimeDifferenceUnit;
    length: number;
};
