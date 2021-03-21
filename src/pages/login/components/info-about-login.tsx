import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { getInfoAboutLoginStyles } from './style';
import { Span } from '../../../common/components/typography/span';
import { LOGO_TEXT } from '../../../common/constants';
import loginImage from '../../../template/images/login.png';
import { BackToSearchButton } from '../../../common/components/buttons/back-to-search-button';

export const InfoAboutLogin: FC = () => {
  const classes = getInfoAboutLoginStyles();

  return (
    <Box className={classes.root}>
      <Box marginBottom='2rem'>
        <BackToSearchButton />
      </Box>
      <Box height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center' style={{ gap: '3rem 0' }}>
        <Box>
          <Span variant='h4' align='center' color='primary'>
            {LOGO_TEXT}
          </Span>
        </Box>
        <Box className={classes.info}>
          <Span variant='body2' align='center'>
            {'Enter your email address and password in your account'}
          </Span>
          <Span align='center' variant='body2'>
            {'Easy access to multiply data sources'}
          </Span>
          <img src={loginImage} alt='_' />
        </Box>
      </Box>
    </Box>
  );
};
