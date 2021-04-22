import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getPollAnswerStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      zIndex: -1,
      position: 'absolute',
      maxHeight: '40rem',
      maxWidth: '100%',
      width: '100%',
    },
    container: {
      paddingTop: '10rem',
      paddingBottom: '5rem',
    },
    card: {
      borderRadius: '10px',
    },
  }),
);
