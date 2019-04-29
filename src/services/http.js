class HttpService {
    /**
     * Send a GET request to the given URL.
     * @param {String} url a URL where the request is send.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async get(url) {
        const response = await fetch(url);
        return response.json();
    }
}

export default HttpService;
