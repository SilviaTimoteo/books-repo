import { action, PayloadAction } from 'typesafe-actions';
import { BookModel } from '../../models/BookModel';

export enum BooksActionTypesEnum {
  UPDATE_BOOKS = 'UPDATE_BOOKS',
  SEARCH_BOOKS = 'SEARCH_BOOKS',
}

const updateBooks = (payload: {
  page: number;
  count: number;
  books: BookModel[];
}): PayloadAction<
  BooksActionTypesEnum.UPDATE_BOOKS,
  { page: number; count: number; books: BookModel[] }
> => action(BooksActionTypesEnum.UPDATE_BOOKS, payload);

const searchBooks = (
  payload: string
): PayloadAction<BooksActionTypesEnum.SEARCH_BOOKS, string> =>
  action(BooksActionTypesEnum.SEARCH_BOOKS, payload);

export const BooksActions = { updateBooks, searchBooks };
