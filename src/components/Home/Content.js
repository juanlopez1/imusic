import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
    Col, Pagination, Row, Tab
} from 'react-bootstrap';
import {isNull, map, times} from 'lodash';

import {AlbumGrid, ArtistCard, LoadingSpinner} from '../common';
import {albumPropType, artistPropType} from '../../util';
import {handleChangeAlbumsPage} from '../../actions/album';
import {handleChangeArtistPage} from '../../actions/artist';

class Content extends PureComponent {
    handleClickAlbumCard(id) {
        this.props.history.push(`/album/${id}`);
    }

    handleClickArtistCard(id) {
        this.props.history.push(`/artist/${id}`);
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
                                    <ArtistCard
                                        artist={artist}
                                        onClick={() => this.handleClickArtistCard(artist.artistId)}
                                    />
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
                                        onClick={() => this.props.handleChangeArtistPage(page)}
                                    >
                                        {page}
                                    </Pagination.Item>
                                );
                            })}
                        </Pagination>
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="albums">
                    <AlbumGrid albums={albumsInView} onClick={id => this.handleClickAlbumCard(id)}/>
                    <Row className="pagination-row">
                        <Pagination>
                            {times(albumPages, iterator => {
                                const page = iterator + 1;
                                return (
                                    <Pagination.Item
                                        key={page}
                                        active={page === albumSelectedPage}
                                        onClick={() => this.props.handleChangeAlbumsPage(page)}
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
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
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

export default withRouter(
    connect(
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
    )(Content)
);
