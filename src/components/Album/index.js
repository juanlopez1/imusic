import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Details from './Details';
import TrackList from './TrackList';
import {LoadingSpinner} from '../common';
import {requestAlbum} from '../../actions/album';
import {albumPropType, trackPropType} from '../../util';

class Album extends PureComponent {
    componentDidMount() {
        this.props.requestAlbum(this.props.match.params.id);
    }

    renderContent() {
        const {details, tracks} = this.props.album;
        return (
            <Fragment>
                <Details details={details}/>
                <TrackList tracks={tracks}/>
            </Fragment>
        );
    }

    render() {
        return this.props.album ? this.renderContent() : <LoadingSpinner color="dark"/>;
    }
}

Album.propTypes = {
    requestAlbum: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    album: PropTypes.shape({
        details: albumPropType,
        tracks: PropTypes.arrayOf(trackPropType)
    })
};

Album.defaultProps = {
    album: null
};

export default connect(
    state => ({
        album: state.album.album
    }),
    {requestAlbum}
)(Album);
