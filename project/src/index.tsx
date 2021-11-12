import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {createAPI} from './service/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {RequireAuthorization} from './store/action';
import {fetchFilmsAction, checkAuthAction, fetchPromoFilmAction} from './store/api-actions';
import {ThunkAppDispatch} from './types/action';
import {AuthorizationStatus} from './constants/constants';
import {redirect} from './store/redirect';

const api = createAPI(
  () => store.dispatch(RequireAuthorization(AuthorizationStatus.NOAUTH)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api), redirect)));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());
(store.dispatch as ThunkAppDispatch)(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
