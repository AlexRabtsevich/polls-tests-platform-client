import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiDialog-paper': {
        maxWidth: theme.spacing(108),
        borderRadius: theme.spacing(1.5),
        padding: theme.spacing(4),
        position: 'relative',
        overflowX: 'hidden',
        '& > div > .MuiTypography-h1': {
          paddingRight: '1.5rem',
          marginBottom: 0,
        },
        [theme.breakpoints.down('sm')]: {
          height: 'fit-content',
        },
      },
      '& .MuiDialogContent-root': {
        padding: 0,
        overflowX: 'hidden',
        '& > div': {
          paddingBottom: '0.125rem',
          paddingTop: 0,
          '& > .MuiGrid-root:first-child': {
            '& > *': {
              marginRight: '1rem',
            },
            [theme.breakpoints.up('md')]: {
              '& > *': {
                marginRight: '0.5rem',
              },
            },
          },
        },
      },
      '& > .MuiDialog-container': {
        background: 'rgba(99, 107, 119, 0.5)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
          alignItems: 'flex-start',
          paddingTop: theme.spacing(4),
        },
      },
    },
    headerCloseIcon: {
      cursor: 'pointer',
      color: theme.palette.text.secondary,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: theme.spacing(3.5),
      '& > h5': {
        marginBottom: 0,
        fontWeight: 600,
      },
    },
    actionBar: {
      padding: '0.5rem 0 0',
      gap: '1rem',
      alignItems: 'center',

      [theme.breakpoints.up('md')]: {
        padding: '2rem 0 0',
      },
    },
  }),
);
