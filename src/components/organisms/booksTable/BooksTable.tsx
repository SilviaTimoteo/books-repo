import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BookModel } from '../../../models/BookModel';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const BooksTable = (): JSX.Element => {
  const books = useSelector(
    (state: RootState): BookModel[] => state.booksRepo.books
  );

  const headerLabels: string[] = [
    'title',
    'authors',
    'year',
    'country',
    'city',
    'pages',
  ];

  const formatBookAuthors = (authors: string[]): string => {
    return authors.reduce(
      (previousValue, author) => previousValue + `${author}\n`,
      ''
    );
  };
  return (
    <TableContainer sx={{ marginTop: '2em' }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {headerLabels.map((header, index) => (
              <TableCell key={`row-${index}-${header}`} align='center'>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => (
            <TableRow
              key={`row-${index}-${book.id}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                key={`row-${index}-${book.book_title}`}
                align='left'
                component='th'
                scope='row'
              >
                {book.book_title}
              </TableCell>
              <TableCell
                key={`row-${index}-${book.book_author}`}
                align='center'
              >
                {formatBookAuthors(book.book_author)}
              </TableCell>
              <TableCell
                key={`row-${index}-${book.book_publication_year}`}
                align='center'
              >
                {book.book_publication_year}
              </TableCell>
              <TableCell
                key={`row-${index}-${book.book_publication_country}`}
                align='center'
              >
                {book.book_publication_country}
              </TableCell>
              <TableCell
                key={`row-${index}-${book.book_publication_city}`}
                align='center'
              >
                {book.book_publication_city}
              </TableCell>
              <TableCell key={`row-${index}-${book.book_pages}`} align='center'>
                {book.book_pages}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
