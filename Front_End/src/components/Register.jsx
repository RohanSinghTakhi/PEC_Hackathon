// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/register', form).then(res => setMessage(res.data.message)).catch(err => setMessage(err.response.data.message));
  };

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder='Username' onChange={handleChange} required />
            <input name="password" type="password" placeholder='Password' onChange={handleChange} required />

            <button type='submit'>Register</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default Register;