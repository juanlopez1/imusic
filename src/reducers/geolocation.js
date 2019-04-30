import {
    LOCATION_FETCH_REQUESTED,
    LOCATION_FETCH_SUCCEEDED,
    LOCATION_FETCH_FAILED,
    LOCATION_SET_REQUESTED
} from '../actions/geolocation';

const geolocation = (state = {fetching: false}, action) => {
    switch (action.type) {
        case LOCATION_FETCH_REQUESTED:
            return {...state, fetching: true};
        case LOCATION_FETCH_SUCCEEDED:
            return {...state, fetching: false, location: action.location};
        case LOCATION_FETCH_FAILED:
            return {...state, fetching: false};
        case LOCATION_SET_REQUESTED:
            return {...state, location: action.location};
        default:
            return state;
    }
};

export default geolocation;
