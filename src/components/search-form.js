import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'
import './search-form.css';


const SearchForm = (props) => {
    const {handleSubmit} = props;
    console.log('form props:', props);
    return (
        <form name="searchForm" onSubmit={handleSubmit}>
            <div className="search-collection">
                <div className="label-container">
                    <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
                </div>
                <div className="input-container">
                    <Field name="terms" className="search-input" component="input" type="text" placeholder="Barbara Kingsolver, Rockabye, parenting, etc." />
                    <Link className="terms-btn" to="/results">Search</Link>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'search'
  }
)(SearchForm);
