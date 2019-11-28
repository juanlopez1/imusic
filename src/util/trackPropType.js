import PropTypes from 'prop-types';

const trackPropType = PropTypes.shape({
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    trackNumber: PropTypes.number,
    trackTimeMillis: PropTypes.number
});

export default trackPropType;
