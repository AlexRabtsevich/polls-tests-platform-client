import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const getBaseDatePickerStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      '& > .MuiPaper-root': {
        padding: '0 0 1rem',
        borderRadius: '0 0 0.5rem 0.5rem',
        boxShadow: `0px 0.25rem 0.625rem ${theme.palette.action.activatedOpacity}`,
        '& .MuiToolbar-root': {
          flexDirection: 'row',
          height: '2.75rem',
          minHeight: '2.75rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.palette.text.secondary,
          '& .MuiTypography-root': {
            '&.MuiTypography-h4, &.MuiTypography-subtitle1': {
              fontSize: '1rem',
              color: theme.palette.common.white,
              fontWeight: 'bold',
            },
          },
        },
        '& .MuiPickersCalendarHeader-switchHeader': {
          padding: '1.5rem',
          '& .MuiButtonBase-root': {
            padding: 0,
            border: `0.0625rem solid ${theme.palette.action.activatedOpacity}`,
            borderRadius: '0.25rem',
            color: theme.palette.text.secondary,
          },
          '& .MuiPickersCalendarHeader-transitionContainer': {
            height: '1.25rem',
            '& .MuiTypography-body1': {
              color: theme.palette.text.secondary,
              fontWeight: 'bold',
            },
          },
        },
        '& .MuiPickersCalendarHeader-daysHeader > .MuiPickersCalendarHeader-dayLabel': {
          color: theme.palette.text.primary,
        },
        '& .MuiPickersDay-daySelected': {
          backgroundColor: theme.palette.text.secondary,
          '&.MuiPickersDay-current': {
            color: theme.palette.common.white,
          },
        },
        '& .MuiPickersDay-current': {
          color: theme.palette.text.secondary,
        },
        '& .MuiPickersYear-yearSelected, .MuiPickersYear-root:active': {
          color: theme.palette.text.secondary,
          fontWeight: 'bold',
        },
        '& .MuiTypography-root': {
          '&.MuiTypography-h5, &.MuiTypography-body2': {
            fontFamily: '"Roboto", sans-serif',
          },
          '&.MuiTypography-subtitle1, &.MuiTypography-h4, &.MuiTypography-body1': {
            fontFamily: '"Montserrat", sans-serif',
          },
          '&.MuiTypography-caption': {
            fontFamily: 'BryantPro, sans-serif',
            fontSize: '0.9375rem',
          },
        },
      },
      '& .MuiPickersDay-dayDisabled': {
        pointerEvents: 'all',
      },
    },
    input: {
      '& .MuiFilledInput-root': {
        backgroundColor: '#f5f9ff',
      },
    },
  }),
);
