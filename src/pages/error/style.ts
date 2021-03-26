import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getErrorPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    image: {
      width: '100%',
      maxWidth: '50rem',
      height: 'auto',
    },
    code: {
      fontSize: '9rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '6rem',
      },
    },
    message: {
      fontSize: '1.5rem',
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    },
    button: {
      marginTop: '1rem',
    },
    container: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
      },
    },
  }),
);
