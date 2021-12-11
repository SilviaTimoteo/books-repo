import { ActionType, createReducer } from 'typesafe-actions';
import { BookStateModel } from './../../models/BookStateModel';
import { BooksActions, BooksActionTypesEnum } from './book.actions';

const initialState: BookStateModel = {
  books: [],
  page: 0,
  count: 0,
  search: '',
};

export const bookReducer = createReducer<
  Readonly<BookStateModel>,
  ActionType<typeof BooksActions>
>(initialState)
  .handleType(BooksActionTypesEnum.UPDATE_BOOKS, (state, { payload }) => ({
    ...state,
    books: payload.books,
    page: payload.page,
    count: payload.count,
  }))
  .handleType(
    BooksActionTypesEnum.SEARCH_BOOKS,
    (state, { payload: search }) => ({
      ...state,
      search,
    })
  );
