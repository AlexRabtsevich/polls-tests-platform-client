import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import CloseIcon from '@material-ui/icons/Close';
import { useFormContext, Controller } from 'react-hook-form';
import Radio from '@material-ui/core/Radio';
import { IconButton } from '@material-ui/core';

import { TextField } from '../../inputs';
import { getFormItemAnswerStyles } from './style';
import { PollAndTestType } from '../../../typings';
import { isPollType } from '../../../utils';

interface IProps {
  removeAnswer: () => void;
  isCanRemove: boolean;
  fieldName: string;
  type: PollAndTestType;
}

const DEFAULT_VARIANT = 'New variant';

export const FormItemAnswer: FC<IProps> = ({ removeAnswer, isCanRemove, fieldName, type }) => {
  const classes = getFormItemAnswerStyles();
  const { control } = useFormContext();

  return (
    <div className={classes.root}>
      <Controller
        defaultValue={uuid()}
        name={`${fieldName}.uuid`}
        control={control}
        render={(props) => <Radio disabled={isPollType(type)} {...props} />}
      />
      <TextField variant='standard' defaultValue={DEFAULT_VARIANT} name={`${fieldName}.variant`} />
      {isCanRemove && (
        <IconButton onClick={removeAnswer}>
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
};
