export declare const notNullish: <T = any>(val?: T | null | undefined) => val is Exclude<T, null | undefined>;