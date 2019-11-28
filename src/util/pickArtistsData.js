import {map, pick} from 'lodash';

const pickArtistsData = results => map(results, album => pick(album, [
    'artistId',
    'artistLinkUrl',
    'artistName',
    'primaryGenreName'
]));

export default pickArtistsData;
