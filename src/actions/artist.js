export const ARTISTS_FETCH_SUCCEEDED = 'ARTISTS_FETCH_SUCCEEDED';

export const receiveArtists = artists => ({
    type: ARTISTS_FETCH_SUCCEEDED,
    artists
});
