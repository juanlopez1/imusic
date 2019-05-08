import {takeLatest, all} from 'redux-saga/effects';

import {CONTENT_SEARCH_REQUESTED} from '../actions/panel';
import {LOCATION_FETCH_REQUESTED} from '../actions/geolocation';
import {fetchContent} from './panel';
import {fetchLocation} from './geolocation';

function* root() {
    yield all([
        takeLatest(CONTENT_SEARCH_REQUESTED, fetchContent),
        takeLatest(LOCATION_FETCH_REQUESTED, fetchLocation)
    ]);
}

export default root;
