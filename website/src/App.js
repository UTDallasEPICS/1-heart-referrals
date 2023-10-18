import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './components/pages/Reports';
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
    /*
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

*/
        <Routes>
          <Route path='/login' exact Component={LoginPage}/>
          <Route path='/' exact element={defaultPage(Home)} />
          <Route path='/services'  />
          <Route path='/products'  />
          <Route path='/login/forgot'  exact Component={ForgotPage}/>
          <Route path='/sign-up' exact Component={SignUpPage}/>
        </Routes>
        </Sidebar>
      </Router>
      
    </>
  );
}

export default App;
