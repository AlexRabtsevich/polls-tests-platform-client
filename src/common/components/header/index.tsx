import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { useLocation } from 'react-router-dom';
import { Routes } from '../../../routes';
import { getHeaderStyles } from './style';
import { Span } from '../typography/span';
import { LOGO_TEXT } from '../../constants';
import { ProfileMenu } from './components/profile-menu';
import { useProfileStore } from '../../../provider';
import { LoginLinks } from './components/login-links';
import { observer } from 'mobx-react-lite';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { NavigationLinks } from './components/navigation-links';
import { BurgerMenu } from './components/burger-menu';

const PAGES_WITHOUT_HEADER = [Routes.Login, Routes.Registration, Routes.ErrorPage];

export const Header: FC = observer(() => {
  const location = useLocation();
  const classes = getHeaderStyles();
  const profileStore = useProfileStore();
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'));

  if (PAGES_WITHOUT_HEADER.includes(location.pathname as Routes)) {
    return null;
  }

  console.log(profileStore.isAuthorized);

  return (
    <AppBar position='static'>
      <Toolbar className={classes.root}>
        {isDesktopView ? <Span className={classes.logo}>{LOGO_TEXT}</Span> : <BurgerMenu />}
        {isDesktopView && <NavigationLinks />}
        {profileStore.isAuthorized ? <ProfileMenu /> : <LoginLinks />}
      </Toolbar>
    </AppBar>
  );
});
