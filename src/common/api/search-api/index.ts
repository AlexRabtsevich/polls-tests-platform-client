import { BaseHttpClient } from '../http-clients';
import { getData } from '../http-clients/response';
import { IItemsListWithPagination, ISearchFilters } from '../../typings';

export class SearchApi extends BaseHttpClient {
  constructor() {
    super();
  }

  async getItemsList(filters: Partial<ISearchFilters>): Promise<IItemsListWithPagination> {
    const REQUEST_PATH = '/polls';

    const params = {
      ...filters,
    };

    return getData(this.httpClient.get(REQUEST_PATH, { params }));
  }
}
