import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import {map} from 'lodash';

import {AlbumCard, LoadingSpinner} from '../common';
import {albumPropType, artistPropType} from '../../util';
import {requestSearchContent} from '../../actions/panel';

class SearchResult extends PureComponent {
    componentDidMount() {
        const {match: {params}, searching} = this.props;
        if (!searching && params.search) {
            this.props.requestSearchContent(params.search);
        }
    }

    renderContent() {
        const {albums, artists} = this.props;
        return (
            <div>
                <Row>
                    <h3>Artists</h3>
                </Row>
                <Row>
                    {map(artists, album => <AlbumCard key={album.collectionId} album={album}/>)}
                </Row>
                <Row>
                    <h3>Albums</h3>
                </Row>
                <Row>
                    {map(albums, album => <AlbumCard key={album.collectionId} album={album}/>)}
                </Row>
            </div>
        );
    }

    render() {
        return this.props.searching ? <LoadingSpinner color="dark"/> : this.renderContent();
    }
}

SearchResult.propTypes = {
    requestSearchContent: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            search: PropTypes.string
        })
    }).isRequired,
    artists: PropTypes.arrayOf(artistPropType),
    albums: PropTypes.arrayOf(albumPropType),
    searching: PropTypes.bool
};

SearchResult.defaultProps = {
    albums: [],
    artists: [],
    searching: false
};

export default connect(
    state => ({
        artists: state.artist.searchResults,
        albums: state.album.searchResults,
        term: state.panel.term,
        searching: state.panel.searching
    }),
    dispatch => ({
        requestSearchContent: term => dispatch(requestSearchContent(term))
    })
)(SearchResult);
