import {MODAL_HIDE_REQUESTED, MODAL_SHOW_REQUESTED} from '../actions/modal';

const modal = (state = {show: false}, action) => {
    switch (action.type) {
        case MODAL_SHOW_REQUESTED:
            return {...state, modalType: action.modalType, show: true};
        case MODAL_HIDE_REQUESTED:
            return {...state, show: false};
        default:
            return state;
    }
};

export default modal;
