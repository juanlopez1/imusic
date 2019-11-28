import {floor, parseInt} from 'lodash';

const getTrackDuration = milliseconds => {
    let seconds = parseInt(floor(milliseconds / 1000));
    const minutes = parseInt(floor(seconds / 60));
    seconds -= minutes * 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default getTrackDuration;
