import { makeStyles } from '@material-ui/core';

export const getAuthorizationCardStyles = makeStyles({
  container: {
    padding: '4rem 0',
  },
  card: {
    padding: 0,

    '& >.MuiGrid-container': {
      height: '100%',
    },
  },
  firstContent: {
    boxShadow: '-6px 0px 8px -6px rgba(34, 60, 80, 0.09) inset',
    padding: '2rem',
  },
  secondContent: {
    boxShadow: '6px 0px 8px -6px rgba(34, 60, 80, 0.09) inset',
    padding: '2rem',
    margin: 'auto',
  },
});
