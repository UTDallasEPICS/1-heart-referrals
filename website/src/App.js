import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './components/pages/Reports';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPage from './components/pages/ForgotPage';

function defaultPage(Comp) {
  return (
    <>
      <Navbar />
      <Comp />
    </>
  )
}
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/' exact element={defaultPage(Home)} />
          <Route path='/services' />
          <Route path='/products' />
          <Route path='/login/forgot' exact Component={ForgotPage} />
          <Route path='/sign-up' exact Component={SignUpPage} />
          <Route path='/Sidebar' exact Component={Sidebar}>
            <Route path='/Sidebar/reports' exact element={<Reports />} />
            <Route path='/Sidebar/reports/reports1' exact element={ReportsOne} />
            <Route path='/Sidebar/reports/reports2' exact element={ReportsTwo} />
            <Route path='/Sidebar/reports/reports3' exact element={ReportsThree} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
