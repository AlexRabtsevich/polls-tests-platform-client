import React, { FC, useCallback } from 'react';
import { Box, Button, Card, Grid, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import { BackToSearchButton, GoogleButton } from '../../../common/components/buttons';
import { Span, TextWithSeparator } from '../../../common/components/typography';
import { TextFieldFirstName, TextFieldLastName, TextFieldPassword, TextFieldEmail } from '../../../common/components/inputs';
import { useBaseAccountApi, useHandleFormSubmit } from '../../../common/hook';
import { ICreateAccount } from '../../../common/typings';
import { Routes } from '../../../routes';

export const RegistrationForm: FC = () => {
  const history = useHistory();
  const formMethods = useForm();
  const { handleSubmit, setError } = formMethods;
  const baseAccountApi = useBaseAccountApi();

  const createUser = useCallback(
    async (formData: ICreateAccount) => {
      await baseAccountApi.createAccount(formData);
    },
    [baseAccountApi],
  );

  const onSubmit = useHandleFormSubmit(createUser, setError);

  return (
    <FormProvider {...formMethods}>
      <Grid container direction='column'>
        <Grid item>
          <Box paddingBottom='2rem'>
            <BackToSearchButton />
          </Box>
        </Grid>
        <Grid item>
          <Card>
            <Grid container item>
              <Grid item xs={12} md={1} />
              <Grid item xs={12} md={10} container direction='column' spacing={4}>
                <Grid item>
                  <Span align='center' variant='h6'>
                    {'CREATE AN ACCOUNT'}
                  </Span>
                </Grid>
                <Grid item>
                  <GoogleButton onClick={() => undefined} text={'Sign Up with Google'} />
                </Grid>
                <Grid container item justify='center'>
                  <TextWithSeparator>{'or'}</TextWithSeparator>
                </Grid>
                <Grid item>
                  <TextFieldFirstName />
                </Grid>
                <Grid item>
                  <TextFieldLastName />
                </Grid>
                <Grid item>
                  <TextFieldEmail />
                </Grid>
                <Grid item>
                  <TextFieldPassword />
                </Grid>
                <Grid item>
                  <Button onClick={handleSubmit(onSubmit)} color='primary' variant='contained' fullWidth>
                    {'Create an account'}
                  </Button>
                </Grid>
                <Grid item>
                  <Span align='center' variant='body2'>
                    {'Already have an account'} &nbsp;
                    <Link onClick={() => history.push(Routes.Login)}>{'Sign In'}</Link>
                  </Span>
                </Grid>
              </Grid>
              <Grid item xs={12} md={1} />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
