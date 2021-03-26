import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const Navigation = () => {
  return (
    <div>
      <ul className={styles.navigation}>
        <li className={styles.link}>
          <NavLink exact className='' activeClassName='' to='/register'>
            <button type='button' className={styles.authBtn}>
              Register
            </button>
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink exact className='' activeClassName='' to='/login'>
            <button type='button' className={styles.authBtn}>
              Login
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
