import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import App from '../components/App';
import Modal from '../components/Modal';
import DevTools from './DevTools';

const Root = ({store}) => (
    <Provider store={store}>
        <Fragment>
            <DevTools/>
            <Modal/>
            <App/>
        </Fragment>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({}).isRequired
};

export default Root;
