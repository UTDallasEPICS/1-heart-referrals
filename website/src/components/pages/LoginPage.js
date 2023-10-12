import React from 'react'
import '../../App.js'
import Login from '../Login.js'
const divStyle = {
  position: 'absolute',
  backgroundColor: '#ebebeb',
  margin: '0 0 0 0', 
  height: '100vh',
  width: '100vw'
}
function LoginPage() {
  return (
    <div style={divStyle}>
      <Login />
    </div>
  )
}

export default LoginPage