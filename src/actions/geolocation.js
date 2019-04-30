export const LOCATION_FETCH_REQUESTED = 'LOCATION_FETCH_REQUESTED';
export const LOCATION_FETCH_SUCCEEDED = 'LOCATION_FETCH_SUCCEEDED';
export const LOCATION_FETCH_FAILED = 'LOCATION_FETCH_FAILED';

export const requestFetchLocation = coordinates => ({
    type: LOCATION_FETCH_REQUESTED,
    coordinates
});

export const receiveLocation = location => ({
    type: LOCATION_FETCH_SUCCEEDED,
    location
});

export const fetchLocationFailed = () => ({
    type: LOCATION_FETCH_FAILED
});

export const LOCATION_SET_REQUESTED = 'LOCATION_SET_REQUESTED';

export const requestSetLocation = location => ({
    type: LOCATION_SET_REQUESTED,
    location
});
