import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from '../Home';
import {requestFetchLocation} from '../../actions/geolocation';

import './App.css';

class App extends PureComponent {
    static propTypes = {
        requestFetchLocation: PropTypes.func.isRequired
    };

    componentDidMount() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => this.props.requestFetchLocation(position.coords),
                error => {
                    console.error(`An error occurred while attempting to activate the geolocation.
                    Error's details: ${error.message} (code ${error.code})`);
                }
            );
        } else {
            // TODO: default country or selector
        }
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <main>
                        <Route path="/" component={Home}/>
                    </main>
                </Switch>
            </HashRouter>

        );
    }
}

export default connect(
    null,
    dispatch => ({
        requestFetchLocation: position => dispatch(requestFetchLocation(position))
    })
)(App);
