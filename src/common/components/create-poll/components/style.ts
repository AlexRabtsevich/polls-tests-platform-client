import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getCreatePollModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '0.5rem 0',
      gap: '1rem 0',
    },
    hashtagContainer: {
      display: 'flex',
      gap: '0.5rem',

      '& button': {
        borderBottomLeftRadius: '0',
        borderTopLeftRadius: '0',
        borderBottomRightRadius: '0.8rem',
        borderTopRightRadius: '0.8rem',
        height: '2.3rem',
      },
    },
  }),
);
