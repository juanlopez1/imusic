/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {ArtistService} from '../services';
import {receiveArtists} from '../actions/artist';

export function* fetchArtists(term, countryCode) {
    try {
        const {results} = yield call(ArtistService.fetchArtists, term, countryCode);
        const artists = results;
        console.log(artists);
        yield put(receiveArtists(artists));
    } catch (e) {
        console.error('An error occurred while fetching artist.', e);
    }
}
