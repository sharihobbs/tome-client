// Save a book from the search results
export function saveBook(book) {
  return {
    type: 'SAVE_BOOK',
    book
  }
}

// Mark a book as read
export function readBook(bookId) {
  return {
    type: 'READ_BOOK',
    bookId
  }
}

// Delete a book from the reading list
export function deleteBook(bookId) {
  return {
    type: 'DELETE_BOOK',
    bookId
  }
}
