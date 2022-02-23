class API {
    constructor(themeName) {
        this._themeName = themeName;
        this.baseUrl = process.env.NODE_ENV !== 'production' ? '//alonelanding.local/wp-json/be-landing/' : '//api.alonethemes.com/wp-json/be-landing/';
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    }

    parseJSON(response) {
        return response.json()
    }

    getData = () => {
        return fetch(this.baseUrl + this._themeName)
        .then(this.checkStatus)
        .then(this.parseJSON);
    }
}

export default API;
