export interface IValue {
  type?: string;
  percentage?: number;
  value: number;
}

export const isValue = (it: any): it is IValue => {
  return !!it && 'value' in it;
}
