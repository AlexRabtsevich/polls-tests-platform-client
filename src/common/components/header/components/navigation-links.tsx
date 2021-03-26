import React, { FC, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

import { Routes } from '../../../../routes';
import { Span } from '../../typography/span';

const getNavigationLinksStyles = makeStyles({
  root: {
    paddingLeft: '1rem',
    flexGrow: 1,
    '& .MuiBottomNavigation-root': {
      background: 'none',

      '& .MuiBottomNavigationAction-label': {
        color: 'white',
        fontSize: '1rem',

        '&.Mui-selected': {
          color: 'black',
          borderBottom: '2px solid black',
        },
      },
    },
  },
});

interface INavigationLink {
  name: string;
  path: Routes;
}

export const AUTHORIZED_NAVIGATION_LINKS: INavigationLink[] = [
  { name: 'Home', path: Routes.Home },
  { name: 'Create test', path: Routes.CreateTest },
  { name: 'Create Poll', path: Routes.CreatePoll },
];

export const NAVIGATION_LINKS: INavigationLink[] = [{ name: 'Home', path: Routes.Home }];

export const NavigationLinks: FC = () => {
  const classes = getNavigationLinksStyles();
  const history = useHistory();
  const location = useLocation();

  const onChangeLink = useCallback(
    (_, path: string) => {
      history.replace(path);
    },
    [history],
  );

  return (
    <Span variant='h6' className={classes.root}>
      <BottomNavigation value={location.pathname} onChange={onChangeLink} showLabels>
        {AUTHORIZED_NAVIGATION_LINKS.map((link) => (
          <BottomNavigationAction key={link.name} value={link.path} label={link.name} />
        ))}
      </BottomNavigation>
    </Span>
  );
};
