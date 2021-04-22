import { ProfileStore } from './profile-store';
import { SearchFiltersStore } from './search-filters-store';
import { PaginationStore } from './pagination-store';
import { LoaderStore } from './loader-store';
import { SearchStore } from './search-store';

export class RootStore {
  readonly searchStore: SearchStore;

  constructor(
    readonly profileStore: ProfileStore = new ProfileStore(),
    readonly searchFiltersStore = new SearchFiltersStore(),
    readonly paginationStore = new PaginationStore(),
    readonly loaderStore = new LoaderStore(),
  ) {
    this.searchStore = new SearchStore(this);
  }
}
