import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useFormContext, Controller } from 'react-hook-form';

import { Span } from '../../../common/components/typography/span';
import { IPollAnswerItem } from '../../../common/typings';
import { getPollAnswerItemStyles } from './styles';
import { ErrorMessage } from '../../../common/components/typography/error-message';

interface IProps {
  item: IPollAnswerItem;
  itemNumber: number;
}

export const PollAnswerItem: FC<IProps> = ({ item, itemNumber }) => {
  const classes = getPollAnswerItemStyles();
  const { control, errors } = useFormContext();

  return (
    <Grid key={item.title} className={classes.root} item container direction={'column'}>
      <Grid item>
        <Span variant={'h6'}>{`${itemNumber}. ${item.title}`}</Span>
      </Grid>
      {item.image && (
        <Grid item container justify={'center'} className={classes.imageContainer}>
          <img src={item.image} />
        </Grid>
      )}
      <Grid item container direction={'column'} className={classes.item}>
        <Controller
          control={control}
          name={item._id}
          rules={{ required: 'This field is required, please select one of variants' }}
          render={(props) => (
            <RadioGroup {...props} aria-label='gender' name='gender1'>
              {item.answers.map((answer) => (
                <FormControlLabel key={answer.uuid} value={answer.uuid} control={<Radio color={'primary'} />} label={answer.variant} />
              ))}
            </RadioGroup>
          )}
        />
        <ErrorMessage name={item._id} errors={errors} color='error' />
      </Grid>
    </Grid>
  );
};
