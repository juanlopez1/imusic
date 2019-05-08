import React from 'react';
import {Card} from 'react-bootstrap';

import {albumPropType} from '../../util';

const AlbumCard = ({album}) => (
    <Card className="cards">
        <Card.Img variant="top" src={album.artworkUrl100} className="album-card-image"/>
        <Card.Body>
            <Card.Title>{album.collectionName}</Card.Title>
            <Card.Subtitle>{album.artistName}</Card.Subtitle>
        </Card.Body>
    </Card>
);

AlbumCard.propTypes = {
    album: albumPropType.isRequired
};

export default AlbumCard;
