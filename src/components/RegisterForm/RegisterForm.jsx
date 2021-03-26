import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterForm.module.css';

class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render () {
    const { email, password, name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.registrationLabel}>
            <span className={styles.inputTitle}>enter name</span>
            <input
              className={styles.registrationInput}
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={styles.registrationLabel}>
            <span className={styles.inputTitle}>enter email</span>

            <input
              className={styles.registrationInput}
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={styles.registrationLabel}>
            <span className={styles.inputTitle}>enter password</span>
            <input
              className={styles.registrationInput}
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className={styles.registrationButton} type='submit'>
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
