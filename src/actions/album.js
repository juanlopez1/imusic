export const ALBUMS_FETCH_SUCCEEDED = 'ALBUMS_FETCH_SUCCEEDED';

export const receiveAlbums = albums => ({
    type: ALBUMS_FETCH_SUCCEEDED,
    albums
});
