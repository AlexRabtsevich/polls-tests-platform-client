import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getBoxImageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1px',
    },
    imgContainer: {
      position: 'relative',
      display: 'flex',

      '& img': {
        maxHeight: '25rem',
        width: '100%',
        borderRadius: '5px',
      },
      '& button': {
        position: 'absolute',
        top: '5px',
        right: '5px',
        background: theme.palette.action.disabledBackground,

        '&:hover': {
          background: theme.palette.action.disabled,
        },
      },
    },
  }),
);

export const getDropZoneStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: `3px dashed ${theme.palette.primary.dark}`,
      borderRadius: '5px',
    },
    text: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 0',
    },
  }),
);
