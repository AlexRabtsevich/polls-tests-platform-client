import React, { FC } from 'react';
import { Box } from '@material-ui/core';

import registrationImage from '../../../template/images/registration-info.png';
import { Span } from '../../../common/components/typography/span';
import { LOGO_TEXT } from '../../../common/constants';
import { getInfoAboutRegistrationStyles } from './style';

export const InfoAboutRegistration: FC = () => {
  const classes = getInfoAboutRegistrationStyles();

  return (
    <Box className={classes.root}>
      <Box height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center' style={{ gap: '3rem 0' }}>
        <Box>
          <Span variant='h4' align='center' color='primary'>
            {LOGO_TEXT}
          </Span>
        </Box>
        <Box className={classes.info}>
          <Span variant='body2' align='center'>
            {'Start for free'}
          </Span>
          <Span align='center' variant='body2'>
            {'Easy access to multiply data sources'}
          </Span>
          <img src={registrationImage} alt='_' />
        </Box>
      </Box>
    </Box>
  );
};
