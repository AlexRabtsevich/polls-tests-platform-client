import React, { FC } from 'react';

import { CreatePoll } from '../../common/components/create-poll';
import { PollAndTestType } from '../../common/typings';

const CreatePollPage: FC = () => {
  return <CreatePoll type={PollAndTestType.Poll} defaultTitle={'Create your poll'} />;
};

export default CreatePollPage;
