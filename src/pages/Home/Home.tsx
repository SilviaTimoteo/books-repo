import Pagination from '@mui/material/Pagination';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BooksTable } from '../../components/organisms/booksTable';
import { useGetBookService } from '../../services/hooks/useGetBookService';
import * as Styled from './Home.styles';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { itemsPerPage } from '../../constants/Books';
import { FiltersModel } from './../../models/FiltersModel';

export const Home: React.FC<{}> = (): JSX.Element => {
  const navigate = useNavigate();

  const { id: pageNumberParam } = useParams();

  const { getBooksByPageAndFilter, loading } = useGetBookService();

  const count = useSelector(
    (state: RootState): number => state.booksRepo.count
  );
  const search = useSelector(
    (state: RootState): string => state.booksRepo.search
  );

  const numberOfPages = Math.round(count / itemsPerPage);
  const pageNumberURLInt = parseInt(pageNumberParam || '1');

  const handleOnChangePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    navigate('/page/' + page);
  };

  const getFilters = (): FiltersModel[] => {
    if (search === '') {
      return [];
    } else {
      return [
        {
          type: 'all',
          values: [search],
        },
      ];
    }
  };

  useEffect(() => {
    getBooksByPageAndFilter(pageNumberURLInt, getFilters());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumberParam, search]);

  return (
    <Styled.PageContainer>
      <Pagination
        defaultPage={pageNumberURLInt}
        count={numberOfPages}
        size='large'
        onChange={handleOnChangePagination}
      />
      <BooksTable />
      {loading && (
        <Styled.LoadWrapper>
          <CircularProgress />
        </Styled.LoadWrapper>
      )}
    </Styled.PageContainer>
  );
};
