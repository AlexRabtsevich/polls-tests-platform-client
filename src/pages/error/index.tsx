import React, { FC, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button, Container, Grid } from '@material-ui/core';
import { INTERNAL_SERVER_ERROR, FORBIDDEN, NOT_FOUND } from 'http-status';

import { errorImage } from '../../template/images';
import { IErrorPageQueryState } from '../../common/typings';
import { Span } from '../../common/components/typography';
import { getErrorPageStyles } from './style';
import { Routes } from '../../routes';

interface IErrorMessage {
  message: string;
  code: number;
}

const ErrorPage: FC = () => {
  const classes = getErrorPageStyles();
  const location = useLocation<IErrorPageQueryState>();
  const history = useHistory();

  const errorMessage = useMemo<IErrorMessage>(() => {
    if (location.state && location.state.status === INTERNAL_SERVER_ERROR) {
      return { message: 'Sorry we have technical problems during you last operation', code: INTERNAL_SERVER_ERROR };
    }

    if (location.state && location.state.status === FORBIDDEN) {
      return { message: 'We are sorry, but you do not have access for this page', code: FORBIDDEN };
    }

    return { message: 'Opps! Page not found', code: NOT_FOUND };
  }, [location.state]);

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container className={classes.container}>
        <Grid container direction='column' alignItems='center' justify='center' item xs={12} md={4}>
          <Grid item>
            <Span className={classes.code}>{errorMessage.code}</Span>
          </Grid>
          <Grid item>
            <Span className={classes.message}>{errorMessage.message}</Span>
          </Grid>
          <Grid item className={classes.button}>
            <Button onClick={() => history.push(Routes.Search)} variant='contained' color='primary'>
              {'Go to home page'}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <img className={classes.image} src={errorImage} alt={'Error image'} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
