import React from 'react';
import {Field, reduxForm} from 'redux-form';

import './search-form.css';


const SearchForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
                <div>
                    <Field className="search-input" name="terms" type="text"placeholder="Barbara Kingsolver, Rockabye, parenting, etc." />
                </div>
            </div>
            <div>
                <button type="submit" className="terms-btn" disabled={pristine || submitting}>Search</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'search'
})(SearchForm);
