import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLogged } from '../../redux/auth/auth-selector';
import styles from './Navigation.module.css';

function Navigation () {
  const isLogged = useSelector(getLogged);

  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <NavLink
            className={styles.link}
            exact
            // className=''
            activeClassName=''
            to='/'
          >
            <button className={styles.btn} type='button'>
              Home
            </button>
          </NavLink>
        </li>
        <li>
          {isLogged && (
            <NavLink exact className='' activeClassName='' to='/contacts'>
              <button className={styles.btn} type='button'>
                Contacts
              </button>
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
