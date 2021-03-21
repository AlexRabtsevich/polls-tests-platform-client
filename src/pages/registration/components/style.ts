import { makeStyles } from '@material-ui/core';

export const getInfoAboutRegistrationStyles = makeStyles({
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
