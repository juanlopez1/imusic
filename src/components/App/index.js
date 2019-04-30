import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from '../Home';
import {modalEnum} from '../../constants';
import {requestFetchLocation} from '../../actions/geolocation';
import {requestedShowModal} from '../../actions/modal';

class App extends PureComponent {
    static propTypes = {
        requestFetchLocation: PropTypes.func.isRequired,
        requestedShowModal: PropTypes.func.isRequired
    };

    componentDidMount() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => this.props.requestFetchLocation(position.coords),
                () => this.props.requestedShowModal(modalEnum.GEOLOCATION)
            );
        } else {
            this.props.requestedShowModal(modalEnum.GEOLOCATION);
        }
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </HashRouter>

        );
    }
}

export default connect(
    null,
    dispatch => ({
        requestFetchLocation: position => dispatch(requestFetchLocation(position)),
        requestedShowModal: type => dispatch(requestedShowModal(type))
    })
)(App);
