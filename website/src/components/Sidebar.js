import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core';
=======
// import * as FaIcons from 'react-icons/fa';
>>>>>>> main
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';
<<<<<<< HEAD
import { FaHeartPulse } from "react-icons/fa6";
import "./Navbar.css"

=======
import "./Navbar.css"
// const Nav = styled.div`
//   background: #800000;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   font-family: "Gill Sans", sans-serif;
// `;
>>>>>>> main

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Gill Sans", sans-serif;
<<<<<<< HEAD

`;

const SidebarNav = styled.nav`
  background: rgb(4, 38, 76);
=======
`;

const SidebarNav = styled.nav`
  background: #800000;
>>>>>>> main
  font-size: 2rem;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  padding-top: 100px;
  font-family: "Gill Sans", sans-serif;
<<<<<<< HEAD
  border:#fff;

=======
>>>>>>> main
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let location = useLocation();
  const nav = useNavigate();
  const ad = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {

  }, [location]);

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
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/sign-up' || location.pathname === '/login/forgot')
    return;
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
<<<<<<< HEAD
            <h5>One <FaHeartPulse />Heart</h5>                  
            <h1>McKINNEY</h1>
=======
              <img src="/images/ohm-logo.jpg" to="/" alt="" height="80px"></img>
>>>>>>> main
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Clients
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  My Network
                </Link>
              </li>

<<<<<<< HEAD


              {button && <Button onClick={() => {
              sessionStorage.removeItem("token");
            }} buttonStyle='btn--outline' to="login"> <div className="user-icon">
            <i className="fas fa-user"></i>
          </div>
            </Button>}

            </ul>

            
=======
              <li className='nav-item'>
                <div className="user-icon">
                  <h3>{ad.FirstName} {ad.LastName}</h3>
                  <i className="fas fa-user"></i>
                </div>
              </li>


            </ul>

            {button && <Button onClick={() => {
              sessionStorage.removeItem("token");
            }} buttonStyle='btn--outline' to="login">Log out</Button>}
>>>>>>> main
          </div>
        </nav>

        <SidebarNav sidebar={true}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};




export default Sidebar;