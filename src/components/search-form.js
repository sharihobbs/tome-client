import React from 'react';
import {Field, reduxForm} from 'redux-form';

import './search-form.css';


const SearchForm = (props) => {
    const {handleSubmit, pristine, submitting} = props
    console.log('form props:', props);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
                <div>
                    <Field className="search-input" component="input" type="text" placeholder="Barbara Kingsolver, Rockabye, parenting, etc." />
                    <button type="submit" className="terms-btn">Search</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'search'
})(SearchForm);
