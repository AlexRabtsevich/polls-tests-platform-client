import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { FormAddItemButton, FormHeader, FormImage } from '../forms';
import { FormItem } from '../forms/form-item';
import { MAX_QUESTION_IN_POLL } from '../../constants';
import { IFormPoll, PollAndTestType } from '../../typings';
import { usePollApi } from '../../hook';
import { preparedPollBeforeSubmit } from './utils';
import { CreatePollModal } from './components/create-poll-modal';
import { Routes } from '../../../routes';

const DEFAULT_DESCRIPTION = 'Please add description for your poll';

const getCreatePollsStyles = makeStyles({
  root: {
    padding: '2rem 0',
  },
});

interface IProps {
  type: PollAndTestType;
  defaultTitle: string;
}

export const CreatePoll: FC<IProps> = ({ defaultTitle, type }) => {
  const [feedback, setFeedback] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hashtagList, setHashtagList] = useState<string[]>([]);
  const history = useHistory();

  const onOpenModal = useCallback(() => setIsOpenModal(true), []);
  const onCloseModal = useCallback(() => setIsOpenModal(false), []);

  const formMethods = useForm({
    defaultValues: {
      polls: [{ title: 'New ' }],
    },
  });
  const { control, handleSubmit } = formMethods;
  const classes = getCreatePollsStyles();
  const pollApi = usePollApi();

  const onSubmit = useCallback(
    async (formData: IFormPoll) => {
      await pollApi.createPoll(await preparedPollBeforeSubmit({ formData, feedback, hashtagList, type }));
      history.push(Routes.Search);
    },
    [feedback, hashtagList, history, pollApi],
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onAppendItem = useCallback(() => append({ title: '' }), [append]);

  useEffect(() => {
    append({ items: [{ answers: [{ title: 'title' }, { variant: 'variant' }] }] });
  }, []);

  return (
    <Container className={classes.root}>
      <form>
        <FormProvider {...formMethods}>
          <Grid container justify='center'>
            <Grid item md={2} xs={12} />
            <Grid item container direction='column' spacing={2} md={8} xs={12}>
              <Grid item>
                <FormImage fieldImageName={'mainImage'} />
              </Grid>
              <Grid item>
                <FormHeader defaultDescription={DEFAULT_DESCRIPTION} defaultTitle={defaultTitle} />
              </Grid>
              {fields.map((item, index) => (
                <Grid item key={item.id}>
                  <FormItem type={type} removeItem={() => remove(index)} itemIndex={index} />
                </Grid>
              ))}
              <Grid item container justify='center'>
                <FormAddItemButton isCanAdd={fields.length <= MAX_QUESTION_IN_POLL} onClick={onAppendItem} />
              </Grid>
              <Grid item container justify='center'>
                <Button onClick={onOpenModal} fullWidth color='primary' variant={'contained'}>
                  Continue
                </Button>
              </Grid>
            </Grid>
            <Grid item md={2} xs={12} />
          </Grid>
        </FormProvider>
      </form>
      {isOpenModal && (
        <CreatePollModal
          setHashtagList={setHashtagList}
          setFeedback={setFeedback}
          isOpenModal={isOpenModal}
          onClose={onCloseModal}
          onConfirm={handleSubmit(onSubmit)}
        />
      )}
    </Container>
  );
};
