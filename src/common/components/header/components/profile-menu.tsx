import React, { FC, useCallback } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

export const ProfileMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const onClickMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const onCloseMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <div>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={onClickMenu}
        color='inherit'
      >
        <AccountCircle fontSize='large' />
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
      >
        <MenuItem onClick={onCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={onCloseMenu}>My account</MenuItem>
      </Menu>
    </div>
  );
};
