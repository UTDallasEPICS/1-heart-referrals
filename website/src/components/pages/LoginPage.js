import React from 'react'
import '../../App.js'
import Login from '../Login.js'
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const token = sessionStorage.getItem('token');
  if(!token) {
    return (
      <div>
        <Login/>
      </div>
    )
  }
  else {
    return <Navigate to="/Sidebar" />
  }
}

export default LoginPage