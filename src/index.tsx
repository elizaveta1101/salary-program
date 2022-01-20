import * as React from "react";
import { render } from 'react-dom';
import {Provider} from "react-redux";

import {store} from "salary/ducks/store";
import App from "./app";

import 'salary/styles/styles.less'

render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
