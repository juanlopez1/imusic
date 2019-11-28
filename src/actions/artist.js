export const ARTIST_FETCH_REQUESTED = 'ARTIST_FETCH_REQUESTED';
export const ARTIST_FETCH_SUCCEEDED = 'ARTIST_FETCH_SUCCEEDED';
export const ARTIST_FETCH_FAILED = 'ARTIST_FETCH_FAILED';

export const requestArtist = id => ({
    type: ARTIST_FETCH_REQUESTED, id
});

export const receiveArtist = artist => ({
    type: ARTIST_FETCH_SUCCEEDED, artist
});

export const notifyFetchArtistFailed = errorMessage => ({
    type: ARTIST_FETCH_FAILED, errorMessage
});

export const ARTISTS_FETCH_SUCCEEDED = 'ARTISTS_FETCH_SUCCEEDED';

export const receiveArtists = (artists, pages) => ({
    type: ARTISTS_FETCH_SUCCEEDED, artists, pages
});

export const ARTIST_PAGE_HANDLE_CHANGE = 'ARTIST_PAGE_HANDLE_CHANGE';

export const handleChangeArtistPage = page => ({
    type: ARTIST_PAGE_HANDLE_CHANGE, page
});
