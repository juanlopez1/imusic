import {ARTISTS_FETCH_SUCCEEDED} from '../actions/artist';

const artist = (state = {}, action) => {
    switch (action.type) {
        case ARTISTS_FETCH_SUCCEEDED:
            return {...state, searchResults: action.artists};
        default:
            return state;
    }
};

export default artist;
