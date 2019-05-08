import {map, pick} from 'lodash';

const pickAlbumsData = results => map(results, album => pick(album, [
    'artistId',
    'artistName',
    'artworkUrl100',
    'collectionId',
    'collectionName',
    'collectionViewUrl',
    'primaryGenreName',
    'releaseDate',
    'trackCount'
]));

export default pickAlbumsData;
