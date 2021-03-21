import React, { FC, useCallback, useMemo, useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

import { TextField } from './text-field';
import { TextFieldNamespace } from './text-field-namespace';
import { Span } from '../typography/span';

interface IProps {
  defaultValue?: string;
}

export const TextFieldPassword: FC<IProps> = (props) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  const toggleEyeIcon = useCallback(() => setIsVisiblePassword((prevValue) => !prevValue), []);
  const EyeIcon = useMemo(() => (isVisiblePassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />), [isVisiblePassword]);

  return (
    <TextField
      name={TextFieldNamespace.Password}
      label='Password'
      type={isVisiblePassword ? 'text' : 'password'}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <VpnKeyOutlinedIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment style={{ cursor: 'pointer' }} position='end'>
            <Span onClick={toggleEyeIcon}>{EyeIcon}</Span>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
