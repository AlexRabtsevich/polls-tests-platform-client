import { makeAutoObservable } from 'mobx';

const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_ITEMS_PER_PAGE = 8;
const DEFAULT_PAGE_COUNT = 0;

export const getAllPages = (totalItems: number, itemsPerPage: number) => Math.ceil(totalItems / itemsPerPage);

export class PaginationStore {
  currentPage = DEFAULT_CURRENT_PAGE;
  itemsPerPage = DEFAULT_ITEMS_PER_PAGE;
  pageCount = DEFAULT_PAGE_COUNT;

  constructor() {
    makeAutoObservable(this);
  }

  clearPagination = (): void => {
    this.currentPage = DEFAULT_CURRENT_PAGE;
    this.itemsPerPage = DEFAULT_ITEMS_PER_PAGE;
    this.pageCount = DEFAULT_PAGE_COUNT;
  };

  onChangePage = (page: number): void => {
    if (page <= this.pageCount) {
      this.currentPage = page;
    }
  };

  setPageCount = (totalItems: number): void => {
    this.pageCount = getAllPages(totalItems, this.itemsPerPage);
  };
}
