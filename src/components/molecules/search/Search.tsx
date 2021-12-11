import * as Styled from './Search.styles';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { BooksActions } from '../../../store/Books/book.actions';

interface SearchProps {
  onChangeInput: (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const Search = ({ onChangeInput }: SearchProps): JSX.Element => {
  const dispatch = useDispatch();

  const changeInputHandler = (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(BooksActions.searchBooks(input.target.value));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(
    debounce(changeInputHandler, 300),
    []
  );
  return (
    <Styled.SearchWrapper>
      <Styled.SearchIconWrapper>
        <SearchIcon sx={{ color: '#000000' }} />
      </Styled.SearchIconWrapper>
      <Styled.InputBase
        placeholder={'Search books'}
        onChange={debouncedChangeHandler}
        disableUnderline
      />
    </Styled.SearchWrapper>
  );
};
