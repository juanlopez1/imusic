/* eslint-disable import/prefer-default-export */
import {call, put, select} from 'redux-saga/effects';

import {fetchAlbums} from './album';
import {fetchArtists} from './artist';
import {handleChangeAlbumsPage} from '../actions/album';
import {handleChangeArtistPage} from '../actions/artist';
import {searchContentSucceeded} from '../actions/search';

export function* fetchContent() {
    try {
        const searchParam = yield select(({search}) => search.searchParam);
        const countryCode = yield select(({geolocation}) => geolocation.location.countryCode);
        yield call(fetchArtists, searchParam, countryCode);
        yield call(fetchAlbums, searchParam, countryCode);
        yield put(handleChangeAlbumsPage(1));
        yield put(handleChangeArtistPage(1));
        yield put(searchContentSucceeded());
    } catch (e) {
        console.error('An error occurred while fetching content.', e);
    }
}
