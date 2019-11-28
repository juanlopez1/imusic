import {chunk} from 'lodash';

import {
    ALBUM_FETCH_FAILED,
    ALBUM_FETCH_REQUESTED,
    ALBUM_FETCH_SUCCEEDED,
    ALBUMS_FETCH_SUCCEEDED,
    ALBUMS_PAGE_HANDLE_CHANGE
} from '../actions/album';

const album = (state = {}, action) => {
    switch (action.type) {
        case ALBUM_FETCH_FAILED:
            return {...state, errorMessage: action.errorMessage};
        case ALBUM_FETCH_REQUESTED:
            return {...state, album: null, errorMessage: null};
        case ALBUM_FETCH_SUCCEEDED:
            return {...state, album: action.album};
        case ALBUMS_FETCH_SUCCEEDED:
            return {...state, albums: action.albums, pages: action.pages};
        case ALBUMS_PAGE_HANDLE_CHANGE:
            return {
                ...state,
                albumsInView: chunk(state.albums[action.page - 1], 6),
                selectedPage: action.page
            };
        default:
            return state;
    }
};

export default album;
