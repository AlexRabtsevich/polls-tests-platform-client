import React, { FC, useState } from 'react';
import Card from '@material-ui/core/Card';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { TextField } from '../inputs';

interface IStyleProps {
  isFocusFormHeader: boolean;
}

const getFormHeaderStyles = makeStyles<Theme, IStyleProps>((theme) =>
  createStyles({
    root: ({ isFocusFormHeader }) => {
      return {
        borderRadius: '10px',
        borderTop: isFocusFormHeader ? `10px solid ${theme.palette.primary.main}` : 'none',

        '& .MuiInput-underline:before': {
          borderBottom: isFocusFormHeader ? `1px solid ${theme.palette.action.disabled}` : 'none',
        },
      };
    },
    titleInput: {
      '& .MuiInput-root': {
        fontSize: '2rem',
      },
    },
    descriptionInput: {
      '& .MuiInput-root': {
        fontSize: '1rem',
      },
    },
  }),
);

interface IProps {
  defaultTitle: string;
  defaultDescription: string;
}

export const FormHeader: FC<IProps> = ({ defaultDescription, defaultTitle }) => {
  const [isFocusFormHeader, setIsFocusForm] = useState(false);
  const classes = getFormHeaderStyles({ isFocusFormHeader });

  return (
    <Card className={classes.root} onFocus={() => setIsFocusForm(true)} onBlur={() => setIsFocusForm(false)}>
      <Grid container direction='column' spacing={5}>
        <Grid item>
          <TextField className={classes.titleInput} defaultValue={defaultTitle} name='title' variant='standard' />
        </Grid>
        <Grid item>
          <TextField className={classes.descriptionInput} defaultValue={defaultDescription} name='description' variant='standard' />
        </Grid>
      </Grid>
    </Card>
  );
};
