import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {map} from 'lodash';

import AlbumCard from './AlbumCard';
import {albumPropType} from '../../util';

const AlbumGrid = ({albums, onClick}) => map(albums, (chunk, index) => (
    <Row key={index}>
        {map(chunk, album => (
            <Col key={album.collectionId} sm={2}>
                <AlbumCard album={album} onClick={() => onClick(album.collectionId)}/>
            </Col>
        ))}
    </Row>
));

AlbumGrid.propTypes = {
    onClick: PropTypes.func.isRequired,
    albums: PropTypes.arrayOf(albumPropType).isRequired
};

export default AlbumGrid;
