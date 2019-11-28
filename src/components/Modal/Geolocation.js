import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, FormControl, FormLabel, Modal
} from 'react-bootstrap';
import {head, map} from 'lodash';

import {availableCountries} from '../../constants';
import {requestedHideModal} from '../../actions/modal';
import {requestSetLocation} from '../../actions/geolocation';

class Geolocation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            location: head(availableCountries)
        };
    }

    handleChange(value) {
        this.setState(() => ({location: availableCountries[value]}));
    }

    handleSubmit() {
        this.props.requestSetLocation(this.state.location);
        this.props.requestedHideModal();
    }

    render() {
        const {show} = this.props;
        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Store Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormLabel>Choose your country or region</FormLabel>
                    <FormControl
                        aria-label="country"
                        aria-describedby="countrySelect"
                        as="select"
                        onChange={event => this.handleChange(event.target.value)}
                    >
                        {map(availableCountries, (item, index) => (
                            <option key={item.countryCode} value={index}>
                                {item.country}
                            </option>
                        ))}
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.handleSubmit()}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

Geolocation.propTypes = {
    requestedHideModal: PropTypes.func.isRequired,
    requestSetLocation: PropTypes.func.isRequired,
    show: PropTypes.bool
};

Geolocation.defaultProps = {
    show: false
};

export default connect(
    state => ({
        show: state.modal.show
    }),
    {requestedHideModal, requestSetLocation}
)(Geolocation);
