import Axios from 'axios';
import {
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

// Axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

//================ асинхронный вариант ===================
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await Axios.get('/contacts');
    dispatch(fetchContactsSucces(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};
//=========================================================

// const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());

//   Axios.get(`/contacts`)
//     .then(({ data }) => dispatch(fetchContactsSucces(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };

const addContact = (name, number) => async dispatch => {
  const items = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await Axios.post('/contacts', items);
    dispatch(addContactSucces(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

// const addContact = (name, number) => dispatch => {
//   const items = {
//     name,
//     number,
//   };

//   dispatch(addContactRequest());

//   Axios.post('/contacts', items)
//     .then(({ data }) => dispatch(addContactSucces(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    Axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSucces(id));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

// const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequest());

//   Axios.delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSucces(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };

export { addContact, deleteContact, fetchContacts };
