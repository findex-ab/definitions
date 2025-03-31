export const getLogoURL = (logo, token) => {
    const getUrl = () => {
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
    const url = getUrl();
    if (!url)
        return undefined;
    if (typeof token === 'string' && !url.includes('?')) {
        return `${url}?token=${token}`;
    }
    return url;
};
