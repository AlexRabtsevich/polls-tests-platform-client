import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: '#fafafa',
      boxShadow: '0 1px 6px 0 rgb(32 33 36 / 28%)',
    },
    root: {
      height: '4rem',
      display: 'flex',
      justifyContent: 'space-between',
    },
    logo: {
      color: theme.palette.secondary.main,
      fontSize: '1.3rem',
      fontWeight: 'bold',
    },
  }),
);
