import React, { FC, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useSecureAccountApi } from '../../common/hook';
import { useProfileStore } from '../../provider';

const SearchPage: FC = observer(() => {
  const profileStore = useProfileStore();

  return <></>;
});

export default SearchPage;
