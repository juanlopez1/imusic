import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Col, Nav, Row, Tab
} from 'react-bootstrap';

import Content from './Content';

const Home = ({searching}) => (
    <Tab.Container id="column-pills" defaultActiveKey="artists">
        <Row>
            <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="artists" disabled={searching}>
                            Artist
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="albums" disabled={searching}>
                            Albums
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={10}>
                <Content/>
            </Col>
        </Row>
    </Tab.Container>
);

Home.propTypes = {
    searching: PropTypes.bool
};

Home.defaultProps = {
    searching: false
};

export default connect(
    state => ({
        searching: state.search.searching
    })
)(Home);
