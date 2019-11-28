export const ALBUMS_FETCH_SUCCEEDED = 'ALBUMS_FETCH_SUCCEEDED';

export const receiveAlbums = (albums, pages) => ({
    type: ALBUMS_FETCH_SUCCEEDED, albums, pages
});

export const ALBUMS_PAGE_HANDLE_CHANGE = 'ALBUMS_PAGE_HANDLE_CHANGE';

export const handleChangeAlbumsPage = page => ({
    type: ALBUMS_PAGE_HANDLE_CHANGE, page
});
