export const getPositionId = (pos) => {
    return pos.instrument?.internalId || pos.instrument?.isin || ((pos.instrument?.name || '').toLowerCase());
};
