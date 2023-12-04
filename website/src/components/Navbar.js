import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';
import { FaHeartPulse } from "react-icons/fa6";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  let location = useLocation();
  useEffect(() => {

  }, [location]);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  if (location.pathname === '/')
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
<<<<<<< HEAD
            <h5>One <FaHeartPulse />Heart</h5>                  
            <h1>McKINNEY</h1>            </Link>
=======
              <img src="/images/ohm-logo.jpg" to="/" alt="" height="80px"></img>
            </Link>
>>>>>>> main
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Sidebar'
                  className='nav-links'
                  onClick={Sidebar}
                >
                  Landing Page
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to='/login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
<<<<<<< HEAD
                  SIGN IN
=======
                  Sign In
>>>>>>> main
                </Link>
              </li>
            </ul>

            {button && <Button buttonStyle='btn--outline' to="login">SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  return;
}

export default Navbar;