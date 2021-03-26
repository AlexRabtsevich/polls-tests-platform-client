import React, { FC } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
  isOpen: boolean;
}

export const LoaderFullScreen: FC<IProps> = ({ isOpen }) => {
  return (
    <Backdrop open={isOpen}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
