import React from 'react';
import PropTypes from 'prop-types';
import {Spinner} from 'react-bootstrap';

const LoadingSpinner = ({color}) => (
    <div className="spinner-container">
        <Spinner animation="border" variant={color}/>
    </div>
);

LoadingSpinner.propTypes = {
    color: PropTypes.string
};

LoadingSpinner.defaultProps = {
    color: null
};

export default LoadingSpinner;
