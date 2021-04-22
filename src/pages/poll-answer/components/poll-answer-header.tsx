import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import moment from 'moment';

import { Span } from '../../../common/components/typography/span';
import { getPollAnswerHeaderStyles } from './styles';
import { ChipWrapper } from '../../../common/components/chips/chip';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

interface IProps {
  title: string;
  description: string;
  hashtagList: string[];
  creatorEmail: string;
  creationDate: string;
}

export const PollAnswerHeader: FC<IProps> = ({ title, description, hashtagList, creatorEmail, creationDate }) => {
  const classes = getPollAnswerHeaderStyles();

  return (
    <Grid item container direction={'column'} className={classes.root}>
      <Grid item>
        <Span variant={'h4'}>{title}</Span>
      </Grid>
      <Grid item>
        <Span color={'textSecondary'}>{description}</Span>
      </Grid>
      <Grid item>{hashtagList && hashtagList.map((label, index) => <ChipWrapper key={index} chipData={{ label, key: label }} />)}</Grid>
      <Grid item container spacing={1} direction={'column'}>
        <Grid item container justify={'flex-end'} alignItems={'center'}>
          <AccountCircle fontSize='small' color='primary' />
          <Span variant={'caption'}>author:</Span>
          <Span variant={'caption'}>
            &nbsp;&nbsp;<strong>{creatorEmail}</strong>
          </Span>
        </Grid>
        <Grid item container justify={'flex-end'} alignItems={'center'}>
          <EventOutlinedIcon fontSize='small' color={'inherit'} />
          <Span variant={'caption'}>&nbsp;&nbsp;{moment(creationDate).format('lll')}</Span>
        </Grid>
      </Grid>
    </Grid>
  );
};
