import ss from "superstruct";
export interface IValue {
    value: number;
    percentage?: number;
    type?: string;
}
export declare const ValueSchema: ss.Describe<IValue>;
