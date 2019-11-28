/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';
import {chunk} from 'lodash';

import {ArtistService} from '../services';
import {pickArtistsData} from '../util';
import {receiveArtists} from '../actions/artist';

export function* fetchArtists(term, countryCode) {
    try {
        const {results} = yield call(ArtistService.fetchArtists, term, countryCode);
        const chunkedArtists = chunk(pickArtistsData(results), 30);
        yield put(receiveArtists(chunkedArtists, chunkedArtists.length));
    } catch (e) {
        console.error('An error occurred while fetching artist.', e);
    }
}
