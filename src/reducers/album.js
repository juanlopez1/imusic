const album = (state = {}, action) => {
    switch (action.type) {
        case 'foo':
            return {...state, album: action.album};
        default:
            return state;
    }
};

export default album;
