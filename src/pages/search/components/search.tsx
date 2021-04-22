import React, { ChangeEvent, FC, useCallback } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { getSearchStyles } from './styles';

interface IProps {
  onSearch: () => void;
  setQuery: (query: string) => void;
}

export const Search: FC<IProps> = ({ onSearch, setQuery }) => {
  const classes = getSearchStyles();

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as string;
      setQuery(value);

      return value;
    },
    [setQuery],
  );

  return (
    <Grid className={classes.root}>
      <TextField onChange={onChange} type='search' variant='filled' label='Find by title or hashtag' />
      <Button onClick={onSearch} color='primary' variant='contained'>
        Search
      </Button>
    </Grid>
  );
};
