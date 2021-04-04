import React, { FC, useCallback, MouseEvent } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { getFormItemFooterStyles } from './style';

interface IProps {
  removeItem: () => void;
  appendAnswer: () => void;
  addImage: () => void;
}

export const FormItemFooter: FC<IProps> = ({ removeItem, addImage, appendAnswer }) => {
  const classes = getFormItemFooterStyles();

  const onAddAnswer = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();
      appendAnswer();
    },
    [appendAnswer],
  );

  return (
    <div className={classes.footer}>
      <IconButton onClick={onAddAnswer}>
        <Tooltip title='Add answer' aria-label='add'>
          <AddCircleOutlineOutlinedIcon />
        </Tooltip>
      </IconButton>
      <Tooltip title='Add image' aria-label='add'>
        <IconButton onClick={addImage}>
          <CropOriginalOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Delete question' aria-label='add'>
        <IconButton onClick={removeItem}>
          <DeleteOutlineIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};
