import PropTypes from 'prop-types';

const artistPropType = PropTypes.shape({
    collectionId: PropTypes.number,
    artworkUrl100: PropTypes.string,
    artistName: PropTypes.string,
    collectionName: PropTypes.string
});

export default artistPropType;
