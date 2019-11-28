import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {map} from 'lodash';

import {getTrackDuration} from '../../util';

const TrackList = ({tracks}) => (
    <div className="track-container">
        <Row className="track-header">
            <Col sm={1} className="text-center">
                #
            </Col>
            <Col sm={10}>
                Title
            </Col>
            <Col sm={1} className="text-center">
                Duration
            </Col>
        </Row>
        {map(tracks, track => (
            <Row key={track.trackId} className="track">
                <Col sm={1} className="text-center">
                    {track.trackNumber}
                </Col>
                <Col sm={10}>
                    {track.trackName}
                </Col>
                <Col sm={1} className="text-center">
                    {getTrackDuration(track.trackTimeMillis)}
                </Col>
            </Row>
        ))}
    </div>
);

TrackList.propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.shape({
        trackId: PropTypes.number,
        trackName: PropTypes.string,
        trackNumber: PropTypes.number,
        trackTimeMillis: PropTypes.number
    })).isRequired
};

export default TrackList;
