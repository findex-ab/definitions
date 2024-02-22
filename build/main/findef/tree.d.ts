export type TTree<T = any> = {
    name: string;
    children?: TTree<T>[];
    data?: T;
    id?: string;
    selected?: boolean;
};
