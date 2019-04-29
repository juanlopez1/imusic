export const LOCATION_FETCH_REQUESTED = 'LOCATION_FETCH_REQUESTED';
export const LOCATION_FETCH_SUCCEEDED = 'LOCATION_FETCH_SUCCEEDED';

export const requestFetchLocation = coords => ({
    type: LOCATION_FETCH_REQUESTED,
    coords
});

export const receiveLocation = location => ({
    type: LOCATION_FETCH_SUCCEEDED,
    location
});
