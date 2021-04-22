import React, { FC, useCallback } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../routes';

const useStyles = makeStyles({
  root: {
    padding: '1.5rem 0',
    display: 'flex',
    gap: '0 1.5rem',
  },
});

interface IProps {
  onConfirm: () => void;
}

export const PollAnswerFooter: FC<IProps> = ({ onConfirm }) => {
  const history = useHistory();
  const classes = useStyles();

  const redirectToSearch = useCallback(() => {
    history.push(Routes.Search);
  }, [history]);

  return (
    <Grid container justify={'flex-end'} className={classes.root}>
      <Button onClick={redirectToSearch} variant={'outlined'} color={'secondary'}>
        Cancel
      </Button>
      <Button onClick={onConfirm} variant={'contained'} color={'primary'}>
        Continue
      </Button>
    </Grid>
  );
};
