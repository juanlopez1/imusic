import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import {map} from 'lodash';

import {AlbumCard, LoadingSpinner} from '../common';
import {albumPropType, artistPropType} from '../../util';

class Home extends PureComponent {
    renderContent() {
        const {albums, artists} = this.props;
        return (
            <Fragment>
                <Row>
                    <h3>Artists</h3>
                </Row>
                <Row>
                    {map(artists, album => <AlbumCard key={album.artistId} album={album}/>)}
                </Row>
                <Row>
                    <h3>Albums</h3>
                </Row>
                <Row>
                    {map(albums, album => <AlbumCard key={album.collectionId} album={album}/>)}
                </Row>
            </Fragment>
        );
    }

    render() {
        return this.props.searching ? <LoadingSpinner color="dark"/> : this.renderContent();
    }
}

Home.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            search: PropTypes.string
        })
    }).isRequired,
    artists: PropTypes.arrayOf(artistPropType),
    albums: PropTypes.arrayOf(albumPropType),
    searching: PropTypes.bool
};

Home.defaultProps = {
    albums: [],
    artists: [],
    searching: false
};

export default connect(
    state => ({
        artists: state.artist.searchResults,
        albums: state.album.searchResults,
        term: state.search.term,
        searching: state.search.searching
    })
)(Home);
