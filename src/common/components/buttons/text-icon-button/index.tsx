import React, { FC, ReactNode } from 'react';

import { Button, ButtonProps } from '@material-ui/core';

interface IProps {
  icon: ReactNode;
}

export const TextIconButton: FC<ButtonProps & IProps> = (props) => {
  const { icon, ...buttonProps } = props;

  return <Button startIcon={icon} variant='text' color='secondary' {...buttonProps} />;
};
