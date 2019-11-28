import React from 'react';
import PropTypes from 'prop-types';
import {Row, Pagination} from 'react-bootstrap';
import {times} from 'lodash';

const Paginator = ({pages, selectedPage, onClick}) => (
    <Row className="pagination-row">
        <Pagination>
            {times(pages, iterator => {
                const page = iterator + 1;
                return (
                    <Pagination.Item key={page} active={page === selectedPage} onClick={() => onClick(page)}>
                        {page}
                    </Pagination.Item>
                );
            })}
        </Pagination>
    </Row>
);

Paginator.propTypes = {
    onClick: PropTypes.func.isRequired,
    pages: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired
};

export default Paginator;
