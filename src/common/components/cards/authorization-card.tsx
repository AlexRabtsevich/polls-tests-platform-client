import React, { FC, ReactNode } from 'react';
import Card from '@material-ui/core/Card';
import { Container, Grid } from '@material-ui/core';
import { getAuthorizationCardStyles } from './style';
import { FormProvider } from 'react-hook-form';

interface IProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
}

export const AuthorizationCard: FC<IProps> = (props) => {
  const { firstContent, secondContent } = props;

  const classes = getAuthorizationCardStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.firstContent}>
            {firstContent}
          </Grid>
          <Grid item md={6} xs={12} className={classes.secondContent}>
            {secondContent}
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
