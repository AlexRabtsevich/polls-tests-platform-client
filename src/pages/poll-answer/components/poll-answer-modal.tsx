import React, { FC, useCallback, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { IPollAnswerResponse, PollAndTestType, PollAnswerFormData } from '../../../common/typings';
import { preparedPollAnswerData } from '../utils';
import { PollApi } from '../../../common/api/poll-api';
import { Modal } from '../../../common/components/modal';
import { Span } from '../../../common/components/typography/span';
import { LoaderFullScreen } from '../../../common/components/loader';
import { Routes } from '../../../routes';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  pollApi: PollApi;
  pollId: string;
}

export const PollAnswerModal: FC<IProps> = ({ onClose, isOpen, pollApi, pollId }) => {
  const { handleSubmit, formState } = useFormContext();
  const [pollAnswerResponse, setPollAnswerResponse] = useState<IPollAnswerResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSubmit = useCallback(
    async (data: PollAnswerFormData) => {
      setIsLoading(true);
      const response = await pollApi.createPollAnswer(preparedPollAnswerData(data, pollId));
      setPollAnswerResponse(response);
      setIsLoading(false);
    },
    [pollId, pollApi],
  );

  const confirmCallback = useMemo(() => {
    if (pollAnswerResponse) {
      return () => history.push(Routes.Search);
    }

    return handleSubmit(onSubmit);
  }, [handleSubmit, history, onSubmit, pollAnswerResponse]);

  const headerTitle = pollAnswerResponse ? 'Done' : 'Confirm you answer';
  const dismissButtonLabel = pollAnswerResponse ? undefined : 'Close';
  const confirmButtonLabel = pollAnswerResponse ? 'Close' : 'Confirm';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={confirmCallback}
      headerTitle={headerTitle}
      confirmButtonLabel={confirmButtonLabel}
      dismissButtonLabel={dismissButtonLabel}
      isDisabledConfirmButton={formState.isSubmitting}
    >
      {pollAnswerResponse && pollAnswerResponse.poll.feedback && (
        <Span variant={'body2'} color={'textSecondary'}>
          {pollAnswerResponse.poll.feedback}
        </Span>
      )}

      {pollAnswerResponse?.poll.type === PollAndTestType.Test && (
        <Grid container>
          <Grid>
            <Span color={'primary'} variant={'h5'}>
              {pollAnswerResponse.pollResult.score}
            </Span>
            <Span>/{pollAnswerResponse.pollResult.countQuestions}</Span>
          </Grid>
        </Grid>
      )}
      {!pollAnswerResponse && (
        <Span variant={'body2'} color={'textSecondary'}>
          Are you sure that you answered the questions correctly
        </Span>
      )}
      <LoaderFullScreen isOpen={isLoading} />
    </Modal>
  );
};
