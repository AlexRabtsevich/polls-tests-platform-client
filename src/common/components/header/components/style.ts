import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getProfileStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& .MuiPaper-root': {
          borderRadius: '0.25rem',
          padding: 0,
          minWidth: '7.5rem',
          marginTop: '3.125rem',
          boxShadow: `0 0.25rem 0.625rem grey`,
          height: 'max-content',
          display: 'flex',
          justifyContent: 'flex-end',
          zIndex: 2,
          '& .MuiList-root': {
            padding: 0,
            '& .MuiListItem-root': {
              padding: '0.75rem 1rem',
              '&.MuiListItem-button:hover': {
                backgroundColor: '#fafafa',
                color: theme.palette.primary.main,
              },
              '&.Mui-selected': {
                backgroundColor: theme.palette.common.white,
              },
            },
          },
        },
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backdropFilter: 'blur(0.75rem)',
        backgroundColor: 'grey',
        '& .MuiPaper-root': {
          borderRadius: '0.25rem',
          padding: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          minWidth: '11rem',
          position: 'initial',
          boxShadow: `0 0.25rem 0.625rem grey`,
          '& .MuiList-root': {
            padding: 0,
            '& .MuiListItem-root': {
              padding: '1.5rem 2.5rem',
              '&.MuiListItem-button:hover': {
                backgroundColor: 'grey',
                color: theme.palette.primary.main,
              },
              '&.Mui-selected': {
                backgroundColor: theme.palette.common.white,
              },
            },
          },
        },
      },
    },
  }),
);
