import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

import Footer from './Footer';
import Header from './Header';
import Panel from './Panel';
import Home from '../Home';
import SearchResult from '../SearchResult';
import {GEOLOCATION_NAME, modalEnum} from '../../constants';
import {requestFetchLocation} from '../../actions/geolocation';
import {requestedShowModal} from '../../actions/modal';

class App extends PureComponent {
    static propTypes = {
        requestFetchLocation: PropTypes.func.isRequired,
        requestedShowModal: PropTypes.func.isRequired
    };

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
            <HashRouter>
                <Header/>
                <main>
                    <Row>
                        <Col sm={3}>
                            <Panel/>
                        </Col>
                        <Col sm={9}>
                            <Switch>
                                <Route path="/searchResult/:search" component={SearchResult}/>
                                <Route component={Home}/>
                            </Switch>
                        </Col>
                    </Row>
                </main>
                <Footer/>
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
