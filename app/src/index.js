import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';
import App from './App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
          <App />
        </Router>   
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();