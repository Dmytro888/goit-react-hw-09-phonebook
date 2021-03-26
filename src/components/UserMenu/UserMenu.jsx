import React from 'react';
import { connect } from 'react-redux';
import { getName } from '../../redux/auth/auth-selector';
import { logout } from '../../redux/auth/auth-operations';
import getAvatar from '../../images/images.jpg';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, avatar, onLogout }) => {
  return (
    <div className={styles.userNav}>
      <img src={avatar} width='30'></img>
      <span>Welcome,{name}!</span>
      <button className={styles.userBtn} type='button' onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getName(state),
  avatar: getAvatar,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
