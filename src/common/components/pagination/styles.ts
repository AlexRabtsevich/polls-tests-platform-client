import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getPaginationStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiPagination-ul': {
        justifyContent: 'center',
        marginTop: '1.5rem',
        '& li:first-child .MuiButtonBase-root, & li:last-child .MuiButtonBase-root': {
          border: `0.1em solid ${theme.palette.primary.dark}`,
          borderRadius: '0.25rem',
          height: '1.75rem',
          minWidth: '1.75rem',
          '& > svg': {
            color: theme.palette.grey,
          },
        },
        '& .MuiButtonBase-root': {
          fontFamily: 'Roboto',
          fontSize: '1rem',
          color: theme.palette.grey,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
        },
      },
    },
  }),
);
