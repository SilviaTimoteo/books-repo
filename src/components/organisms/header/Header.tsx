import * as Styled from './Header.styles';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent } from 'react';
import { Search } from '../../molecules/search';

export const Header = (): JSX.Element => {
  const handleOnSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {};
  return (
    <Styled.Container>
      <Typography sx={{ marginLeft: '2em' }} alignItems={'left'} variant={'h6'}>
        {'Books Wonderland'}
      </Typography>
      <Search onChangeInput={handleOnSearch} />
    </Styled.Container>
  );
};
