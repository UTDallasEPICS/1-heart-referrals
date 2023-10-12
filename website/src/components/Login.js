import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {
  const [cred, setCred] = useState({
    user:'',
    pwd:''
  });

  const handleInput = (event) => {
    setCred({...cred, [event.target.name] : event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://reqres.in/api/users", {cred})
    .then((response) => console.log(response))
    setCred({
      user: "",
      pwd: ""
    })
  }
  return (
    <div className="login-container">
        <h2>SIGN INTO YOUR ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
            <input className="login-input" onChange={handleInput} type="text" value={cred.user} id="user" name="user" placeholder='Your Email'/><br></br>
            <input className="login-input" onChange={handleInput} type="text" value={cred.pwd} id="pwd" name="pwd" placeholder='Your Password'/><br></br>
            <input className="login-submit" type="submit" value="SIGN IN"/>
        </form>
        <a href="/">Forgot your password?</a><br/>
        <a href="/">Create an Account</a>

    </div>
  )
}

export default Login