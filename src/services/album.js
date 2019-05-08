import HttpService from './http';

const {REACT_APP_ITUNES_ENDPOINT} = process.env;

class AlbumService {
    static fetchAlbums(term, country) {
        const query = new URLSearchParams();
        query.set('country', country);
        query.set('term', term);
        return HttpService.get(`${REACT_APP_ITUNES_ENDPOINT}search?media=music&entity=album&${query.toString()}`);
    }
}

export default AlbumService;
