import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { AuthorizationCard } from '../../common/components/cards';
import { InfoAboutRegistration } from './components/info-about-registration';
import { RegistrationForm } from './components/registration-form';

const Registration: FC = () => {
  return (
    <Container>
      <AuthorizationCard firstContent={<RegistrationForm />} secondContent={<InfoAboutRegistration />} />
    </Container>
  );
};

export default Registration;
