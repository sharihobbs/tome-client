import React from 'react';
import {connect} from 'react-redux';
import {bookSearch} from '../actions/index';
import './search-form.css';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(bookSearch(this.state.query));
  }

  render() {
    const {query} = this.state;
    const searchForm = (
    <form name="searchForm" onSubmit={this.onSubmit}>
        <div className="search-collection">
            <div className="label-container">
                <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
            </div>
            <div className="input-container">
                <input id="terms" name="terms" className="search-input" component="input" type="text" placeholder="Barbara Kingsolver, Rockabye, parenting, etc." onChange={e => this.setState({query: e.target.value})} value={query}/>
                <input type="submit" className="terms-btn" value="Search" />
            </div>
        </div>
    </form>
    )
    return searchForm
  }
}

export default connect()(SearchForm)
