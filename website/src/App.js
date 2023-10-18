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
        <Navbar >
        <Routes>
          <Route path='/' exact element={Home} />
          <Route path='/Sidebar' exact element={Sidebar}  />
          <Route path='/products'  />
          <Route path='/sign-up'  />
          </Routes>
        </Navbar>

        <Sidebar>
        <Routes>

        <Route path='/Sidebar/reports' exact element={<Reports/>} />
        <Route path='/Sidebar/reports/reports1' exact element={<ReportsOne />} />
        <Route path='/Sidebar/reports/reports2' exact element={ReportsTwo} />
        <Route path='/Sidebar/reports/reports3' exact element={ReportsThree} />

        </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
