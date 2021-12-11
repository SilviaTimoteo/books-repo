import { BooksActions } from './../store/Books/book.actions';
import { act, renderHook } from '@testing-library/react-hooks';
import { useGetBookService } from '../services/hooks/useGetBookService';
import * as redux from 'react-redux';
import { BooksService } from '../services/BooksApiClient';

jest.mock('../services/BooksApiClient');
const mockedBooksService = BooksService as jest.Mocked<typeof BooksService>;
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockDispatchFn = jest.fn();

describe('useGetBookService', () => {
  it('Should set loading true  and call action updateBooks after service success', async () => {
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const { result } = renderHook(useGetBookService);
    const page = 1;
    mockedBooksService.getBooks.mockResolvedValue({ count: 1, books: [] });

    await act(async () => {
      result.current.getBooksByPageAndFilter(page);
    });
    expect(result.current.loading).toEqual(false);
    expect(mockDispatchFn).toBeCalledWith(
      BooksActions.updateBooks({ page, count: 1, books: [] })
    );
  });
});
