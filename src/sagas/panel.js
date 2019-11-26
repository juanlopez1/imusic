/* eslint-disable import/prefer-default-export */
import {call, put, select} from 'redux-saga/effects';

import {fetchAlbums} from './album';
import {fetchArtists} from './artist';
import {searchContentSucceeded} from '../actions/panel';

export function* fetchContent({term}) {
    try {
        const countryCode = yield select(({geolocation}) => geolocation.location.countryCode);
        yield call(fetchArtists, term, countryCode);
        yield call(fetchAlbums, term, countryCode);
        yield put(searchContentSucceeded());
    } catch (e) {
        console.error('An error occurred while fetching content.', e);
    }
}
