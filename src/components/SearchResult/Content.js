import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Col, Row, Tab} from 'react-bootstrap';
import {isNull, map} from 'lodash';

import {AlbumCard, ArtistCard, LoadingSpinner} from '../common';
import {albumPropType, artistPropType} from '../../util';

const Content = ({
    albumsInView, artistsInView, lastSearch, searching
}) => {
    if (isNull(lastSearch)) {
        return <h4>Search an artist or album with the search bar at the top of the page</h4>;
    }
    if (searching) {
        return <LoadingSpinner color="dark"/>;
    }
    return (
        <Tab.Content>
            <Tab.Pane eventKey="artists">
                {map(artistsInView, (chunk, index) => (
                    <Row key={index}>
                        {map(chunk, artist => (
                            <Col key={artist.artistId} sm={2}>
                                <ArtistCard artist={artist}/>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Tab.Pane>
            <Tab.Pane eventKey="albums">
                {map(albumsInView, (chunk, index) => (
                    <Row key={index}>
                        {map(chunk, album => (
                            <Col key={album.collectionId} sm={2}>
                                <AlbumCard album={album}/>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Tab.Pane>
        </Tab.Content>
    );
};

Content.propTypes = {
    artistsInView: PropTypes.arrayOf(
        PropTypes.arrayOf(artistPropType)
    ),
    albumsInView: PropTypes.arrayOf(
        PropTypes.arrayOf(albumPropType)
    ),
    lastSearch: PropTypes.string,
    searching: PropTypes.bool
};

Content.defaultProps = {
    artistsInView: [],
    albumsInView: [],
    lastSearch: null,
    searching: false
};

export default connect(
    state => ({
        albumsInView: state.album.albumsInView,
        artistsInView: state.artist.artistsInView,
        lastSearch: state.search.lastSearch,
        searching: state.search.searching
    })
)(Content);
