import {CONTENT_SEARCH_REQUESTED, CONTENT_SEARCH_SUCCEEDED, SEARCH_PARAM_HANDLE_CHANGE} from '../actions/search';

const initialState = {
    lastSearch: null,
    searching: false,
    searchParam: ''
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case CONTENT_SEARCH_REQUESTED:
            return {...state, searching: true, lastSearch: state.searchParam};
        case CONTENT_SEARCH_SUCCEEDED:
            return {...state, searching: false};
        case SEARCH_PARAM_HANDLE_CHANGE:
            return {...state, searchParam: action.searchParam};
        default:
            return state;
    }
};

export default search;
