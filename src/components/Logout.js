import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/logout/');
      // Handle success (e.g., redirect or update state)
      console.log('Logout successful!', response.data);
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Logout failed!', error.response.data);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
