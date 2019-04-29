import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {requestFetchLocation} from '../actions/geolocation';

import './App.css';

class App extends PureComponent {
    static propTypes = {
        requestFetchLocation: PropTypes.func.isRequired,
        location: PropTypes.shape({})
    };

    componentDidMount() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => this.props.requestFetchLocation(position.coords),
                error => {
                    //TODO: default country or selector
                }
            );
        } else {
            //TODO: default country or selector
        }
    }

    render() {
        const {location} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    {location && `Welcome to iMusic, your country is ${location.country}`}
                </header>
            </div>
        );
    }
}

export default connect(
    state => ({
        location: state.geolocation.location
    }),
    dispatch => ({
        requestFetchLocation: position => dispatch(requestFetchLocation(position))
    })
)(App);
