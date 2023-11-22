import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPage from './components/pages/ForgotPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import OurTeam from './components/OurTeam';
import NetworkPartners from './components/NetworkPartners';
import FAQ from './components/FAQ';
import History from './components/History';

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
          <Route path = '/about-us-container' exact Component={AboutUs}/>
          <Route path = '/contact' exact Component={Contact}/>
          <Route path = '/our-team' exact Component={OurTeam}/>
          <Route path = '/network-partners' exact Component={NetworkPartners}/>
          <Route path='/about-us-container/history' element={<History />} />
          <Route path='/about-us-container/faq' element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;