import React, { FC, useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { FormProvider, useForm } from 'react-hook-form';

import { usePollApi } from '../../common/hook';
import { IPollAnswer } from '../../common/typings';
import { Container, Grid } from '@material-ui/core';
import { getPollAnswerStyles } from './styles';
import { PollAnswerItem } from './components/poll-answer-item';
import { PollAnswerHeader } from './components/poll-answer-header';
import { PollAnswerFooter } from './components/poll-answer-footer';
import { PollAnswerModal } from './components/poll-answer-modal';

const PollAnswerPage: FC = () => {
  const pollApi = usePollApi();
  const match = useRouteMatch<{ id: string }>();
  const [pollAnswer, setPollAnswer] = useState<IPollAnswer>();
  const classes = getPollAnswerStyles();
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  useEffect(() => {
    pollApi.getPoll(match.params.id).then(setPollAnswer);
  }, [match.params.id, pollApi]);

  if (!pollAnswer) {
    return null;
  }

  return (
    <FormProvider {...formMethods}>
      <div>
        {pollAnswer.mainImage && <img src={pollAnswer.mainImage} className={classes.image} />}
        <Container className={classes.container}>
          <Card className={classes.card}>
            <Grid container direction={'column'}>
              <PollAnswerHeader
                creatorEmail={pollAnswer.creator.email}
                hashtagList={pollAnswer.hashtagList || []}
                title={pollAnswer.title}
                description={pollAnswer.description}
                creationDate={pollAnswer.creationDate}
              />
              {pollAnswer.items.map((item, index) => (
                <PollAnswerItem key={item.title} item={item} itemNumber={++index} />
              ))}
            </Grid>
            <PollAnswerFooter onConfirm={handleSubmit(openModal)} />
          </Card>
        </Container>
      </div>
      {isOpenModal && (
        <PollAnswerModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} pollApi={pollApi} pollId={match.params.id} />
      )}
    </FormProvider>
  );
};

export default PollAnswerPage;
