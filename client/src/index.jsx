import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App';

const Styles = createGlobalStyle`
  body {
    margin: 0;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: #eee;
    color: rgba(0, 0, 0, 0.87);
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
  *:focus {
    outline: 4px solid #54baff;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

render(
  <Provider store={store}>
    <Normalize />
    <Styles />
    <App />
  </Provider>,
  document.getElementById('root'),
);
