import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {map} from 'lodash';

import ArtistCard from './ArtistCard';
import {artistPropType} from '../../util';

const ArtistGrid = ({artists, onClick}) => map(artists, (chunk, index) => (
    <Row key={index}>
        {map(chunk, artist => (
            <Col key={artist.artistId} sm={2}>
                <ArtistCard
                    artist={artist}
                    onClick={() => onClick(artist.artistId)}
                />
            </Col>
        ))}
    </Row>
));

ArtistGrid.propTypes = {
    onClick: PropTypes.func.isRequired,
    artists: PropTypes.arrayOf(
        PropTypes.arrayOf(artistPropType)
    ).isRequired
};

export default ArtistGrid;
