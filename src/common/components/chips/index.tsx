import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import { ChipWrapper } from './chip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: () => ({
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    }),
  }),
);

export interface ChipData {
  key: string;
  label: string;
}

interface IProps {
  chipList: ChipData[];
  removeChip: (key: string) => void;
}

export const Chips: FC<IProps> = ({ chipList, removeChip }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {chipList.map((chipData, index) => (
        <ChipWrapper key={index} chipData={chipData} removeChip={() => removeChip(chipData.key)} />
      ))}
    </div>
  );
};
