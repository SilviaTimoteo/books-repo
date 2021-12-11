import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BookStateModel } from '../models/BookStateModel';
import { bookReducer } from './Books/book.reducer';

export interface RootState {
  booksRepo: BookStateModel;
}

export const rootReducer = combineReducers<RootState>({
  booksRepo: bookReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
