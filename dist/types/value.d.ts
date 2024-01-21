import * as ss from "superstruct";
export interface IValue {
    value: number;
    percentage?: number;
    type?: string;
    time?: Date;
}
export declare const ValueSchema: ss.Describe<IValue>;
