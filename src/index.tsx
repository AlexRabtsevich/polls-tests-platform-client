import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './template/theme';
import { RootStoreProvider } from './provider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider>
          <RootStoreProvider>
            <CssBaseline />
            <App />
          </RootStoreProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
