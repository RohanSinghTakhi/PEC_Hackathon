import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve the token from localStorage when the app loads
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token'); // Remove the token from localStorage
  };

  return (
    <div>
      <h1>Flask & React JWT Authentication</h1>
      {!token ? (
        <>
          <Register />
          <Login setToken={setToken} />
        </>
      ) : (
        <>
          <Protected token={token} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;