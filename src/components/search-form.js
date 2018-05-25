import React from 'react';
import {connect} from 'react-redux';
import {bookSearch, resetState} from '../actions/index';
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
    this.props.dispatch(resetState());
    this.props.dispatch(bookSearch(this.state.query));
  }

  render() {
    const {query} = this.state;
    return (
    <form name="searchForm" onSubmit={this.onSubmit}>
        <div className="search-collection">
            <div className="label-container">
                <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
            </div>
            <div className="input-container">
                <input id="terms" name="terms" className="search-input" component="input" type="text" placeholder="Paula Hawkins, Cell, parenting, etc." onChange={e => this.setState({query: e.target.value})} value={query}/>
                <input type="submit" className="terms-btn" value="Search" />
            </div>
        </div>
    </form>
    )
  }
}

export default connect()(SearchForm)
