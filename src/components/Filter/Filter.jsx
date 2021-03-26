import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className={styles.filterTitle}>Find contacts by name</h3>
      <input
        className={styles.filterInput}
        name='filter'
        type='text'
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
        placeholder='...'
      ></input>
    </div>
  );
};

export default Filter;
