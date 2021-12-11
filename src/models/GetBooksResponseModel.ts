import { BookModel } from './BookModel';
export interface GetBooksResponseModel {
  books: BookModel[];
  count: number;
}
