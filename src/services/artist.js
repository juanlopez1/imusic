import HttpService from './http';

const {REACT_APP_ITUNES_ENDPOINT} = process.env;

class ArtistService {
    static fetchArtists(term, countryCode) {
        const query = new URLSearchParams();
        query.set('country', countryCode);
        query.set('term', term);
        return HttpService.get(`${REACT_APP_ITUNES_ENDPOINT}search?media=music&entity=musicArtist&${query.toString()}`);
    }
}

export default ArtistService;
