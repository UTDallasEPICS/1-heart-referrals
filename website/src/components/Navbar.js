import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/ohm-logo.jpg" to="/" alt="" height="60px"></img>
          </Link>
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
                to='/about-us-container'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About OHM
                <NavLink>
                  <ul className = 'dropdown-menu'>
                  <li>
                    <NavLink
                      to='/about-us-container/history'
                      className='dropdown-links'
                      onClick={closeMobileMenu}
                    >
                      History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/about-us-container/faq'
                      className='dropdown-links'
                      onClick={closeMobileMenu}
                    >
                      FAQ
                    </NavLink>
                  </li>
                  </ul>
                </NavLink>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/our-team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/network-partners'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Network Partners
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
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
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' to="/login">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
