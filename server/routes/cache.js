const log4js = require('log4js');
var logger = log4js.getLogger();
const NodeCache = require('node-cache');
const config = require('../config.js')

// stdTTL: time to live in seconds for every generated cache element.
// 10s for testing purpose
// const cache = new NodeCache({ stdTTL: 10 })
// 8 hours, minutes, seconds
const cache = new NodeCache({ stdTTL: 12 * 60 * 60, checkperiod: 6 * 60 * 60, useClones: false });
const ENDPOINT_BASE = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:8081/': 'http://192.168.40.10:8081/';

/* 
    authenticate does not work yet, also need to consult with Tristan
    to see what authentication method should we be using
    UPDATE: Jenny said we never implemented this in IIL

// function to get authentication token so we can make requests
getToken = async () => { 
    let token;
    await axios({
        method: "POST",
        url: ENDPOINT_BASE + "authenticate",
        data: {username: config.username, password: config.password},
    }).then((response) => {
        if(response.data.token) {
            return token = response.data.token
        }
    }).catch((error) => {
        logger.error(error)
    });
    return token
}

// Checks if any and every key in the cache has expired, checks on every NodeCache checkperiod
cache.on( 'expired', async ( key, value ) => { 
    //we only want to warm on specific routes(company names, project/series)
    const endpoints = ['/companies/names', '/allProjectSeries'] 
    const endpointIndex = endpoints.findIndex(v=>  key.includes(v))
    const warm = endpointIndex !== -1
    // if key is in our endpoint list make a request to that endpoint so there is always
    // something in the cache, otherwise, do nothing
    if (warm) { 
        token = await getToken();
        logger.info('WARMING endpoint: ', key)
        axios( {
            url: ENDPOINT_BASE + endpoints[endpointIndex],
            method: 'POST',
            headers: {
                'cache-control': 'no-cache',
                'access-token': token
        }})
        .catch(error => {
            logger.error(error)
        });
    }
})
*/

getURL = (req) => {
    const url = req.protocol + '://' + req.headers.host + req.originalUrl;
    return url;
}

saveToCache = (req, data) => {
    const url = getURL(req);
    logger.info("CACHED", url);
    cache.set(url, data);
}

getFromCache = (req) => {
    const url = getURL(req);
    logger.info("Is this actually hit? ", url);
    const content = cache.get(url);
    // logger.info("GOOD CONTENT", content);
    return content
}

isInCache = (req) => {
    const tempURL = getURL(req)
    logger.info(`URL checking is: ${tempURL}`)
    return cache.has(tempURL)
}

module.exports = { getFromCache, saveToCache, isInCache }