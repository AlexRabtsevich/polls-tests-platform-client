import React, { FC } from 'react';

import Radio from '@material-ui/core/Radio';
import { IconButton } from '@material-ui/core';
import { TextField } from '../../inputs';
import { getFormItemAnswerStyles } from './style';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
  removeAnswer: () => void;
  isCanRemove: boolean;
  fieldName: string;
}

const DEFAULT_VARIANT = 'New variant';

export const FormItemAnswer: FC<IProps> = ({ removeAnswer, isCanRemove, fieldName }) => {
  const classes = getFormItemAnswerStyles();

  return (
    <div className={classes.root}>
      <Radio disabled />
      <TextField variant='standard' defaultValue={DEFAULT_VARIANT} name={fieldName} />
      {isCanRemove && (
        <IconButton onClick={removeAnswer}>
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
};
