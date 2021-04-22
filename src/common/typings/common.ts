import { IPagination } from './pagination';
import { Moment } from 'moment';

export enum PollAndTestType {
  Poll = 'poll',
  Test = 'test',
}

export interface IItemList {
  mainImage: string | null;
  _id: string;
  title: string;
  description: string;
  hashtagList: string[] | null;
}

export interface IItemsListWithPagination extends IPagination {
  items: IItemList[];
}

export interface ISearchFilters {
  fromDate: Moment | null;
  toDate: Moment | null;
  types: string;
  itemsPerPage: number;
  page: number;
  query: string;
}
