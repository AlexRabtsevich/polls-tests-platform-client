import React, { FC } from 'react';
import { Box, Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Routes } from '../../../../routes';
import { useHistory } from 'react-router-dom';

const getStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      gap: '1.5rem',

      '& .MuiButtonBase-root': {
        fontWeight: 'bold',
      },
    },
    signUpButton: {
      borderWidth: '2px',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  }),
);

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
