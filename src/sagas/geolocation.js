/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {GeolocationService} from '../services';
import {modalEnum} from '../constants';
import {fetchLocationFailed, receiveLocation} from '../actions/geolocation';
import {requestedShowModal} from '../actions/modal';

export function* fetchLocation({coordinates: {latitude, longitude}}) {
    try {
        const {country, countryCode} = yield call(GeolocationService.fetchLocation, latitude, longitude);
        yield put(receiveLocation({country, countryCode}));
    } catch (e) {
        console.error('An error occurred while fetching location.', e);
        yield put(fetchLocationFailed());
        yield put(requestedShowModal(modalEnum.GEOLOCATION));
    }
}
