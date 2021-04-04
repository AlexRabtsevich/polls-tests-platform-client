import React, { FC, MouseEvent, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, IconButton } from '@material-ui/core';
import { getBoxImageStyles } from './style';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
  fieldImageName: string;
}

export const BoxImage: FC<IProps> = ({ fieldImageName }) => {
  const { watch, setValue } = useFormContext();
  const classes = getBoxImageStyles();

  const fileImage = watch(fieldImageName);

  const fileImagePreview = useMemo(() => {
    if (fileImage) {
      return fileImage.preview;
    }
  }, [fileImage]);

  const onClearImage = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setValue(fieldImageName, undefined);
    },
    [fieldImageName, setValue],
  );

  if (!fileImage) {
    return null;
  }

  return (
    <Box className={classes.root}>
      <div className={classes.imgContainer}>
        <img src={fileImage.preview} alt='image' />
        <IconButton onClick={onClearImage}>
          <CloseIcon />
        </IconButton>
      </div>
    </Box>
  );
};
