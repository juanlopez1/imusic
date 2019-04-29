import {
    LOCATION_FETCH_REQUESTED,
    LOCATION_FETCH_SUCCEEDED
} from '../actions/geolocation';

const geolocation = (state = {fetching: false}, action) => {
    switch (action.type) {
        case LOCATION_FETCH_REQUESTED:
            return {...state, fetching: true};
        case LOCATION_FETCH_SUCCEEDED:
            return {...state, fetching: false, location: action.location};
        default:
            return state;
    }
};

export default geolocation;
