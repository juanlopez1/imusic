export const CONTENT_SEARCH_REQUESTED = 'CONTENT_SEARCH_REQUESTED';
export const CONTENT_SEARCH_SUCCEEDED = 'CONTENT_SEARCH_SUCCEEDED';

export const requestSearchContent = term => ({
    type: CONTENT_SEARCH_REQUESTED,
    term
});

export const searchContentSucceeded = () => ({
    type: CONTENT_SEARCH_SUCCEEDED
});
