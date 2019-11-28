import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Artist extends PureComponent {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                hola
            </div>
        );
    }
}

Artist.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired
};

export default connect()(Artist);
