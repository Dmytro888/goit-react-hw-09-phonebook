import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailChange = ({ target }) => {
    setEmail(prevEmail => target.value);
  };

  const passwordChange = ({ target }) => {
    setPassword(prevPass => target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail(prevMail => '');
    setPassword(prevPas => '');
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.loginLabel}>
          <span className={styles.inputTitle}>enter email</span>
          <input
            className={styles.loginInput}
            type='email'
            name='email'
            value={email}
            onChange={emailChange}
          ></input>
        </label>
        <label className={styles.loginLabel}>
          <span className={styles.inputTitle}>enter password</span>
          <input
            className={styles.loginInput}
            type='password'
            name='password'
            value={password}
            onChange={passwordChange}
          ></input>
        </label>
        <button className={styles.loginButton}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
