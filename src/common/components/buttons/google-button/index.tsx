import React, { FC } from 'react';
import { Button, makeStyles } from '@material-ui/core';

import { Span } from '../../typography/span';

const getStyles = makeStyles({
  root: {
    background: '#f44336',
    padding: 0,
    overflow: 'hidden',

    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'flex-start',

      '& h6': {
        width: '100%',
        textAlign: 'center',
        color: '#fff',
      },
    },

    '& .MuiButton-startIcon': {
      width: '55px',
      height: '100%',
      margin: 0,
      background: '#b71c1c',
      textAlign: 'center',

      '& > h6': {
        padding: '0.4rem 0',
      },
    },
  },
});

interface IProps {
  onClick: () => void;
  text: string;
}

export const GoogleButton: FC<IProps> = ({ text, onClick }) => {
  const classes = getStyles();

  return (
    <Button onClick={onClick} className={classes.root} fullWidth variant={'contained'} color='secondary' startIcon={<Span>{'G'}</Span>}>
      <Span>{text}</Span>
    </Button>
  );
};
