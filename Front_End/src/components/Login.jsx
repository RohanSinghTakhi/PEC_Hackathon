import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/login', form)
      .then(res => {
        setMessage('Login successful');
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token); // Store the token in localStorage
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage('An error occurred during login.');
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;