import {chunk} from 'lodash';

import {
    ARTIST_FETCH_FAILED,
    ARTIST_FETCH_REQUESTED,
    ARTIST_FETCH_SUCCEEDED,
    ARTISTS_FETCH_SUCCEEDED,
    ARTIST_PAGE_HANDLE_CHANGE
} from '../actions/artist';

const artist = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_FETCH_FAILED:
            return {...state, errorMessage: action.errorMessage};
        case ARTIST_FETCH_REQUESTED:
            return {...state, artist: null, errorMessage: null};
        case ARTIST_FETCH_SUCCEEDED:
            return {...state, artist: action.artist};
        case ARTISTS_FETCH_SUCCEEDED:
            return {...state, artists: action.artists, pages: action.pages};
        case ARTIST_PAGE_HANDLE_CHANGE:
            return {
                ...state,
                artistsInView: chunk(state.artists[action.page - 1], 6),
                selectedPage: action.page
            };
        default:
            return state;
    }
};

export default artist;
