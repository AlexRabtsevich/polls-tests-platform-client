import React, { FC, useCallback, useState, MouseEvent } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { Span } from '../../typography/span';
import { getProfileStyles } from './style';

export const ProfileMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const classes = getProfileStyles();

  const onClickMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const onCloseMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <div>
      <IconButton aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={onClickMenu}>
        <AccountCircle fontSize='large' color='primary' />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={!!anchorEl}
        onClose={onCloseMenu}
        className={classes.root}
      >
        <MenuItem onClick={onCloseMenu}>
          <IconButton>
            <PersonIcon fontSize='small' color='action' />
          </IconButton>
          <Span>Profile</Span>
        </MenuItem>
        <MenuItem onClick={onCloseMenu}>
          <IconButton>
            <PowerSettingsNewIcon fontSize='small' color='action' />
          </IconButton>
          <Span>Sign Out</Span>
        </MenuItem>
      </Menu>
    </div>
  );
};
