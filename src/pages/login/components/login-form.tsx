import React, { FC, useCallback } from 'react';
import { Button, Card, Grid, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { getLoginFormStyles } from './style';
import { GoogleButton } from '../../../common/components/buttons/google-button';
import { Span } from '../../../common/components/typography/span';
import { TextFieldPassword } from '../../../common/components/inputs/text-field-password';
import { TextFieldEmail } from '../../../common/components/inputs/text-field-email';
import { Routes } from '../../../common/utils/routes';
import { TextWithSeparator } from '../../../common/components/typography/text-with-separator';

export const LoginForm: FC = () => {
  const classes = getLoginFormStyles();
  const history = useHistory();

  const onLoginWithGoogle = useCallback(() => {
    return;
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} md={1} />
      <Grid item xs={12} md={10}>
        <Card className={classes.card}>
          <Grid container direction='column' spacing={4}>
            <Grid item>
              <Span align='center' variant='h6'>
                {'SIGN IN NOW'}
              </Span>
            </Grid>
            <Grid item>
              <TextFieldEmail />
            </Grid>
            <Grid item>
              <TextFieldPassword />
            </Grid>
            <Grid item container justify='space-between' alignItems='center'>
              <Span>
                <Link color='textSecondary'>{'Do you forgot password?'}</Link>
              </Span>
              <Button variant='contained' color='primary'>
                {'Login'}
              </Button>
            </Grid>
            <Grid item container justify='center'>
              <TextWithSeparator>{'or'}</TextWithSeparator>
            </Grid>
            <Grid item>
              <GoogleButton onClick={onLoginWithGoogle} text={'Login with google'} />
            </Grid>
            <Grid item justify='center' container>
              <Span align='center' color='textSecondary'>
                {`Don't have an account? `} &nbsp;
                <Link onClick={() => history.push(Routes.Registration)}>{'Create'}</Link>
              </Span>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} md={1} />
    </Grid>
  );
};
