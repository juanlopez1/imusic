import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AlbumGrid from '../common/AlbumGrid';
import Details from './Details';
import {LoadingSpinner} from '../common';
import {requestArtist} from '../../actions/artist';
import {albumPropType, artistPropType} from '../../util';

class Artist extends PureComponent {
    componentDidMount() {
        this.props.requestArtist(this.props.match.params.id);
    }

    handleClickAlbumCard(id) {
        this.props.history.push(`/album/${id}`);
    }

    renderContent() {
        const {albums, details} = this.props.artist;
        return (
            <Fragment>
                <Details details={details}/>
                <div className="album-container">
                    <h2>Albums</h2>
                    <AlbumGrid albums={albums} onClick={id => this.handleClickAlbumCard(id)}/>
                </div>
            </Fragment>
        );
    }

    render() {
        return this.props.artist ? this.renderContent() : <LoadingSpinner color="dark"/>;
    }
}

Artist.propTypes = {
    requestArtist: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    artist: PropTypes.shape({
        details: artistPropType,
        albums: PropTypes.arrayOf(albumPropType)
    })
};

Artist.defaultProps = {
    artist: null
};

export default connect(
    state => ({
        artist: state.artist.artist
    }),
    {requestArtist}
)(Artist);
