import {combineReducers} from 'redux';

import album from './album';
import artist from './artist';
import geolocation from './geolocation';
import modal from './modal';

export default combineReducers({
    artist, album, geolocation, modal
});
