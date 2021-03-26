import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSucces = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('phonebook/addContactRequest');
const addContactSucces = createAction('phonebook/addContactSucces');
const addContactError = createAction('phonebook/addContactError');

const deleteContactRequest = createAction('phonebook/deleteContactRequest');
const deleteContactSucces = createAction('phonebook/deleteContactSucces');
const deleteContactError = createAction('phonebook/deleteContactError');

const filterContacts = createAction('FILTER_CONTACTS');

export {
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
};
