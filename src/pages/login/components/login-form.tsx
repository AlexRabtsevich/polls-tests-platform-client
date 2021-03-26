import React, { FC, useCallback } from 'react';
import { Button, Card, Grid, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import { getLoginFormStyles } from './style';
import { GoogleButton } from '../../../common/components/buttons/google-button';
import { Span, TextWithSeparator } from '../../../common/components/typography';
import { TextFieldPassword, TextFieldEmail } from '../../../common/components/inputs';
import { useBaseAccountApi, useHandleFormSubmit } from '../../../common/hook';
import { ILogin } from '../../../common/typings';
import { Routes } from '../../../routes';

export const LoginForm: FC = () => {
  const classes = getLoginFormStyles();
  const history = useHistory();
  const formMethods = useForm();
  const { setError, handleSubmit } = formMethods;

  const baseAccountApi = useBaseAccountApi();

  const onLogin = useCallback(
    async (formData: ILogin) => {
      await baseAccountApi.login(formData);
      history.replace(Routes.Home);
    },
    [baseAccountApi, history],
  );

  const onSubmit = useHandleFormSubmit(onLogin, setError);

  const onLoginWithGoogle = useCallback(() => {
    return;
  }, []);

  return (
    <FormProvider {...formMethods}>
      <form>
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
                  <Button onClick={handleSubmit(onSubmit)} variant='contained' color='primary'>
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
      </form>
    </FormProvider>
  );
};
