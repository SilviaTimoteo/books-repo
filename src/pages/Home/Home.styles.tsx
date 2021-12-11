import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2em;
  background-color: white;
  align-items: center;
`;

export const BooksGrid = styled(DataGrid)`
  width: 90%;
  margin-top: 7em;
`;

export const LoadWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
`;
