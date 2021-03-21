import React, { FC } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

import { TextField } from './text-field';
import { TextFieldNamespace } from './text-field-namespace';

interface IProps {
  defaultValue?: string;
}

export const TextFieldEmail: FC<IProps> = (props) => {
  return (
    <TextField
      name={TextFieldNamespace.Email}
      label='Email'
      inputMode='email'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <EmailOutlinedIcon color='inherit' />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
