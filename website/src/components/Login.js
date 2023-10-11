import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {
  const [post, setPost] = useState({
    user:'',
    pwd:''
  });

  const handleInput = (event) => {
    setPost({user:event.target.value, pwd:event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://reqres.in/api/users", {post})
    .then((response) => console.log(response))
  }
  return (
    <div className="login-container">
        <h2>SIGN INTO YOUR ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
            <input className="login-input" onChange={handleInput} type="text" id="user" name="user" placeholder='Your Email'/><br></br>
            <input className="login-input" onChange={handleInput} type="text" id="pwd" name="pwd" placeholder='Your Password'/><br></br>
            <input className="login-submit" type="submit" value="Sign in"/>
        </form>
        <a href="/">Forgot your password?</a>

    </div>
  )
}

export default Login