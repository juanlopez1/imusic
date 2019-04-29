const artist = (state = {}, action) => {
    switch (action.type) {
        case 'foo':
            return {...state, artist: action.artist};
        default:
            return state;
    }
};

export default artist;
