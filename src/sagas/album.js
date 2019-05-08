/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {AlbumService} from '../services';
import {pickAlbumsData} from '../util';
import {receiveAlbums} from '../actions/album';

export function* fetchAlbums(term, countryCode) {
    try {
        const {results} = yield call(AlbumService.fetchAlbums, term, countryCode);
        yield put(receiveAlbums(pickAlbumsData(results)));
    } catch (e) {
        console.error('An error occurred while fetching albums.', e);
    }
}
