import HttpService from './http';

const {REACT_APP_GEOLOCATION_ENDPOINT} = process.env;

class GeolocationService {
    static async fetchLocation(latitude, longitude) {
        const query = new URLSearchParams();
        query.set('lat', latitude);
        query.set('long', longitude);
        return HttpService.get(`${REACT_APP_GEOLOCATION_ENDPOINT}?${query.toString()}`);
    }
}

export default GeolocationService;
