import Axios from 'axios';
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

Axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set (token) {
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset () {
    Axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registerRequest(credentials));
  try {
    const response = await Axios.post('/users/signup', credentials);
    token.set(response.data.token);

    dispatch(registerSucces(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest(credentials));
  try {
    const response = await Axios.post('/users/login', credentials);
    token.set(response.data.token);

    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await Axios.post('/users/logout');
    token.unset();
    dispatch(logoutSucces());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());
  try {
    const response = await Axios.get('/users/current');
    dispatch(getCurrentUserSucces(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export { register, login, logout, getCurrentUser };
