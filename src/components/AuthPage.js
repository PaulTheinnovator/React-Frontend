// components/AuthPage.js
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';

function AuthPage() {
  return (
    <div>
      <h2>Authentication</h2>
      <Signup />
      <Login />
      <Logout />
    </div>
  );
}

export default AuthPage;
