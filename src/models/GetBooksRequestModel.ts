import { FiltersModel } from './FiltersModel';

export interface GetBooksRequestModel {
  page: number;
  itemsPerPage: number;
  filters?: FiltersModel[];
}
