import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Container } from '@material-ui/core';

import { AuthorizationCard } from '../../common/components/cards';
import { InfoAboutRegistration } from './components/info-about-registration';
import { RegistrationForm } from './components/registration-form';

const Registration: FC = () => {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <Container>
        <AuthorizationCard firstContent={<RegistrationForm />} secondContent={<InfoAboutRegistration />} />
      </Container>
    </FormProvider>
  );
};

export default Registration;
