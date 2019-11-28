import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Col, Pagination, Row, Tab
} from 'react-bootstrap';
import {isNull, map, times} from 'lodash';

import {AlbumCard, ArtistCard, LoadingSpinner} from '../common';
import {albumPropType, artistPropType} from '../../util';
import {handleChangeAlbumsPage} from '../../actions/album';
import {handleChangeArtistPage} from '../../actions/artist';

class Content extends PureComponent {
    handleClickAlbumPage(page) {
        this.props.handleChangeAlbumsPage(page);
    }

    handleClickArtistPage(page) {
        this.props.handleChangeArtistPage(page);
    }

    render() {
        const {
            albumsInView, albumSelectedPage, albumPages, artistsInView,
            artistSelectedPage, artistPages, lastSearch, searching
        } = this.props;

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
                    <Row className="pagination-row">
                        <Pagination>
                            {times(artistPages, iterator => {
                                const page = iterator + 1;
                                return (
                                    <Pagination.Item
                                        key={page}
                                        active={page === artistSelectedPage}
                                        onClick={() => this.handleClickArtistPage(page)}
                                    >
                                        {page}
                                    </Pagination.Item>
                                );
                            })}
                        </Pagination>
                    </Row>
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
                    <Row className="pagination-row">
                        <Pagination>
                            {times(albumPages, iterator => {
                                const page = iterator + 1;
                                return (
                                    <Pagination.Item
                                        key={page}
                                        active={page === albumSelectedPage}
                                        onClick={() => this.handleClickAlbumPage(page)}
                                    >
                                        {page}
                                    </Pagination.Item>
                                );
                            })}
                        </Pagination>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        );
    }
}

Content.propTypes = {
    handleChangeAlbumsPage: PropTypes.func.isRequired,
    handleChangeArtistPage: PropTypes.func.isRequired,
    albumsInView: PropTypes.arrayOf(
        PropTypes.arrayOf(albumPropType)
    ),
    albumSelectedPage: PropTypes.number,
    albumPages: PropTypes.number,
    artistsInView: PropTypes.arrayOf(
        PropTypes.arrayOf(artistPropType)
    ),
    artistSelectedPage: PropTypes.number,
    artistPages: PropTypes.number,
    lastSearch: PropTypes.string,
    searching: PropTypes.bool
};

Content.defaultProps = {
    albumsInView: [],
    albumSelectedPage: 0,
    albumPages: 0,
    artistsInView: [],
    artistSelectedPage: 0,
    artistPages: 0,
    lastSearch: null,
    searching: false
};

export default connect(
    state => ({
        albumsInView: state.album.albumsInView,
        albumSelectedPage: state.album.selectedPage,
        albumPages: state.album.pages,
        artistsInView: state.artist.artistsInView,
        artistSelectedPage: state.artist.selectedPage,
        artistPages: state.artist.pages,
        lastSearch: state.search.lastSearch,
        searching: state.search.searching
    }),
    {handleChangeAlbumsPage, handleChangeArtistPage}
)(Content);
