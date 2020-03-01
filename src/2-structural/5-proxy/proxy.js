const axios = require('axios');

const request = async (url) => {
    try {
        const response = await axios(url);
        return {
            status: 'Success',
            response
        };
    } catch (error) {
        return {
            status: 'Error occured',
            error
        };
    }
}

class ProxiedRequest {

    constructor() {
        this.cache = new Object();
    }

    async get(url) {
        if (Object.keys(this.cache).find(key => key === url)) {
            return {
                source: 'cached data',
                data: this.cache[url]
            };
        }

        const response = await request(url);
        this.cache[url] = response;
        return {
            source: 'live data',
            data: response
        };
    }
}

module.exports = {
    ProxiedRequest
};
