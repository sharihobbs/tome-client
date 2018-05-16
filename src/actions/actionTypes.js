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

// Login default user
export function loginUser(username, password) {
  return {
    type: 'LOGIN_USER',
    username,
    password
  }
}

// Edit Note
export function editNote(bookId, text) {
  return {
    type: 'LOGIN_USER',
    bookId,
    text
  }
}
