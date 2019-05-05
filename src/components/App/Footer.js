import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    Button, Col, Row, Spinner
} from 'reactstrap';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

import {modalEnum} from '../../constants';
import {requestedShowModal} from '../../actions/modal';

const Footer = ({location, requestedShowModal: showModal}) => (
    <footer>
        <div className="footer-container">
            <Row>
                <Col sm={10}>
                    This site use your location for search iTunes content in the respective store.
                </Col>
                <Col sm={2}>
                    <Button
                        outline
                        color="info"
                        disabled={location === null}
                        onClick={() => showModal(modalEnum.GEOLOCATION)}
                    >
                        {location ? (
                            <Fragment>
                                <FontAwesomeIcon icon={faGlobe}/>
                                &nbsp;
                                {location.country}
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Spinner color="info"/>
                                &nbsp;
                                Locating
                            </Fragment>
                        )}
                    </Button>
                </Col>
            </Row>
        </div>
    </footer>
);

Footer.propTypes = {
    requestedShowModal: PropTypes.func.isRequired,
    location: PropTypes.shape({
        country: PropTypes.string,
        countryCode: PropTypes.string
    })
};

Footer.defaultProps = {
    location: null
};

export default connect(
    state => ({
        location: state.geolocation.location
    }),
    dispatch => ({
        requestedShowModal: type => dispatch(requestedShowModal(type))
    })
)(Footer);
