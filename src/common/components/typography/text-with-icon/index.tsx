import { Box, Typography } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';
import { getTextWithIconStyles } from './style';

interface ITextWithIconProps {
  icon: ReactNode;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  className?: string;
}

export const TextWithIcon: FC<ITextWithIconProps> = (props) => {
  const { color, icon, className, children } = props;
  const classes = getTextWithIconStyles();

  return (
    <Typography className={className} variant='subtitle2' color={color}>
      <Box className={classes.root}>
        {icon}
        {children}
      </Box>
    </Typography>
  );
};
