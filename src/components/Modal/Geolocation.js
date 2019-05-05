import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import {head} from 'lodash';

import {availableCountries} from '../../constants';
import {requestedHideModal} from '../../actions/modal';
import {requestSetLocation} from '../../actions/geolocation';

class Geolocation extends PureComponent {
    static propTypes = {
        requestedHideModal: PropTypes.func.isRequired,
        requestSetLocation: PropTypes.func.isRequired,
        show: PropTypes.bool
    };

    static defaultProps = {
        show: false
    };

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
        return (
            <Modal isOpen={this.props.show}>
                <ModalHeader>Geolocation</ModalHeader>
                <ModalBody>
                    <Label for="country">Choose your country or region</Label>
                    <Input
                        id="country"
                        name="country"
                        type="select"
                        onChange={event => this.handleChange(event.target.value)}
                    >
                        {availableCountries.map((item, index) => (
                            <option key={item.countryCode} value={index}>
                                {item.country}
                            </option>
                        ))}
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleSubmit()}>
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(
    state => ({
        show: state.modal.show
    }),
    dispatch => ({
        requestedHideModal: () => dispatch(requestedHideModal()),
        requestSetLocation: location => dispatch(requestSetLocation(location))
    })
)(Geolocation);
