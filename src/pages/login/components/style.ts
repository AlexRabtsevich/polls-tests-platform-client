import { makeStyles } from '@material-ui/core';

export const getInfoAboutLoginStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& img': {
      height: '20rem',
      margin: '0 auto',
      display: 'block',
    },
  },
});

export const getLoginFormStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});
