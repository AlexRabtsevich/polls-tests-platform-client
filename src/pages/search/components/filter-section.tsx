import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import { getFiltersSectionStyles } from './styles';
import { TextIconButton } from '../../../common/components/buttons/text-icon-button';
import { Span } from '../../../common/components/typography/span';

interface IFiltersSectionProps {
  onClear(): void;
}

export const FilterSection: FC<IFiltersSectionProps> = ({ children, onClear }) => {
  const classes = getFiltersSectionStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const desktopView = (
    <Card className={classes.root}>
      <Grid container>
        <Grid item md={1}>
          <Span>{'Filters'}</Span>
        </Grid>
        <Grid container item md={11}>
          <Grid item sm={12} md={9}>
            {children}
          </Grid>
          <Grid item sm={8} md={3} justify='center'>
            <TextIconButton className={classes.clearButton} color='inherit' icon={<ReplayRoundedIcon />} onClick={onClear}>
              Clear all
            </TextIconButton>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );

  const mobileView = (
    <Accordion className={classes.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
        <Span>{'Filters'}</Span>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12} alignItems={'flex-end'}>
            <TextIconButton className={classes.clearButton} color='inherit' icon={<ReplayRoundedIcon />} onClick={onClear}>
              Clear all
            </TextIconButton>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );

  return isDesktop ? desktopView : mobileView;
};
