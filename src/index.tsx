import * as React from "react";
import { render } from 'react-dom';
import {Provider} from "react-redux";

import {configureAppStore} from "./store/configure-store";
import App from "./app";

import './styles/styles.less'

const store = configureAppStore()

render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
