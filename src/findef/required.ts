export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T];
export type AllRequired<T> = RequiredFields<T, OptionalKeys<T>>;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
