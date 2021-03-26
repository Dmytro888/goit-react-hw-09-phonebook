import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { getLogged } from '../../redux/auth/auth-selector';
import styles from './NavBar.module.css';

function NavBar () {
  const isLogged = useSelector(getLogged);

  return (
    <header className={styles.mainHeader}>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default NavBar;
