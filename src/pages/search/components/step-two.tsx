import React from 'react';
import { Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { useLandingStyles } from './styles';
import { Span } from '../../../common/components/typography/span';

export const StepTwo = () => {
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useLandingStyles(isDesktopView);

  return (
    <Box className={classes.stepContainer}>
      <Span className={classes.subtitle}>
        <span className={classes.number}>2</span>
        Take a test or a poll
      </Span>
      <Span className={classes.text}>Select the most convenient poll or test and test your knowledge in a few clicks</Span>
    </Box>
  );
};
