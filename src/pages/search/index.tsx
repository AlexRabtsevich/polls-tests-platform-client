import React, { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Container, Grid } from '@material-ui/core';

import { FilterSection } from './components/filter-section';
import { Search } from './components/search';
import { getSearchPageStyles } from './styles';
import { CardItem } from './components/card';
import { Pagination } from '../../common/components/pagination';
import { LoaderFullScreen } from '../../common/components/loader';
import { useLoaderStore, usePaginationStore, useSearchFiltersStore, useSearchStore } from '../../provider/use-store';
import { useSearchApi } from '../../common/hook/use-search-api';
import { Filters } from './components/filters';
import { StepOne } from './components/step-one';
import { StepTwo } from './components/step-two';
import { Span } from '../../common/components/typography/span';

const SearchPage: FC = observer(() => {
  const classes = getSearchPageStyles();
  const paginationStore = usePaginationStore();
  const searchStore = useSearchStore();
  const searchApi = useSearchApi();
  const loaderStore = useLoaderStore();
  const searchFiltersStore = useSearchFiltersStore();
  const [query, setQuery] = useState<string>();

  useEffect(() => {
    paginationStore.clearPagination();
  }, [paginationStore, searchFiltersStore.types.length, searchFiltersStore.fromDate, searchFiltersStore.toDate]);

  useEffect(() => {
    if (!loaderStore.isLoading) {
      searchStore.getItemsListWithPagination(searchApi);
    }
  }, [
    paginationStore.currentPage,
    paginationStore.itemsPerPage,
    searchApi,
    searchFiltersStore.types.length,
    searchFiltersStore.fromDate,
    searchFiltersStore.toDate,
  ]);

  const onSearch = useCallback(() => {
    searchStore.getItemsListWithPagination(searchApi, query);
  }, [query, searchApi, searchStore]);

  return (
    <Container className={classes.root}>
      <LoaderFullScreen isOpen={loaderStore.isLoading} />
      <StepOne />
      <Grid container direction={'column'}>
        <Grid item>
          <Search onSearch={onSearch} setQuery={setQuery} />
        </Grid>
        <Grid item>
          <FilterSection onClear={searchFiltersStore.clearFilters}>
            <Filters />
          </FilterSection>
        </Grid>
      </Grid>
      {searchStore.items.length ? (
        <StepTwo />
      ) : (
        <Span align='center' color={'textSecondary'}>
          No results matching your filter criteria found.
        </Span>
      )}
      <Grid container justify='center'>
        {searchStore.items.map((item) => (
          <CardItem id={item._id} key={item._id} title={item.title} image={item.mainImage} hashtagList={item.hashtagList} />
        ))}
      </Grid>
      <Grid item>
        <Pagination onChange={paginationStore.onChangePage} page={paginationStore.currentPage} count={paginationStore.pageCount} />
      </Grid>
    </Container>
  );
});

export default SearchPage;
