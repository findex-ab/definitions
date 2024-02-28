import { DocumentId } from "./documentId";
export type PortfolioStatistics = {
    userId: DocumentId;
    transaction: {
        count: number;
    };
    value: {
        change: number;
        roi: number;
    };
};
