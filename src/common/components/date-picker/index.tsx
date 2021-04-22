import React, { FC } from 'react';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker/DatePicker';

import { getBaseDatePickerStyles } from './styles';
import { INPUT_DATE_FORMAT } from '../../constants';

export const DatePicker: FC<KeyboardDatePickerProps> = (props) => {
  const classes = getBaseDatePickerStyles();

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <KeyboardDatePicker {...props} PopoverProps={{ className: classes.popover }} className={classes.input} inputVariant='filled' />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.defaultProps = {
  format: INPUT_DATE_FORMAT,
  autoOk: true,
};
