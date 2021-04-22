import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getSearchPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2rem 0',
      [theme.breakpoints.down('md')]: {
        padding: '2rem',
      },

      '& > div': {
        gap: '1.6em',
      },
    },
  }),
);
