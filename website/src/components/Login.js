import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="login-container">
        <h2>SIGN INTO YOUR ACCOUNT</h2>
        <form>
            <input className="login-input" type="text" id="user" name="user" placeholder='Your Email'/><br></br>
            <input className="login-input"type="text" id="pwd" name="pwd" placeholder='Your Password'/><br></br>
            <input className="login-submit"type="submit" value="Sign in"/>
        </form>
        <a href="/">Forgot your password?</a>

    </div>
  )
}

export default Login