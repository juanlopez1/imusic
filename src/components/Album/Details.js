import React from 'react';
import PropTypes from 'prop-types';
import {Col, Image, Row} from 'react-bootstrap';

const getReleaseYear = dateString => {
    const date = new Date(dateString);
    return date.getFullYear();
};

const Details = ({details}) => (
    <Row className="center-vertical album-details">
        <Col sm={2}>
            <Image src={details.artworkUrl100}/>
        </Col>
        <Col sm={10}>
            <Row className="center-vertical">
                <h2>{details.collectionName}</h2>
                &nbsp;
                <a href={details.collectionViewUrl}>(iTunes page)</a>
            </Row>
            <Row className="center-vertical">
                <h4>{details.artistName}</h4>
                &nbsp;
                <a href={details.artistViewUrl}>(iTunes page)</a>
            </Row>
            <Row>
                <h4>{details.primaryGenreName}</h4>
            </Row>
            <Row>
                <h4>{getReleaseYear(details.releaseDate)}</h4>
            </Row>
        </Col>
    </Row>
);

Details.propTypes = {
    details: PropTypes.shape({
        artistName: PropTypes.string,
        artistViewUrl: PropTypes.string,
        artworkUrl100: PropTypes.string,
        collectionName: PropTypes.string,
        collectionViewUrl: PropTypes.string,
        primaryGenreName: PropTypes.string,
        releaseDate: PropTypes.string
    }).isRequired
};

export default Details;
