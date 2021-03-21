import React, { FC } from 'react';
import { Box, Button, Card, Grid, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { BackToSearchButton } from '../../../common/components/buttons/back-to-search-button';
import { TextFieldEmail } from '../../../common/components/inputs/text-field-email';
import { TextFieldPassword } from '../../../common/components/inputs/text-field-password';
import { GoogleButton } from '../../../common/components/buttons/google-button';
import { Span } from '../../../common/components/typography/span';
import { TextFieldFirstName } from '../../../common/components/inputs/text-field-first-name';
import { TextFieldLastName } from '../../../common/components/inputs/text-field-last-name';
import { Routes } from '../../../common/utils/routes';
import { TextWithSeparator } from '../../../common/components/typography/text-with-separator';

export const RegistrationForm: FC = () => {
  const history = useHistory();

  return (
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
                <Button color='primary' variant='contained' fullWidth>
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
  );
};
