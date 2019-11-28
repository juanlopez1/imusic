import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';

import artistPlaceholder from '../../images/artist-placeholder.jpg';
import {artistPropType} from '../../util';

const Details = ({details}) => (
    <Row className="center-vertical album-details">
        <Col sm={2}>
            <Image src={details.artworkUrl100 || artistPlaceholder}/>
        </Col>
        <Col sm={10}>
            <Row className="center-vertical">
                <h2>{details.artistName}</h2>
                &nbsp;
                <a href={details.artistLinkUrl}>(iTunes page)</a>
            </Row>
            <Row>
                <h4>{details.primaryGenreName}</h4>
            </Row>
        </Col>
    </Row>
);

Details.propTypes = {
    details: artistPropType.isRequired
};

export default Details;
