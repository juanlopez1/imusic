export const CONTENT_SEARCH_REQUESTED = 'CONTENT_SEARCH_REQUESTED';
export const CONTENT_SEARCH_SUCCEEDED = 'CONTENT_SEARCH_SUCCEEDED';

export const requestSearchContent = () => ({
    type: CONTENT_SEARCH_REQUESTED
});

export const searchContentSucceeded = () => ({
    type: CONTENT_SEARCH_SUCCEEDED
});

export const SEARCH_PARAM_HANDLE_CHANGE = 'SEARCH_PARAM_HANDLE_CHANGE';

export const handleChangeSearchParam = searchParam => ({
    type: SEARCH_PARAM_HANDLE_CHANGE, searchParam
});
