import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getFormItemFooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      display: 'flex',
      gap: '0.5rem',
      padding: '0.5rem 0.5rem 0',
      borderTop: `2px solid ${theme.palette.action.disabledBackground}`,
    },
  }),
);

export const getFormItemAnswerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: '3rem',
      alignItems: 'center',
      margin: '0.5rem 0',
      gap: '0.2rem',

      '& .MuiRadio-root': {
        padding: '1rem 0',
      },
    },
  }),
);

interface IProps {
  isFocusedItem: boolean;
}

export const getFormItemStyles = makeStyles<Theme, IProps>((theme) =>
  createStyles({
    root: ({ isFocusedItem }) => ({
      borderRadius: '10px',
      borderTop: isFocusedItem ? `10px solid ${theme.palette.primary.main}` : 'none',

      '& .MuiInput-underline:before': {
        borderBottom: isFocusedItem ? `1px solid ${theme.palette.action.disabled}` : 'none',
      },
    }),
  }),
);
