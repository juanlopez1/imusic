import PropTypes from 'prop-types';

const artistPropType = PropTypes.shape({
    artistId: PropTypes.number,
    artistLinkUrl: PropTypes.string,
    artistName: PropTypes.string,
    primaryGenreName: PropTypes.string
});

export default artistPropType;
