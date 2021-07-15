import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import swDev from "./swDev"

import {store} from "./redux/store"

import App from "./App"

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);

swDev()
// Note:
// <Provider> is a component that wraps up the whole app 
// so that we can access all the functions of redux in our app. 