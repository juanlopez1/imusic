import {call, put} from 'redux-saga/effects';
import {chunk, head} from 'lodash';

import {ArtistService} from '../services';
import {pickArtistsData} from '../util';
import {receiveArtist, receiveArtists} from '../actions/artist';

export function* fetchArtist({id}) {
    try {
        const {results} = yield call(ArtistService.fetchArtist, id);
        const artistDetails = {
            details: head(results),
            albums: chunk(results.slice(1, results.length), 6)
        };
        yield put(receiveArtist(artistDetails));
    } catch (e) {
        console.error('An error occurred while artist details.', e);
    }
}

export function* fetchArtists(term, countryCode) {
    try {
        const {results} = yield call(ArtistService.fetchArtists, term, countryCode);
        const chunkedArtists = chunk(pickArtistsData(results), 30);
        yield put(receiveArtists(chunkedArtists, chunkedArtists.length));
    } catch (e) {
        console.error('An error occurred while fetching artists.', e);
    }
}
