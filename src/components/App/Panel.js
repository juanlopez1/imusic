import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {isEmpty, isEqual} from 'lodash';

import {ENTER_KEY_CODE} from '../../constants';
import {requestSearchContent} from '../../actions/panel';

class Panel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    clearSearchBar() {
        this.setState(() => ({term: ''}));
    }

    handleChange(value) {
        this.setState(() => ({term: value}));
    }

    handleKeyDown(keyCode) {
        const {term} = this.state;
        if (keyCode === ENTER_KEY_CODE && !isEmpty(term) && !isEqual(term, this.props.term)) {
            this.props.requestSearchContent(term);
            this.props.history.push(`/searchResult/${term}`);
        }
    }

    render() {
        const {searching} = this.props;
        const {term} = this.state;
        return (
            <div className="panel">
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="searchBar">
                            <FontAwesomeIcon icon={faSearch}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="term"
                        aria-describedby="searchBar"
                        placeholder="Search..."
                        value={term}
                        onChange={event => this.handleChange(event.target.value)}
                        onKeyDown={event => this.handleKeyDown(event.keyCode)}
                        disabled={searching}
                    />
                    {term && (
                        <InputGroup.Append id="searchBar">
                            <Button
                                variant="danger"
                                disabled={searching}
                                onClick={() => this.clearSearchBar()}
                            >
                                <FontAwesomeIcon icon={faTimes}/>
                            </Button>
                        </InputGroup.Append>
                    )}
                </InputGroup>
            </div>
        );
    }
}

Panel.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    requestSearchContent: PropTypes.func.isRequired,
    term: PropTypes.string,
    searching: PropTypes.bool
};

Panel.defaultProps = {
    term: '',
    searching: false
};

export default withRouter(
    connect(
        state => ({
            term: state.panel.term,
            searching: state.panel.searching
        }),
        dispatch => ({
            requestSearchContent: term => dispatch(requestSearchContent(term))
        })
    )(Panel)
);
