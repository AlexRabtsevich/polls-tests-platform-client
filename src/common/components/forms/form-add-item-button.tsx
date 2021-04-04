import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';

interface IProps {
  isCanAdd: boolean;
  onClick: () => void;
}

export const FormAddItemButton: FC<IProps> = ({ onClick, isCanAdd }) => {
  if (!isCanAdd) {
    return null;
  }

  return (
    <Tooltip title='Add question' aria-label='add'>
      <IconButton onClick={onClick}>
        <AddCircleOutlineOutlinedIcon fontSize='large' />
      </IconButton>
    </Tooltip>
  );
};
