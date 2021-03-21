import React, { FC } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { createStyles, makeStyles, Typography } from '@material-ui/core';

const getSeparatorStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',

      '&::after,&::before': {
        content: `''`,
        flex: '1!important',
        borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
      },

      '&:not(:empty)::before': {
        marginRight: '0.35em',
      },
      '&:not(:empty)::after': {
        marginLeft: '0.35em',
      },
    },
  }),
);

export const TextWithSeparator: FC<TypographyProps> = (props) => {
  const classes = getSeparatorStyles();

  return <Typography className={classes.root} color='textSecondary' {...props} />;
};
