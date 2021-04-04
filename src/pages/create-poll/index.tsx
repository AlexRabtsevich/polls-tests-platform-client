import React, { FC, useCallback, useEffect } from 'react';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';

import { FormAddItemButton, FormHeader, FormImage } from '../../common/components/forms';
import { FormItem } from '../../common/components/forms/form-item';
import { MAX_QUESTION_IN_POLL } from '../../common/constants';
import { IPollFormData } from '../../common/typings';
import { usePollApi } from '../../common/hook';
import { preparedPollBeforeSubmit } from './utils';

const DEFAULT_TITLE = 'Create new poll';
const DEFAULT_DESCRIPTION = 'Description';

const getCreatePollsStyles = makeStyles({
  root: {
    padding: '2rem 0',
  },
});

const CreatePollsPage: FC = () => {
  const formMethods = useForm({
    defaultValues: {
      polls: [{ title: 'New ' }],
    },
  });
  const { control, handleSubmit } = formMethods;
  const classes = getCreatePollsStyles();
  const pollApi = usePollApi();

  const onSubmit = useCallback(
    async (data: IPollFormData) => {
      await pollApi.createPoll(preparedPollBeforeSubmit(data));
    },
    [pollApi],
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onAppendItem = useCallback(() => {
    append({ title: '' });
  }, [append]);

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
                <FormHeader defaultDescription={DEFAULT_DESCRIPTION} defaultTitle={DEFAULT_TITLE} />
              </Grid>
              {fields.map((item, index) => (
                <Grid item key={item.id}>
                  <FormItem removeItem={() => remove(index)} itemIndex={index} />
                </Grid>
              ))}
              <Grid item container justify='center'>
                <FormAddItemButton isCanAdd={fields.length <= MAX_QUESTION_IN_POLL} onClick={onAppendItem} />
              </Grid>
              <Grid item container justify='center'>
                <Button onClick={handleSubmit(onSubmit)} fullWidth color='primary' variant={'contained'}>
                  Create Poll
                </Button>
              </Grid>
            </Grid>
            <Grid item md={2} xs={12} />
          </Grid>
        </FormProvider>
      </form>
    </Container>
  );
};

export default CreatePollsPage;
