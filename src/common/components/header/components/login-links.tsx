import React, { FC } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { Routes } from '../../../../routes';
import { useHistory } from 'react-router-dom';

const getStyles = makeStyles({
  root: {
    display: 'flex',
    gap: '1rem',

    '& .MuiButtonBase-root': {
      color: 'white',
      fontWeight: 'bold',
    },
  },

  signUpButton: {
    borderColor: 'white',
    borderWidth: '2px',
  },
});

export const LoginLinks: FC = () => {
  const history = useHistory();
  const classes = getStyles();

  return (
    <Box className={classes.root}>
      <Button variant='outlined' className={classes.signUpButton} onClick={() => history.push(Routes.Registration)}>
        {'Sign Up'}
      </Button>
      <Button onClick={() => history.push(Routes.Login)}>{'Sign In'}</Button>
    </Box>
  );
};
