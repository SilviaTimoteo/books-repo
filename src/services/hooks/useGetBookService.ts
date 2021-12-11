import { FiltersModel } from './../../models/FiltersModel';
import { BooksService } from '../BooksApiClient';
import { GetBooksResponseModel } from '../../models/GetBooksResponseModel';
import { useDispatch } from 'react-redux';
import { BooksActions } from '../../store/Books/book.actions';
import { useState } from 'react';
import { itemsPerPage } from '../../constants/Books';

export const useGetBookService = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const getBooksByPageAndFilter = (page: number, filters?: FiltersModel[]) => {
    setLoading(true);

    BooksService.getBooks({ page, itemsPerPage, filters })
      .then((response: GetBooksResponseModel) => {
        dispatch(
          BooksActions.updateBooks({
            page,
            books: response.books,
            count: response.count,
          })
        );
        setLoading(false);
      })
      .catch((_) => {
        setLoading(false);
      });
  };
  return { getBooksByPageAndFilter, loading };
};
