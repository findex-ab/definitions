import * as ss from "superstruct";
export interface IValue {
    value: number;
    percentage?: number;
    type?: string;
    time?: Date;
    __isValue?: boolean;
}
export declare const ValueSchema: ss.Describe<IValue>;
export declare const emptyValue: IValue;
export declare const isValue: (x: any) => x is IValue;
