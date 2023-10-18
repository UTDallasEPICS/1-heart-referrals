import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './components/pages/Reports';

//import Services from './components/pages/Services';
//import Products from './components/pages/Products';
//import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/sidebar'  />
          <Route path='/products'  />
          <Route path='/sign-up'  />
          </Routes> */}


        <Sidebar />
        <Routes>

        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
