import { register } from 'redux/auth/operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className="login-page">
      <div className="form">
        <h2 className="title">Sign up</h2>
        <p className="text">Create account with your email.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-container">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="form-button">Sign up</button>
          <p className="message">
            Have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
