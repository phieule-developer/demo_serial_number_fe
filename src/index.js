import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
