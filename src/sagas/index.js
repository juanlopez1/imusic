import {takeEvery, all} from 'redux-saga/effects';

import {LOCATION_FETCH_REQUESTED} from '../actions/geolocation';
import {fetchLocation} from './geolocation';

function* root() {
    yield all([
        takeEvery(LOCATION_FETCH_REQUESTED, fetchLocation)
    ]);
}

export default root;
