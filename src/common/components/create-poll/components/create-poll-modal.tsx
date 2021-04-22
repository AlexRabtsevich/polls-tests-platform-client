import React, { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { v4 as uuid } from 'uuid';
import Tooltip from '@material-ui/core/Tooltip';

import { Modal } from '../../modal';
import { getCreatePollModalStyles } from './style';
import { useToggle } from '../../../hook';
import { ChipData, Chips } from '../../chips';

interface IProps {
  isOpenModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
  setFeedback: (feedback: string) => void;
  setHashtagList: (list: string[]) => void;
}

export const CreatePollModal: FC<IProps> = (props) => {
  const { isOpenModal, onClose, onConfirm, setFeedback, setHashtagList } = props;
  const classes = getCreatePollModalStyles();
  const [isToggleFeedback, onToggleFeedback] = useToggle();
  const [isToggleHashTagList, onToggleHashtagList] = useToggle();
  const [chipList, setChipList] = useState<ChipData[]>([]);
  const [hashtagValue, setHashtagValue] = useState<string>();

  const isDisabledChipSection = useMemo(() => chipList.length > 4, [chipList.length]);

  useEffect(() => {
    setHashtagList(chipList.map(({ label }) => label));
  }, [chipList.length, setHashtagList]);

  const removeChip = useCallback((key: string) => {
    setChipList((prevList) => prevList.filter((chip) => chip.key !== key));
  }, []);

  const addChip = useCallback(() => {
    if (hashtagValue) {
      setChipList((prevList) => [...prevList, { key: uuid(), label: hashtagValue }]);
      setHashtagValue('');
    }
  }, [hashtagValue, setHashtagValue]);

  const onChangeChip = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setHashtagValue(event.target.value);
  }, []);

  const onChangeFeedback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFeedback(event.target.value);

      return event.target.value;
    },
    [setFeedback],
  );

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={onClose}
      onConfirm={onConfirm}
      headerTitle={'Confirm creating poll'}
      confirmButtonLabel={'Confirm'}
      dismissButtonLabel={'cancel'}
    >
      <Grid container direction='column' className={classes.root}>
        <Grid item xs={12} alignItems='center' container>
          <FormControlLabel
            control={
              <Switch
                checked={isToggleFeedback}
                onChange={onToggleFeedback}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                color='primary'
              />
            }
            label={'Add feedback'}
          />
          <Tooltip title='Feedback will be displayed to the user after the response' aria-label='info'>
            <HelpOutlineOutlinedIcon />
          </Tooltip>
        </Grid>
        {isToggleFeedback && (
          <Grid item xs={12}>
            <TextField label='feedback' fullWidth variant='standard' onChange={onChangeFeedback} />
          </Grid>
        )}
        <Grid item xs={12} alignItems='center' container>
          <FormControlLabel
            control={
              <Switch
                checked={isToggleHashTagList}
                onChange={onToggleHashtagList}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                color='primary'
              />
            }
            label={'Add hashtags'}
          />
          <Tooltip title='Hashtags will be added to your poll for more convenient searching, max 5' aria-label='info'>
            <HelpOutlineOutlinedIcon />
          </Tooltip>
        </Grid>
        {isToggleHashTagList && (
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Chips chipList={chipList} removeChip={removeChip} />
            </Grid>
            <Grid item xs={12} container alignItems='flex-end' className={classes.hashtagContainer}>
              <TextField disabled={isDisabledChipSection} value={hashtagValue} label='Hashtag' variant='standard' onChange={onChangeChip} />
              <Button disabled={isDisabledChipSection} variant={'contained'} color={'primary'} onClick={addChip}>
                Add
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Modal>
  );
};
