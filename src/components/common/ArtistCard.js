import React from 'react';
import {Card} from 'react-bootstrap';

import artistPlaceholder from '../../images/artist-placeholder.jpg';
import {artistPropType} from '../../util';

const ArtistCard = ({artist}) => (
    <Card className="cards">
        <Card.Img variant="top" src={artist.picture || artistPlaceholder}/>
        <Card.Body>
            <Card.Title>{artist.artistName}</Card.Title>
            <Card.Subtitle>{artist.primaryGenreName}</Card.Subtitle>
        </Card.Body>
    </Card>
);

ArtistCard.propTypes = {
    artist: artistPropType.isRequired
};

export default ArtistCard;
