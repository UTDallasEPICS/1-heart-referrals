import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Button } from './Button';
function Login({type}) {
  const [cred, setCred] = useState({
    user:'',
    pwd:''
  });

  if(!type) type = "login";
  console.log(type === "login");
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
  switch(type) {
    case "login":
      return (
        <div className="login-container">
          <div className='login'>
            <h2>SIGN INTO YOUR ACCOUNT</h2>
            <form onSubmit={handleSubmit}>
                <input className="login-input" onChange={handleInput} type="text" value={cred.user} id="user" name="user" placeholder='Your Email'/><br></br>
                <input className="login-input" onChange={handleInput} type="text" value={cred.pwd} id="pwd" name="pwd" placeholder='Your Password'/><br></br>
                <input className="login-submit" type="submit" value="LOG IN"/>
            </form>
            <a href="/login/forgot">Forgot your password?</a><br/>
            <a href="/sign-up">Create an account</a>
          </div>
          <div className="login-btns" >
            <Button className="btn" to="/" buttonSize="btn--large" buttonStyle="btn--transparent"><i class="fas fa-arrow-left"/> Back to Homepage</Button>
          </div>
        </div>
      )
    case "sign-up":
      return (
        <div className="login-container">
          <div className='login'>
            <h2>CREATE AN ACCOUNT</h2>
            <form onSubmit={handleSubmit}>
                <input className="login-input" onChange={handleInput} type="text" value={cred.user} id="user" name="user" placeholder='Your Email'/><br></br>
                <input className="login-input" onChange={handleInput} type="text" value={cred.pwd} id="pwd" name="pwd" placeholder='Your Password'/><br></br>
                <input className="login-input" onChange={handleInput} type="text" value={cred.pwd} id="pwd" name="pwd" placeholder='Confirm Your Password'/><br></br>
                <input className="login-submit" type="submit" value="SIGN UP"/>
            </form>
            <a href="/login">Already have an account?</a>
          </div>
          <div className="login-btns" >
            <Button className="btn" to="/" buttonSize="btn--large" buttonStyle="btn--transparent"><i class="fas fa-arrow-left"/> Back to Homepage</Button>
          </div>
        </div>
      )
    case "forgot":
      return (
        <div className="login-container">
          <div className='login'>
            <h2>FORGOT YOUR PASSWORD?</h2>
            <form onSubmit={handleSubmit}>
                <input className="login-input" onChange={handleInput} type="text" value={cred.user} id="user" name="user" placeholder='Your Email'/><br></br>
                <input className="login-submit" type="submit" value="SEND CODE"/>
            </form>
            <a href="/login">Back to Login</a>
          </div>
          <div className="login-btns" >
            <Button className="btn" to="/" buttonSize="btn--large" buttonStyle="btn--transparent"><i class="fas fa-arrow-left"/> Back to Homepage</Button>
          </div>
        </div>
      )
    default:
      return;
  }
}

export default Login