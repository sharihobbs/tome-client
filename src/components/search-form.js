import React from 'react';
import {reduxForm} from 'redux-form';

import SearchResults from './search-results';
import './search-form.css';


class SearchForm extends React.Component {
  onSubmit(values) {
        console.log(values);
    }
    render() {
        return (
            <div className="title-wrapper">
                <div>
                    <h1 className="tome-title">Tome</h1>
                    <p className="tagline">What do you want to read next?</p>
                </div>
                <div className="search-wrapper">
                    <form className="search-form"
                        onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                        )}>
                        <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
                        <input name="terms" id="terms" className="search-input" type="text" placeholder="Barbara Kingsolver, Rockabye, parenting, etc." />
                        <button type="submit" className="terms-btn">Search</button>
                    </form>
                </div>
                <SearchResults />
            </div>
        );
    }
}

export default reduxForm({
    form: 'search'
})(SearchForm);
