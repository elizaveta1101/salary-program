import React from 'react';
import { render } from 'react-dom';
import App from "@/app.tsx";

import './Salary/styles/styles.less'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
