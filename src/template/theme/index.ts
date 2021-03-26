import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { createMuiTheme } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';
import { eastBay10Alpha, primaryColor, primaryTextColor, secondaryColor, secondaryTextColor } from '../colors';

const palette: PaletteOptions = {
  primary: {
    main: primaryColor,
  },
  secondary: {
    main: secondaryColor,
  },
  text: {
    primary: primaryTextColor,
    secondary: secondaryTextColor,
  },
};

const overrides: Overrides = {
  MuiCard: {
    root: {
      padding: '1.75rem 2rem',
      borderRadius: '0',
      boxShadow: `0 0 2.25rem ${eastBay10Alpha}, inset 0 0 .25rem ${eastBay10Alpha}`,
    },
  },
  MuiButton: {
    root: {
      textTransform: 'none',
      padding: '0.4rem 1.4rem',
    },
  },
  MuiLink: {
    root: {
      cursor: 'pointer',
    },
  },
  MuiOutlinedInput: {
    root: {
      '&.Mui-error': {
        backgroundColor: '#ffebee',
      },
    },
  },
};

const typography = {
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif`,
  fontWeight: 400,
};

export default createMuiTheme({ palette, overrides, typography });
