import {takeLatest, all} from 'redux-saga/effects';

import {ALBUM_FETCH_REQUESTED} from '../actions/album';
import {ARTIST_FETCH_REQUESTED} from '../actions/artist';
import {CONTENT_SEARCH_REQUESTED} from '../actions/search';
import {LOCATION_FETCH_REQUESTED} from '../actions/geolocation';
import {fetchAlbum} from './album';
import {fetchArtist} from './artist';
import {fetchContent} from './search';
import {fetchLocation} from './geolocation';

function* root() {
    yield all([
        takeLatest(ALBUM_FETCH_REQUESTED, fetchAlbum),
        takeLatest(ARTIST_FETCH_REQUESTED, fetchArtist),
        takeLatest(CONTENT_SEARCH_REQUESTED, fetchContent),
        takeLatest(LOCATION_FETCH_REQUESTED, fetchLocation)
    ]);
}

export default root;
