import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import {noop} from 'lodash';

import artistPlaceholder from '../../images/artist-placeholder.jpg';
import {artistPropType} from '../../util';

const ArtistCard = ({artist, onClick}) => (
    <Card className="cards" onClick={onClick}>
        <Card.Img variant="top" src={artist.picture || artistPlaceholder}/>
        <Card.Body>
            <Card.Title>{artist.artistName}</Card.Title>
            <Card.Subtitle>{artist.primaryGenreName}</Card.Subtitle>
        </Card.Body>
    </Card>
);

ArtistCard.propTypes = {
    artist: artistPropType.isRequired,
    onClick: PropTypes.func
};

ArtistCard.defaultProps = {
    onClick: noop
};

export default ArtistCard;
