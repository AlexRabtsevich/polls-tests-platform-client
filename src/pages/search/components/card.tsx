import React, { FC, useCallback } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import defaultImage from '../../../template/images/car-default.jpg';
import { Span } from '../../../common/components/typography/span';
import { ChipWrapper } from '../../../common/components/chips/chip';
import { Routes } from '../../../routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '17rem',
      height: '20rem',
      padding: '0',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '22rem',
      },

      '& .MuiCardActionArea-root': {
        height: '100%',

        '& > div': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
        },
      },
    },
    media: {
      height: 170,
    },
    title: {
      fontSize: '14px',
      fontWeight: 600,
      padding: '0 .8em',
    },
    hashtag: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.4em',
      padding: '3px 10px',

      '& > *': {
        height: '26px',
      },
    },
  }),
);

interface IProps {
  image?: string | null;
  title: string;
  hashtagList: string[] | null;
  id: string;
}

export const CardItem: FC<IProps> = ({ title, image, hashtagList, id }) => {
  const classes = useStyles();
  const history = useHistory();

  const onRedirectToPollAnswer = useCallback(() => {
    history.push(`/poll-answer/${id}`, { id });
  }, [history, id]);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onRedirectToPollAnswer}>
        <Grid>
          <Grid item>
            <CardMedia className={classes.media} image={image || defaultImage} title='Contemplative Reptile' />
          </Grid>
          <Grid item className={classes.hashtag}>
            {hashtagList && hashtagList.map((label, index) => <ChipWrapper key={index} chipData={{ label, key: label }} />)}
          </Grid>
          <Grid item>
            <Span className={classes.title} gutterBottom>
              {title}
            </Span>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
