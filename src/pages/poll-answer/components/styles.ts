import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getPollAnswerItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '1em',
    },
    item: {
      padding: '1.5em',
      borderBottom: `1px solid ${theme.palette.action.disabledBackground}`,
    },
    imageContainer: {
      padding: '1em 0',

      '& img': {
        maxHeight: '20rem',
        maxWidth: '100%',
      },
    },
  }),
);

export const getPollAnswerHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: '1rem',
      borderBottom: `1px solid ${theme.palette.action.disabledBackground}`,

      '& > div': {
        paddingBottom: '1em',
      },
    },
  }),
);
