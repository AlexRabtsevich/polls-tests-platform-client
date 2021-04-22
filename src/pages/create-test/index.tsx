import React, { FC } from 'react';

import { CreatePoll } from '../../common/components/create-poll';
import { PollAndTestType } from '../../common/typings';

const CreateTestPage: FC = () => {
  return <CreatePoll type={PollAndTestType.Test} defaultTitle={'Create your test'} />;
};

export default CreateTestPage;
