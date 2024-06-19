export const getPositionId = (pos) => {
    const name = pos.instrument?.name ? pos.instrument.name.toLowerCase() : undefined;
    const ids = [pos.instrument?.internalId, pos.instrument?.isin, name, pos.instrument?.mic, pos.instrument?.symbol].filter(it => !!it);
    return ids.filter(it => typeof it === 'string').map(id => id.trim().replace(' ', '')).join('_');
};
