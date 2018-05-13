import React from 'react';
// import {reduxForm} from 'redux-form';

import SearchResults from './search-results';
import './search-form.css';


export default class SearchForm extends React.Component {
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
                    <form className="search-form" onSubmit={(e) => this.search(e)}>
                        <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
                        <input className="search-input" type="search" placeholder="Barbara Kingsolver, Rockabye, parenting, etc." ref={input => this.input} />
                        <button type="submit" className="terms-btn">Search</button>
                    </form>
                </div>
                <SearchResults />
            </div>
        );
    }
}
