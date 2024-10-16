import React, { useState } from 'react';
import axios from 'axios';

function Protected({ token }) {
  const [message, setMessage] = useState('');

  const handleGetProtected = () => {
    axios.get('http://127.0.0.1:5000/protected', {
      headers: {
        'Authorization': token
      }
    })
    .then(res => setMessage(res.data.message))
    .catch(err => {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage('An error occurred while accessing protected content.');
      }
    });
  };

  return (
    <div>
      <h2>Protected Content</h2>
      <button onClick={handleGetProtected}>Access Protected Route</button>
      <p>{message}</p>
    </div>
  );
}

export default Protected;