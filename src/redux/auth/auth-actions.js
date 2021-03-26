import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('contacts/registerRequestRequest');
const registerSucces = createAction('contacts/registerRequestSuccess');
const registerError = createAction('contacts/registerRequestError');

const loginRequest = createAction('contacts/loginRequest');
const loginSucces = createAction('contacts/loginSuccess');
const loginError = createAction('contacts/loginError');

const logoutRequest = createAction('contacts/logoutRequest');
const logoutSucces = createAction('contacts/logoutSuccess');
const logoutError = createAction('contacts/logoutError');

const getCurrentUserRequest = createAction('contacts/currentUserRequest');
const getCurrentUserSucces = createAction('contacts/currentUserSuccess');
const getCurrentUserError = createAction('contacts/currentUserError');

export {
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
};
