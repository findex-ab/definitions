export type IAIModel = {
    /**
     * The model identifier, which can be referenced in the API endpoints.
     */
    id: string;
    /**
     * The Unix timestamp (in seconds) when the model was created.
     */
    created: number;
    /**
     * The object type, which is always "model".
     */
    object: 'model';
    /**
     * The organization that owns the model.
     */
    owned_by: string;
};
