import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';

function ContactForm () {
  const myContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameChange = ({ target }) => {
    setName(prevEmail => target.value);
  };

  const numberChange = ({ target }) => {
    setNumber(prevPass => target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const hasContactName = myContacts.some(item => {
      return item.name === name;
    });
    const hasContactNumber = myContacts.some(item => {
      return item.number === number;
    });

    if (hasContactName) {
      alert(`${name} is already in contacts!!!`);
      return;
    }
    if (hasContactNumber) {
      alert(`${number} is already in contacts!!!`);
      return;
    }

    dispatch(addContact(name, number));

    setName(prevName => '');
    setNumber(prevNumber => '');
  };

  return (
    <div className={styles.inputSection}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <br />
          <input
            className={styles.input}
            name='name'
            type='text'
            value={name}
            onChange={nameChange}
            placeholder='...'
          ></input>
          <label className={styles.label}>
            Number
            <br />
            <input
              className={styles.input}
              name='number'
              type='number'
              value={number}
              onChange={numberChange}
              placeholder='...'
            ></input>
          </label>
          <button className={styles.button} type='submit'>
            Add contact
          </button>
        </label>
      </form>
    </div>
  );
}

export default ContactForm;
