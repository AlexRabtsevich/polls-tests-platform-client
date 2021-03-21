import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { createMuiTheme } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';
import { eastBay10Alpha } from '../colors';

const palette: PaletteOptions = {
  primary: {
    main: '#2196f3',
  },
  secondary: {
    main: '#f44336',
  },
  text: {
    primary: '#232f40',
    secondary: '#636b77',
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
};

const typography = {
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif`,
  fontWeight: 400,
};

export default createMuiTheme({ palette, overrides, typography });
