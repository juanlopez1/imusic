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
        const {artist, errorMessage} = this.props;

        if (errorMessage) {
            return <h1>{errorMessage}</h1>;
        }
        if (artist) {
            return this.renderContent();
        }
        return <LoadingSpinner color="dark"/>;
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
        albums: PropTypes.arrayOf(
            PropTypes.arrayOf(albumPropType)
        )
    }),
    errorMessage: PropTypes.string
};

Artist.defaultProps = {
    artist: null,
    errorMessage: null
};

export default connect(
    state => ({
        artist: state.artist.artist,
        errorMessage: state.artist.errorMessage
    }),
    {requestArtist}
)(Artist);
