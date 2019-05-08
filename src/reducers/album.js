import {ALBUMS_FETCH_SUCCEEDED} from '../actions/album';

const album = (state = {}, action) => {
    switch (action.type) {
        case ALBUMS_FETCH_SUCCEEDED:
            return {...state, searchResults: action.albums};
        default:
            return state;
    }
};

export default album;
