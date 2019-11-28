import {combineReducers} from 'redux';

import album from './album';
import artist from './artist';
import geolocation from './geolocation';
import modal from './modal';
import search from './search';

export default combineReducers({
    artist, album, geolocation, modal, search
});
