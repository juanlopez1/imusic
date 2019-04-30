import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Geolocation from './Geolocation';
import {modalEnum} from '../../constants';

const Modal = ({modalType}) => {
    switch (modalType) {
        case modalEnum.GEOLOCATION:
            return <Geolocation/>;
        default:
            return null;
    }
};

Modal.propTypes = {
    modalType: PropTypes.string
};

Modal.defaultProps = {
    modalType: null
};

export default connect(
    state => ({
        modalType: state.modal.modalType
    })
)(Modal);
