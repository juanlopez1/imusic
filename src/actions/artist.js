export const ARTISTS_FETCH_SUCCEEDED = 'ARTISTS_FETCH_SUCCEEDED';

export const receiveArtists = (artists, pages) => ({
    type: ARTISTS_FETCH_SUCCEEDED, artists, pages
});

export const ARTIST_PAGE_HANDLE_CHANGE = 'ARTIST_PAGE_HANDLE_CHANGE';

export const handleChangeArtistPage = page => ({
    type: ARTIST_PAGE_HANDLE_CHANGE, page
});
