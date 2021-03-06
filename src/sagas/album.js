import {call, put} from 'redux-saga/effects';
import {chunk, head} from 'lodash';

import {AlbumService} from '../services';
import {pickAlbumsData} from '../util';
import {notifyFetchAlbumFailed, receiveAlbum, receiveAlbums} from '../actions/album';

export function* fetchAlbum({id}) {
    try {
        const {results} = yield call(AlbumService.fetchAlbum, id);

        if (!results || results.length === 0) {
            yield put(notifyFetchAlbumFailed('This content is unavailable'));
        }

        const albumDetails = {
            details: head(results),
            tracks: results.slice(1, results.length)
        };
        yield put(receiveAlbum(albumDetails));
    } catch (e) {
        console.error('An error occurred while albums details.', e);
        yield put(notifyFetchAlbumFailed('This content is unavailable'));
    }
}

export function* fetchAlbums(term, countryCode) {
    try {
        const {results} = yield call(AlbumService.fetchAlbums, term, countryCode);
        const chunkedAlbums = chunk(pickAlbumsData(results), 30);
        yield put(receiveAlbums(chunkedAlbums, chunkedAlbums.length));
    } catch (e) {
        console.error('An error occurred while fetching albums.', e);
    }
}
