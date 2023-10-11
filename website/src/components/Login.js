import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="login-container">
        <h1>SIGN INTO YOUR ACCOUNT</h1>
        <form>
            <input type="text" id="user" name="user" placeholder='Your Email'/><br></br>
            <input type="text" id="pwd" name="pwd" placeholder='Your Password'/><br></br>
            <input type="submit" value="Sign in"/>
        </form>
        <a href="/">Forgot your password?</a>

    </div>
  )
}

export default Login