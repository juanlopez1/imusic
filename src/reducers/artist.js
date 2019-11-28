import {chunk} from 'lodash';

import {ARTISTS_FETCH_SUCCEEDED, ARTIST_PAGE_HANDLE_CHANGE} from '../actions/artist';

const artist = (state = {}, action) => {
    switch (action.type) {
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
