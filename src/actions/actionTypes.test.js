import {
    SEARCH_BOOK_SUCCESS,
    searchBookSuccess,
    ADD_BOOK_SUCCESS,
    addBookSuccess,
    DELETE_BOOK,
    deleteBookSuccess,
    SET_LOGIN_SUCCESS,
    setLoginSuccess,
    FETCH_READING_LIST_SUCCESS,
    fetchReadingListSuccess,
    SET_LOGIN_ERROR,
    setLoginError,
    USER_LOGOUT,
    userLogout,
    RESET_RESULTS,
    resetResults
} from './actionTypes';

describe('searchBookSuccess', () => {
    it('Should return the action', () => {
        const books = 'books';
        const term = 'term';
        const action = searchBookSuccess(books, term);
        expect(action.type).toEqual(SEARCH_BOOK_SUCCESS);
        expect(action.books).toEqual(books);
        expect(action.term).toEqual(term);
    });
});

describe('fetchReadingListSuccess', () => {
    it('Should return the action', () => {
        const books = 'books';
        const action = fetchReadingListSuccess(books);
        expect(action.type).toEqual(FETCH_READING_LIST_SUCCESS);
        expect(action.books).toEqual(books);
    });
});

describe('addBookSuccess', () => {
    it('Should return the action', () => {
        const book = 'book';
        const action = addBookSuccess(book);
        expect(action.type).toEqual(ADD_BOOK_SUCCESS);
        expect(action.book).toEqual(book);
    });
});

describe('deleteBookSuccess', () => {
    it('Should return the action', () => {
        const book = 'book';
        const action = deleteBookSuccess(book);
        expect(action.type).toEqual(DELETE_BOOK);
        expect(action.book).toEqual(book);
    });
});

describe('setLoginSuccess', () => {
    it('Should return the action', () => {
        const isLoginSuccess = true;
        const action = setLoginSuccess(isLoginSuccess);
        expect(action.type).toEqual(SET_LOGIN_SUCCESS);
        expect(action.isLoginSuccess).toEqual(isLoginSuccess);
    });
});

describe('setLoginError', () => {
    it('Should return the action', () => {
        const loginError = 'error';
        const action = setLoginError(loginError);
        expect(action.type).toEqual(SET_LOGIN_ERROR);
        expect(action.loginError).toEqual(loginError);
    });
});


describe('userLogout', () => {
    it('Should return the action', () => {
        const isLogout = true;
        const action = userLogout(isLogout);
        expect(action.type).toEqual(USER_LOGOUT);
        expect(action.isLogout).toEqual(isLogout);
    });
});

describe('resetResults', () => {
    it('Should return the action', () => {
        const resultsBooks = 'resultsBooks';
        const action = resetResults(resultsBooks);
        expect(action.type).toEqual(RESET_RESULTS);
        expect(action.resultsBooks).toEqual(resultsBooks);
    });
});



