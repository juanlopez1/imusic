import {combineReducers} from 'redux';

import album from './album';
import artist from './artist';
import geolocation from './geolocation';

export default combineReducers({artist, album, geolocation});
