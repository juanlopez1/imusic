import {CONTENT_SEARCH_REQUESTED, CONTENT_SEARCH_SUCCEEDED} from '../actions/panel';

const panel = (state = {searching: false}, action) => {
    switch (action.type) {
        case CONTENT_SEARCH_REQUESTED:
            return {...state, term: action.term, searching: true};
        case CONTENT_SEARCH_SUCCEEDED:
            return {...state, searching: false};
        default:
            return state;
    }
};

export default panel;
