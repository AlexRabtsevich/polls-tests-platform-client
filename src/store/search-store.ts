import { makeAutoObservable } from 'mobx';
import { RootStore } from './root-store';
import { IItemList, ISearchFilters } from '../common/typings';
import { SearchApi } from '../common/api/search-api';

export class SearchStore {
  items: IItemList[] = [];

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  getItemsListWithPagination = (searchApi: SearchApi, query?: string): void => {
    this.rootStore.loaderStore.turnOnLoading();

    const filters: Partial<ISearchFilters> = {
      ...this.getSelectedFilters(),
      itemsPerPage: this.rootStore.paginationStore.itemsPerPage,
      page: this.rootStore.paginationStore.currentPage,
      query,
    };

    searchApi
      .getItemsList(filters)
      .then((response) => {
        const { totalItems, items } = response;

        this.items = items;
        this.rootStore.paginationStore.setPageCount(totalItems);
      })
      .finally(() => this.rootStore.loaderStore.turnOffLoading());
  };

  private getSelectedFilters(): Partial<ISearchFilters> {
    let filters: Partial<ISearchFilters> = {};
    const { fromDate, toDate, types } = this.rootStore.searchFiltersStore;

    if (fromDate) {
      filters = {
        ...filters,
        fromDate,
      };
    }

    if (toDate) {
      filters = {
        ...filters,
        toDate,
      };
    }

    if (types.length > 0) {
      filters = {
        ...filters,
        types: types.join(','),
      };
    }

    return filters;
  }
}
