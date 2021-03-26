import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterContacts,
  addContactRequest,
  addContactSucces,
  addContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchContactsSucces]: (_, action) => action.payload,
  [addContactSucces]: (state, { payload }) => [...state, payload],
  [deleteContactSucces]: (state, { payload }) => {
    const id = state.findIndex(contact => contact.id === payload);

    return [...state.slice(0, id), ...state.slice(id + 1)];
  },
});

const filter = createReducer('', {
  [filterContacts]: (_state, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSucces]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSucces]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSucces]: () => false,
  [fetchContactsError]: () => false,
});

// const error = createReducer(null, {  });

export default combineReducers({
  items,
  filter,
  loading,
});
