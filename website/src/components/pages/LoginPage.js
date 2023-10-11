import React from 'react'
import '../../App.js'
import Login from '../Login.js'
const divStyle = {
  position: 'absolute',
  backgroundColor: '#ebebeb',
  margin: '-10px 0 0 -10px', 
  width: '100vw',
  height: '100vh'
}
function LoginPage() {
  return (
    <div style={divStyle}>
      <Login />
    </div>
  )
}

export default LoginPage