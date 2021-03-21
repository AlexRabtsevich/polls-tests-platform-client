import React, { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { AuthorizationCard } from '../../common/components/cards';
import { InfoAboutLogin } from './components/info-about-login';
import { LoginForm } from './components/login-form';

const LoginPage: FC = () => {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <AuthorizationCard firstContent={<InfoAboutLogin />} secondContent={<LoginForm />} />
    </FormProvider>
  );
};

export default LoginPage;
