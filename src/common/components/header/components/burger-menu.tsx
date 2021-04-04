import React, { FC, useMemo, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useLocation, useHistory } from 'react-router-dom';

import { AUTHORIZED_NAVIGATION_LINKS, NAVIGATION_LINKS } from './navigation-links';
import { observable } from 'mobx';
import { useProfileStore } from '../../../../provider';

const getBurgerMenuStyles = makeStyles({
  navigationMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '20rem',

    '& .MuiListItem-root:first-child >div': {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    '& .MuiListItem-root': {
      padding: '1rem ',
      fontSize: '1rem',
    },
  },
});

export const BurgerMenu: FC = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const classes = getBurgerMenuStyles();
  const history = useHistory();
  const location = useLocation();
  const profileStore = useProfileStore();

  const closeMenu = () => setOpenMenu(false);
  const openMenu = () => setOpenMenu(true);

  const navigationLinks = useMemo(() => {
    if (profileStore.isAuthorized) {
      return AUTHORIZED_NAVIGATION_LINKS;
    }

    return NAVIGATION_LINKS;
  }, [profileStore.isAuthorized]);

  return (
    <Toolbar>
      <IconButton onClick={openMenu} edge='start' aria-label='menu'>
        <MenuIcon fontSize={'large'} />
      </IconButton>
      <Drawer anchor='left' open={isOpenMenu} onClose={closeMenu}>
        <List className={classes.navigationMenu}>
          <ListItem>
            <Grid container direction='row' alignItems='center'>
              <IconButton onClick={closeMenu}>{<CloseIcon fontSize={'large'} />}</IconButton>
            </Grid>
          </ListItem>
          {navigationLinks.map((link) => (
            <ListItem key={link.name} selected={location.pathname === link.path} onClick={() => history.push(link.path)}>
              {link.name}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Toolbar>
  );
};
