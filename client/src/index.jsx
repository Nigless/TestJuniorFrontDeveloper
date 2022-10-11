import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App';

const theme = createTheme();

const Styles = createGlobalStyle`
  body{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  *:focus {
    outline: 4px solid #54baff;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <Styles />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
