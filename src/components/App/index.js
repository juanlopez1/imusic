import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';
import Home from '../SearchResult';
import {GEOLOCATION_NAME, modalEnum} from '../../constants';
import {requestFetchLocation} from '../../actions/geolocation';
import {requestedShowModal} from '../../actions/modal';

class App extends PureComponent {
    componentDidMount() {
        if (GEOLOCATION_NAME in navigator) {
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
            <BrowserRouter>
                <main>
                    <Header/>
                    <div className="content-container">
                        <Switch>
                            <Route path="/album/:id" component={Home}/>
                            <Route path="/artist/:id" component={Home}/>
                            <Route component={Home}/>
                        </Switch>
                    </div>
                    <Footer/>
                </main>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    requestFetchLocation: PropTypes.func.isRequired,
    requestedShowModal: PropTypes.func.isRequired
};

export default connect(
    null,
    {requestFetchLocation, requestedShowModal}
)(App);
