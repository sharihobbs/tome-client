import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bookSearch, resetState} from '../actions/index';
import './search-form.css';


export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.query.length !== 0) {
      this.props.resetState()
      this.props.search(this.state.query)
    }
  }

  render() {
    const {query} = this.state;
    return (
      <form id="searchForm" name="searchForm" onSubmit={this.onSubmit.bind(this)}>
        <div className="search-collection">
            <div className="label-container">
                <label htmlFor="terms" className="terms">Search for any book by Title, Author, Subject, or ISBN.</label>
            </div>
            <div className="input-container">
                <input id="terms" name="terms" className="search-input" component="input" type="text" placeholder="Paula Hawkins, Cell, parenting, etc." onChange={e => this.setState({query: e.target.value})} value={query} required/>
                <input type="submit" className="terms-btn" value="Search" />
                <img className="poweredby" src="https://books.google.com/googlebooks/images/poweredby.png" alt="Powered by the Google Books API Family"/>
            </div>
        </div>
      </form>
    )
  }
}

SearchForm.propTypes = {
  search: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => dispatch(bookSearch(query)),
    resetState: () => dispatch(resetState())
  }
}
export default connect(null, mapDispatchToProps)(SearchForm)
