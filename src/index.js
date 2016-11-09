import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';
import {fetchSkills, fetchWorks, fetchEducations, fetchUsers } from './actions'


const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

store.dispatch( fetchSkills() );
store.dispatch( fetchWorks() );
store.dispatch( fetchEducations() );
store.dispatch( fetchUsers() );


ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
