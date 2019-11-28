export const ALBUM_FETCH_REQUESTED = 'ALBUM_FETCH_REQUESTED';
export const ALBUM_FETCH_SUCCEEDED = 'ALBUM_FETCH_SUCCEEDED';
export const ALBUM_FETCH_FAILED = 'ALBUM_FETCH_FAILED';

export const requestAlbum = id => ({
    type: ALBUM_FETCH_REQUESTED, id
});

export const receiveAlbum = album => ({
    type: ALBUM_FETCH_SUCCEEDED, album
});

export const notifyFetchAlbumFailed = errorMessage => ({
    type: ALBUM_FETCH_FAILED, errorMessage
});

export const ALBUMS_FETCH_SUCCEEDED = 'ALBUMS_FETCH_SUCCEEDED';

export const receiveAlbums = (albums, pages) => ({
    type: ALBUMS_FETCH_SUCCEEDED, albums, pages
});

export const ALBUMS_PAGE_HANDLE_CHANGE = 'ALBUMS_PAGE_HANDLE_CHANGE';

export const handleChangeAlbumsPage = page => ({
    type: ALBUMS_PAGE_HANDLE_CHANGE, page
});
