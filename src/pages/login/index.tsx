import React, { FC } from 'react';

import { AuthorizationCard } from '../../common/components/cards';
import { InfoAboutLogin } from './components/info-about-login';
import { LoginForm } from './components/login-form';

const LoginPage: FC = () => {
  return <AuthorizationCard firstContent={<InfoAboutLogin />} secondContent={<LoginForm />} />;
};

export default LoginPage;
