import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { PollAndTestType } from '../../../common/typings';
import { useSearchFiltersStore } from '../../../provider/use-store';
import { DatePicker } from '../../../common/components/date-picker';

export const Filters: FC = observer(() => {
  const searchFiltersStore = useSearchFiltersStore();

  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <DatePicker label={'From date'} onChange={searchFiltersStore.setFromDate} value={searchFiltersStore.fromDate} />
      </Grid>
      <Grid item md={4}>
        <DatePicker label={'To date'} onChange={searchFiltersStore.setToDate} value={searchFiltersStore.toDate} />
      </Grid>
      <Grid item md={4} container alignItems='center'>
        <FormControlLabel
          control={
            <Checkbox
              checked={searchFiltersStore.getIsCheckedType(PollAndTestType.Poll)}
              value={PollAndTestType.Poll}
              onChange={searchFiltersStore.setType}
            />
          }
          label='Polls'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={searchFiltersStore.getIsCheckedType(PollAndTestType.Test)}
              value={PollAndTestType.Test}
              onChange={searchFiltersStore.setType}
            />
          }
          label='Tests'
        />
      </Grid>
    </Grid>
  );
});
