export type IEmbeddingVector = {
    uuid: string;
    category: string;
    dimensions: number;
    name?: string;
    raw?: Array<number>;
    metadata?: Record<string, any>;
};
