import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, FormControl, InputGroup
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {isEmpty, isEqual} from 'lodash';

import {ENTER_KEY_CODE} from '../../constants';
import {handleChangeSearchParam, requestSearchContent} from '../../actions/search';

class Searcher extends PureComponent {
    handleChange(value) {
        this.props.handleChangeSearchParam(value);
    }

    handleKeyDown(keyCode) {
        const {lastSearch, searchParam} = this.props;
        if (keyCode === ENTER_KEY_CODE && !isEmpty(searchParam) && !isEqual(lastSearch, searchParam)) {
            this.props.requestSearchContent();
        }
    }

    render() {
        const {searching, searchParam} = this.props;
        return (
            <InputGroup size="sm">
                <InputGroup.Prepend>
                    <InputGroup.Text id="searchBar">
                        <FontAwesomeIcon icon={faSearch}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="searchParam"
                    aria-describedby="searchBar"
                    placeholder="Search..."
                    value={searchParam}
                    onChange={event => this.handleChange(event.target.value)}
                    onKeyDown={event => this.handleKeyDown(event.keyCode)}
                    disabled={searching}
                />
                {searchParam && (
                    <InputGroup.Append id="searchBar">
                        <Button variant="danger" disabled={searching} onClick={() => this.handleChange('')}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </Button>
                    </InputGroup.Append>
                )}
            </InputGroup>
        );
    }
}

Searcher.propTypes = {
    requestSearchContent: PropTypes.func.isRequired,
    handleChangeSearchParam: PropTypes.func.isRequired,
    lastSearch: PropTypes.string,
    searchParam: PropTypes.string,
    searching: PropTypes.bool
};

Searcher.defaultProps = {
    lastSearch: null,
    searching: false,
    searchParam: ''
};

export default connect(
    state => ({
        lastSearch: state.search.lastSearch,
        searching: state.search.searching,
        searchParam: state.search.searchParam
    }),
    {handleChangeSearchParam, requestSearchContent}
)(Searcher);
