import MaterialTextField from '@material-ui/core/TextField';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../typography/error-message';

interface IProps {
  name: string;
}

export const TextField: FC<TextFieldProps & IProps> = (props) => {
  const { InputProps, rows, className, name, ...textFieldProps } = props;
  const { register, errors } = useFormContext();

  return (
    <MaterialTextField
      InputProps={InputProps}
      className={className}
      color='primary'
      rows={rows || 3}
      fullWidth
      inputRef={register()}
      error={!!errors[name]}
      helperText={<ErrorMessage errors={errors} name={name} />}
      name={name}
      {...textFieldProps}
    />
  );
};

TextField.defaultProps = {
  variant: 'outlined',
};
