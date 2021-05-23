// // import {saveAs} from 'file-saver';

// // var FileSaver = require('file-saver');
// // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// // FileSaver.saveAs(blob, "hello world.txt");
// // console.log(FileSaver);

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
// import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { rootReducer } from './Salary/redux/rootReducer';
// import { sagaWatcher } from './redux/sagas';

// const saga = createSagaMiddleware()

import './Salary/styles/styles.less'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk) //, saga
  )
)

// saga.run(sagaWatcher)

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  <React.StrictMode>
    {app()}
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
