import React from 'react';
import { Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { useLandingStyles } from './styles';
import { Span } from '../../../common/components/typography/span';

export const StepOne = () => {
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useLandingStyles(isDesktopView);

  return (
    <Box className={classes.stepContainer}>
      <Span variant='h1' className={classes.headline}>
        Just 2 steps to take a poll or a test
      </Span>
      <Span className={classes.subtitle}>
        <span className={classes.number}>1</span>
        Find poll or test
      </Span>
      <Span className={classes.text}>Apply your preferred search criteria in order to find a poll or a test</Span>
    </Box>
  );
};
