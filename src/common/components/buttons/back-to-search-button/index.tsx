import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { TextWithIcon } from '../../typography/text-with-icon';
import { Span } from '../../typography/span';
import { Routes } from '../../../../routes';

const getBackToSearchStyles = makeStyles({
  icon: {
    transform: 'rotate(180deg)',
  },
});

export const BackToSearchButton: FC = () => {
  const history = useHistory();
  const onRedirectToSearch = useCallback(() => history.push(Routes.Home), [history]);
  const classes = getBackToSearchStyles();

  return (
    <Button onClick={onRedirectToSearch} color='primary'>
      <TextWithIcon icon={<ArrowRightAltIcon color='primary' className={classes.icon} />}>
        <Span>Back To Search</Span>
      </TextWithIcon>
    </Button>
  );
};
