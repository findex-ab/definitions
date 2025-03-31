export const getLogoURL = (logo) => {
    if (logo === null || typeof logo === 'undefined')
        return undefined;
    if (typeof logo === 'object') {
        const logoObj = logo;
        if (typeof logoObj.url === 'string') {
            return logoObj.url;
        }
    }
    if (typeof logo === 'string') {
        if (logo.startsWith('http'))
            return logo;
    }
    return undefined;
};
