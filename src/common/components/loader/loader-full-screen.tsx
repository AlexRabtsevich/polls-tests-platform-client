import React, { FC } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const getLoaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

interface IProps {
  isOpen: boolean;
}

export const LoaderFullScreen: FC<IProps> = ({ isOpen }) => {
  const classes = getLoaderStyles();

  return (
    <Backdrop open={isOpen} className={classes.root}>
      <CircularProgress color='primary' />
    </Backdrop>
  );
};
