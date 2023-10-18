import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPage from './components/pages/ForgotPage';

function defaultPage(Comp) {
  return(
    <>
      <Navbar/>
      <Comp/>
    </>
  )
}
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' exact Component={LoginPage}/>
          <Route path='/' exact element={defaultPage(Home)} />
          <Route path='/services'  />
          <Route path='/products'  />
          <Route path='/login/forgot'  exact Component={ForgotPage}/>
          <Route path='/sign-up' exact Component={SignUpPage}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
