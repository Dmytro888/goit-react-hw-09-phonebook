import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSucces,
  registerError,
  loginRequest,
  loginSucces,
  loginError,
  logoutRequest,
  logoutSucces,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSucces,
  getCurrentUserError,
} from './auth-actions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSucces]: (_, { payload }) => payload.user,
  [loginSucces]: (_, { payload }) => payload.user,
  [logoutSucces]: () => initialState,
  [getCurrentUserSucces]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSucces]: (_, { payload }) => payload.token,
  [loginSucces]: (_, { payload }) => payload.token,
  [logoutSucces]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isLogged = createReducer(false, {
  [registerSucces]: () => true,
  [loginSucces]: () => true,
  [getCurrentUserSucces]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSucces]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isLogged,
});
