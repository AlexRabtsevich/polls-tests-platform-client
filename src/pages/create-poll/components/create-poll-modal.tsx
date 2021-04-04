import React, { FC, useCallback, useState } from 'react';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Modal } from '../../../common/components/modal';
import { getCreatePollModalStyles } from './style';

interface IProps {
  isOpenModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const CreatePollModal: FC<IProps> = (props) => {
  const { isOpenModal, onClose, onConfirm } = props;
  const [isToggleEmail, setIsToggleEmail] = useState(false);
  const classes = getCreatePollModalStyles();

  const toggleEmail = useCallback(() => {
    setIsToggleEmail((prevState) => !prevState);
  }, []);

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={onClose}
      onConfirm={onConfirm}
      headerTitle={'Create poll'}
      confirmButtonLabel={'Confirm'}
      dismissButtonLabel={'cancel'}
    >
      <Grid container direction='column' spacing={3} className={classes.root}>
        <Grid item>
          <FormControlLabel
            label='Send to email'
            control={<Switch checked={isToggleEmail} onChange={toggleEmail} name='checkedB' color='primary' />}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};
