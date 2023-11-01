import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Button } from './Button';

let validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
let validPwd = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[@$!%*?&]).{8,}$');
let charMin = new RegExp('^.{8,}$');
let upp = new RegExp('^(?=.*?[A-Z])');
let low = new RegExp('^(?=.*?[a-z])');
let num = new RegExp('^(?=.*?[0-9])'); 
let sym = new RegExp('^(?=.*[@$!%*?&])');

function Login({type}) {
  const [cred, setCred] = useState({});
  const [pVis, setPVis] = useState(false);
  const [cVis, setCVis] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [cpwdErr, setCPwdErr] = useState(false);
  const [charMinE, setcharMinE] = useState(false);
  const [uppE, setUppE] = useState(false);
  const [lowE, setLowE] = useState(false);
  const [numE, setNumE] = useState(false);
  const [symE, setSymE] = useState(false);
  const pwdRef = useRef(false);
  const [pwdFoc, setPwdFoc] = useState(false);

  if(!type) type = "login";

  const handleInput = (event) => {
    setCred({...cred, [event.target.name] : event.target.value});
    if(type === "sign-up" && event.target.name === "pwd") {
      setcharMinE(charMin.test(event.target.value));
      setUppE(upp.test(event.target.value));
      setLowE(low.test(event.target.value));
      setNumE(num.test(event.target.value));
      setSymE(sym.test(event.target.value));
    }
  }

  const showPwd = (id) => {
    let bool = false;
    if(id === "pwd") {
      bool = pVis;
      setPVis(!pVis);
    }
    else {
      bool = cVis;
      setCVis(!cVis);
    }
    let tgt = document.getElementById(id);
    if(!tgt)
      return;
    if(!bool) {
      tgt.type = "text";
    }
    else{
      tgt.type = "password"
    }
    
  }

  useEffect(() => {
    console.log("hey");
    if(document.activeElement.id === pwdRef.current)
      setPwdFoc(true);
    else
    setPwdFoc(false);
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailErr(false);
    setPwdErr(false);
    setCPwdErr(false);
    if(!validEmail.test(cred.user)) {
      setEmailErr(true);
      document.getElementById("user").focus();
      return;
    }
    if(!validPwd.test(cred.pwd)) {
      setPwdErr(true);
      document.getElementById("pwd").focus();
      setcharMinE(false);
      setUppE(false);
      setLowE(false);
      setNumE(false);
      setSymE(false);
      cred.pwd = "";
      cred.cpwd = "";
      return;
    }
    if(cred.pwd !== cred.cpwd && type ) {
      setCPwdErr(true);
      document.getElementById("pwd").focus();
      setcharMinE(false);
      setUppE(false);
      setLowE(false);
      setNumE(false);
      setSymE(false);
      cred.pwd = "";
      cred.cpwd = "";
      return;
    }
    axios.post("http://localhost:3001/", {cred})
    .then((response) => console.log(response))
    setCred({
      user: "",
      pwd: "",
      cpwd:""
    })
  }
  switch(type) {
    case "login":
      return (
        <div className="login-container">
          <div className='login'>
            <h2>SIGN INTO YOUR ACCOUNT</h2>
            <form onSubmit={handleSubmit}>
                <input className="login-input" onChange={handleInput} type="text" value={cred.user} id="user" name="user" placeholder='Your Email'/>
                <input className="login-input" onChange={handleInput} type="password" value={cred.pwd} id="pwd" name="pwd" placeholder='Your Password'/>
                <div className="show-btns" >
                  <Button className="btn" onClick={() => showPwd("pwd")} buttonSize="btn--medium" buttonStyle="btn--transparent">{pVis ? "Hide" : "Show"}</Button>
                </div>
                <input className="login-submit" type="submit" value="LOG IN"/>
            </form>
            <a href="/login/forgot">Forgot your password?</a><br/>
            <a href="/sign-up">Create an account</a>
          </div>
          <div className="login-btns" >
            <Button className="btn" to="/" buttonSize="btn--large" buttonStyle="btn--transparent"><i className="fas fa-arrow-left"/> Back to Homepage</Button>
          </div>
        </div>
      )
    case "sign-up":
      return (
        <div className="login-container">
          <div className='login-float'>
            <div className='login'>
            <h2>CREATE YOUR ACCOUNT</h2>
            <form onSubmit={handleSubmit}>
                <p align="left">{emailErr && "Please enter a valid email"}</p>
                <input className="login-input" onChange={handleInput} type="text" value={cred.user} id="user" name="user" placeholder='Your Email'/><br></br>
                <p align="left">{pwdErr && "Please enter a valid password"}</p>
                <input className="login-input" onFocus={() => {setPwdFoc(true)}} onBlur={() => {setPwdFoc(false)}} onChange={handleInput} type="password" value={cred.pwd} id="pwd" name="pwd" placeholder='Your Password'/>
                <div className="show-btns" tabIndex={500}>
                  <Button className="btn" onClick={() => showPwd("pwd")} buttonSize="btn--medium" buttonStyle="btn--transparent">{pVis ? "Hide" : "Show"}</Button>
                </div>
                <p align="left">{cpwdErr && "Passwords don't match"}</p>
                <input className="login-input" onChange={handleInput} type="password" value={cred.cpwd} id="cpwd" name="cpwd" placeholder='Confirm Your Password'/>
                <div className="show-btns" >
                  <Button className="btn" onClick={() => showPwd("cpwd")} buttonSize="btn--medium" buttonStyle="btn--transparent">{cVis ? "Hide" : "Show"}</Button>
                </div>
                <input className="login-submit" type="submit" value="SIGN UP"/>
            </form>
            <a href="/login">Already have an account?</a>
            </div>

          <div className='checkPwd' style={pwdFoc ? {opacity: '1'} : {opacity: '0'}}>
              <ul>
                <li>{charMinE ? <i style={{color: '#1dc91a'}} className="fas fa-check"/> : <i style={{color: '#b41212'}} className="fas fa-times"/>}&emsp;At least 8 characters</li>
                <li>{uppE ? <i style={{color: '#1dc91a'}} className="fas fa-check"/> : <i style={{color: '#b41212'}} className="fas fa-times"/>}&emsp;At least one uppercase letter</li>
                <li>{lowE ? <i style={{color: '#1dc91a'}} className="fas fa-check"/> : <i style={{color: '#b41212'}} className="fas fa-times"/>}&emsp;At least one lowercase letter</li>
                <li>{numE ? <i style={{color: '#1dc91a'}} className="fas fa-check"/> : <i style={{color: '#b41212'}} className="fas fa-times"/>}&emsp;At least one number</li>
                <li>{symE ? <i style={{color: '#1dc91a'}} className="fas fa-check"/> : <i style={{color: '#b41212'}} className="fas fa-times"/>}&emsp;At least one special character(@$!%*?&)</li>
              </ul>
            </div>
          </div>
          <div className="login-btns" >
            <Button className="btn" to="/" buttonSize="btn--large" buttonStyle="btn--transparent"><i className="fas fa-arrow-left"/> Back to Homepage</Button>
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
            <Button className="btn" to="/" buttonSize="btn--large" buttonStyle="btn--transparent"><i className="fas fa-arrow-left"/> Back to Homepage</Button>
          </div>
        </div>
      )
    default:
      return;
  }
}

export default Login