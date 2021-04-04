import React, { FC } from 'react';
import MaterialDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { Button, IconButton } from '@material-ui/core';

import { getModalStyles } from './style';
import { Span } from '../typography/span';
import { TextIconButton } from '../buttons/text-icon-button';

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  headerTitle?: string;
  dismissButtonLabel?: string;
  confirmButtonLabel?: string;
  isDisabledConfirmButton?: boolean;
}

export const Modal: FC<IModalProps> = (props) => {
  const { headerTitle, isOpen, children, onClose, confirmButtonLabel, dismissButtonLabel, isDisabledConfirmButton, onConfirm } = props;

  const classes = getModalStyles();

  return (
    <MaterialDialog className={classes.root} fullWidth={true} open={isOpen} onBackdropClick={onClose}>
      <div className={classes.header}>
        <Span variant='h5'>{headerTitle}</Span>
        <IconButton onClick={onClose} className={classes.headerCloseIcon}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.actionBar}>
        {dismissButtonLabel && (
          <TextIconButton variant='outlined' onClick={onClose} icon={<CloseIcon />}>
            {dismissButtonLabel}
          </TextIconButton>
        )}
        {confirmButtonLabel && (
          <Button color='primary' variant='contained' disabled={isDisabledConfirmButton} onClick={onConfirm}>
            {confirmButtonLabel}
          </Button>
        )}
      </DialogActions>
    </MaterialDialog>
  );
};
