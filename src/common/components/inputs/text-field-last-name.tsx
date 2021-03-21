import React, { FC } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AccountCircleOutlined } from '@material-ui/icons';

import { TextField } from './text-field';
import { TextFieldNamespace } from './text-field-namespace';

interface IProps {
  defaultValue?: string;
}

export const TextFieldLastName: FC<IProps> = (props) => {
  return (
    <TextField
      name={TextFieldNamespace.LastName}
      label='Last name'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <AccountCircleOutlined />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
