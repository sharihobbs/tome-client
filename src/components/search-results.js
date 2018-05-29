import React from 'react'
import BottomScrollListener from 'react-bottom-scroll-listener'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addBook, bookSearch, fetchReadingList} from '../actions/index'
import './search-results.css'
import '../grid.css'
import _ from 'lodash'

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      page: 1
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchReadingList()
  }

  handleScroll() {
    let nextPage = this.state.page + 1
    this.setState({page: nextPage})
    this.props.search(this.props.searchTerm, this.state.page)
  }

  onSave(book) {
    this.props.addBook(book)
  }

  renderNoteWrapper(book) {
    let div;
    if(book.isSaved === true) {
      div =
      <div className="note-wrapper">
        <p className="saved">Saved to My Reading List</p>
      </div>
    } else {
      div =
      <div>
        <div className="note-wrapper">
          <label htmlFor="note" className="note-label">Note:</label>
          <textarea name="note" rows="4" maxLength="140" className="new-note" onChange={(e) => this.setState({note: e.target.value})}></textarea>
          <button className="save-btn" onClick={() => this.onSave(_.merge({}, book, {note: this.state.note}))}>
          Save to my Reading List
          </button>
        </div>
      </div>
    }
    return div;
  }

  render() {
    const books = this.props.resultsBooks.map(book =>
      <li className="results" key={book.id}>
        <div className="col-4">
          <div className="book">
            <div className="upper-wrapper">
              <div className="img-container">
                <img src={book.thumbnail || '/book.png'} className="thumbnail" alt={book.title}></img>
              </div>
                <p className="googleId hidden">{book.googleId}</p>
                <p className="isSaved hidden">{book.isSaved}</p>
                <p className="title">{book.title}</p>
                <p className="author">{book.authors && book.authors.join(', ')}</p>
                <p className="isbn">ISBN: {book.industryIdentifiers && book.industryIdentifiers[0].identifier}</p>
            </div>
            <div>
              {this.renderNoteWrapper(book)}
            </div>
            </div>
          </div>
      </li>
    )

    return (
      <div className="row">
        <ul className="search-results">{books}</ul>
        <BottomScrollListener onBottom={this.handleScroll} />
      </div>
    )
  }
}

SearchResults.propTypes = {
  resultsBooks: PropTypes.array,
  searchTerm: PropTypes.string,
  search: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
  fetchReadingList: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    resultsBooks: mapSavedBooks(state.searchReducer.resultsBooks, state.booksReducer.readingBooks),
    searchTerm: state.searchReducer.term
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReadingList: () => dispatch(fetchReadingList()),
    search: (query) => dispatch(bookSearch(query)),
    addBook: (book) => dispatch(addBook(book))
  }
}

function mapSavedBooks(searchResults, readingList=[]) {
  let readingListIds = _.map(readingList, book => {
    return book.googleId || book.id || 0
  })
  return _.map(searchResults, result =>
    _.assign({}, result, {isSaved: _.includes(readingListIds, result.googleId)})
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
