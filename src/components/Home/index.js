import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Home extends PureComponent {
    static propTypes = {
        location: PropTypes.shape({})
    };

    static defaultProps = {
        location: null
    };

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
    })
)(Home);
