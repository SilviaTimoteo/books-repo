import { BookModel } from './BookModel';

export interface BookStateModel {
  page: number;
  count: number;
  books: BookModel[];
  search: string;
}
