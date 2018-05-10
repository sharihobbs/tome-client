// Save a book from the search results
export const SAVE_BOOK = 'SAVE_BOOK';
export const saveBook = book => ({
    type: SAVE_BOOK,
    book
});

// Mark a book as read
export const READ_BOOK = 'READ_BOOK';
export const readBook = book => ({
    type: READ_BOOK,
    book
});

// Login to user account
export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = user => ({
    type: LOGIN_USER,
    user
});

// Search for a book
export const BOOK_SEARCH = 'BOOK_SEARCH';
export const bookSearch = term => ({
    type: BOOK_SEARCH,
    term
});

// Delete a book from the list
export const DELETE_BOOK = 'DELETE_BOOK';
export const deleteBook = book => ({
    type: DELETE_BOOK,
    book
});

