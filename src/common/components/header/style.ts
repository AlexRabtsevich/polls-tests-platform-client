import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '5rem',
      display: 'flex',
      justifyContent: 'space-between',
    },
    logo: {
      color: 'white',
      fontSize: '1.8rem',
    },
  }),
);
