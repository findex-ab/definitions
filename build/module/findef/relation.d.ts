export type IRelation<T = {}> = T & {
    id: string;
    parentId?: string;
    children?: string[];
};
