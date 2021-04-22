import { createStyles, makeStyles, Theme } from '@material-ui/core';

const filtersBackground = '#e8f0f8';
const filtersBorder = '#cce2f1';

export const getFiltersSectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2.5),
      marginBottom: theme.spacing(5),
      background: filtersBackground,
      border: `0.125rem solid ${filtersBorder}`,
      boxSizing: 'border-box',
      borderRadius: '0.75rem',
      boxShadow: 'none',
      padding: '1.5rem',
      '& .MuiGrid-container': {
        alignItems: 'center',
        justifyContent: 'space-around',
        '& .MuiTypography-h2': {
          margin: 0,
        },
        '& .MuiFormControl-root': {
          width: '12rem',
          '&:first-child': {
            width: '19.75rem',
          },
          '& > .MuiInputBase-root > .MuiSelect-root': {
            height: 'auto',
          },
        },
        '& .MuiGrid-item': {
          display: 'flex',
          flexDirection: 'row',
          '& .MuiTypography-subtitle2': {
            alignSelf: 'center',
            marginLeft: '1.5rem',
            marginRight: '0.75rem',
            color: theme.palette.grey,
          },
        },
      },
      [theme.breakpoints.down('md')]: {
        '& > .MuiGrid-container': {
          flexDirection: 'column',
          '& > .MuiGrid-root': {
            maxWidth: '100%',
            width: '100%',
            '&:first-child': {
              marginBottom: theme.spacing(1),
            },
            '& .MuiGrid-item': {
              '& .MuiTypography-subtitle2': {
                marginLeft: '0.5rem',
                marginRight: '0.5rem',
              },
            },
          },
        },
      },
    },
    accordion: {
      background: filtersBackground,
      border: `0.125rem solid ${filtersBorder}`,
      boxSizing: 'border-box',
      borderRadius: '0.75rem',
      boxShadow: 'none',
      marginBottom: '1.75rem',
      padding: '1.75rem 1rem',
      '&::before': {
        height: 0,
      },
      '& .MuiAccordionSummary-root': {
        minHeight: '1.375rem',
        '& .MuiAccordionSummary-content': {
          margin: 0,
          flexGrow: 0,
          '& .MuiTypography-h2': {
            marginBottom: 0,
          },
        },
        '& .MuiIconButton-root': {
          padding: '0 0.75rem',
          '& .MuiSvgIcon-root': {
            color: theme.palette.grey,
          },
        },
      },
      '& .MuiCollapse-container': {
        '& .MuiAccordionDetails-root': {
          padding: '1.75rem 0 0',
          '& .MuiGrid-item': {
            display: 'flex',
            justifyContent: 'center',
            '& .MuiFormControl-root': {
              width: '100%',
            },
            '& .MuiButtonBase-root': {
              '&.MuiButton-contained': {
                width: '100%',
              },
            },
            '& .MuiButton-textSecondary': {
              marginTop: theme.spacing(2),
              marginBottom: theme.spacing(2),
            },
            '& .MuiGrid-item': {
              marginBottom: theme.spacing(3),
              display: 'flex',
              flexDirection: 'column',
              '&:last-child': {
                marginBottom: 0,
              },
              '& .MuiInputBase-root > .MuiInputBase-input': {
                height: 'auto',
              },
            },
          },
        },
      },
      '&.MuiAccordion-root.Mui-expanded': {
        margin: '1.5rem 0',
        '&:last-child': {
          marginBottom: '1.75rem',
        },
      },
    },
    button: {
      borderRadius: '1rem',
    },
    clearButton: {
      borderRadius: '2rem',
      border: `2px solid ${theme.palette.text.secondary}`,
    },
  }),
);

export const getSearchStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      gap: '0 2rem',

      '& button': {
        background: theme.palette.primary.dark,
        borderRadius: '2rem',
      },
      '& .MuiTextField-root': {
        width: '60%',

        '& .MuiFilledInput-root': {
          backgroundColor: '#e8f0f8',
        },
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '1.5rem',

        '& button': {
          width: '100%',
        },
        '& .MuiTextField-root': {
          width: '100%',

          '& .MuiFilledInput-root': {
            backgroundColor: '#e8f0f8',
          },
        },
      },
    },
  }),
);

export const useLandingStyles = makeStyles((theme: Theme) =>
  createStyles({
    headline: (isDesktopView) => {
      if (isDesktopView) {
        return {
          fontSize: '1.5rem',
          marginBottom: 0,
          padding: '0 1rem',
          marginTop: theme.spacing(2),
          textTransform: 'uppercase',
          fontWeight: 'bold',
        };
      }

      return {
        fontSize: '1.125rem',
        fontWeight: 800,
        marginBottom: 0,
        padding: '0 1rem',
        marginTop: theme.spacing(0.5),
        textTransform: 'uppercase',
      };
    },
    stepContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: theme.spacing(3.5),
      [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(6),
      },
    },
    number: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 900,
      color: theme.palette.primary.dark,
      width: '2.5rem',
      height: '2.5rem',
      border: `0.1875rem solid ${theme.palette.primary.dark}`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1.8125rem',
      marginRight: theme.spacing(1.5),
    },
    subtitle: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1.5),
      marginTop: theme.spacing(2),
      padding: '0 0.5rem',
    },
    specialistSearch: {
      marginTop: '3.625rem',
    },
    doctorCard: {
      position: 'absolute',
      right: 0,
      '& > img': {
        borderRadius: '0.75rem',
      },
    },
    threeStepImage: {
      background: 'radial-gradient(50% 191.87% at 50% 50%, #061426 53.12%, #0B3B76 100%) no-repeat left center',
      backgroundSize: 'auto 50%',
      width: '100%',
      marginBottom: theme.spacing(8),
      '& > img': {
        width: '100%',
        height: '100%',
        padding: '1.5rem 1rem',
        [theme.breakpoints.up('sm')]: {
          maxWidth: '71.25rem',
          padding: '1.5rem 4rem',
        },
      },
    },
    text: {
      padding: '0 0.5rem',
      color: theme.palette.text.secondary,
    },
  }),
);
