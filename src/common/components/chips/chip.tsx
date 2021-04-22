import React, { FC, useMemo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

import { ChipData } from './index';

interface IStyleProps {
  backgroundColor: string;
}

const useStyles = makeStyles<Theme, IStyleProps>((theme: Theme) =>
  createStyles({
    root: ({ backgroundColor }) => ({
      color: theme.palette.common.white,
      fontWeight: 'bold',
      background: backgroundColor,

      '& .MuiChip-deleteIcon': {
        color: theme.palette.common.white,
      },
    }),
  }),
);

interface IProps {
  chipData: ChipData;
  removeChip?: () => void;
}

const colorList = ['#0d47a1', '#673ab7', '#00796b', '#43a047', '#e65100', '#d84315', '#795548', '#424242', '#607d8b', '#7b1fa2', '#d81b60'];

const getRandomColor = () => {
  const randomColorIndex = Math.floor(Math.random() * colorList.length);

  return colorList[randomColorIndex];
};

export const ChipWrapper: FC<IProps> = ({ chipData, removeChip }) => {
  const backgroundColor = useMemo(() => getRandomColor(), []);

  const classes = useStyles({ backgroundColor });

  return <Chip className={classes.root} key={12} label={chipData.label} onDelete={removeChip && removeChip} />;
};
