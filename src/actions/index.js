// Save a book from the search results
export const SAVE_BOOK = 'SAVE_BOOK';
export const saveBook = (title, something) => ({
    type: SAVE_BOOK,
    title,
    something
});

// Mark a book as read
export const READ_BOOK = 'READ_BOOK';
export const readBook = (title, something) => ({
    type: READ_BOOK,
    title,
    something
});

// Login to user account
export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = (title, something) => ({
    type: LOGIN_USER,
    title,
    something
});

// Search for a book
export const BOOK_SEARCH = 'LOGIN_USER';
export const loginUser = (title, something) => ({
    type: LOGIN_USER,
    title,
    something
});



// Delete a book from the list
