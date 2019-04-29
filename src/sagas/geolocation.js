/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {GeolocationService} from '../services';
import {receiveLocation} from '../actions/geolocation';

export function* fetchLocation({coords: {latitude, longitude}}) {
    try {
        const {country, countryCode} = yield call(GeolocationService.fetchLocation, latitude, longitude);
        yield put(receiveLocation({country, countryCode}));
    } catch (e) {
        console.error(e);
    }
}
