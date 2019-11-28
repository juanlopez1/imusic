import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import {noop} from 'lodash';

import {albumPropType} from '../../util';

const AlbumCard = ({album, onClick}) => (
    <Card className="cards" onClick={onClick}>
        <Card.Img variant="top" src={album.artworkUrl100}/>
        <Card.Body>
            <Card.Title>{album.collectionName}</Card.Title>
            <Card.Subtitle>{album.artistName}</Card.Subtitle>
        </Card.Body>
    </Card>
);

AlbumCard.propTypes = {
    album: albumPropType.isRequired,
    onClick: PropTypes.func
};

AlbumCard.defaultProps = {
    onClick: noop
};

export default AlbumCard;
