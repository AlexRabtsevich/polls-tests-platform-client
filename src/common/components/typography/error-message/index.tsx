import React, { FC } from 'react';
import { FieldErrors } from 'react-hook-form/dist/types';
import { makeStyles, Typography } from '@material-ui/core';

interface IProps {
  name: string;
  errors: FieldErrors<Record<string, any>>;
}

const useStyles = makeStyles({
  root: {
    fontSize: '0.8rem',
    fontWeight: 400,
  },
});

export const ErrorMessage: FC<IProps> = ({ errors, name }) => {
  const classes = useStyles();

  if (errors[name] && errors[name].message) {
    return (
      <Typography color='textPrimary' className={classes.root}>
        {errors[name].message}
      </Typography>
    );
  }

  return null;
};
