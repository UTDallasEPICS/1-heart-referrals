import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';
import { FaHeartPulse } from "react-icons/fa6";
import "./Navbar.css"


const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Gill Sans", sans-serif;

`;

const NavMenu = styled(Link)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 100vw;
  justify-content: end;
  margin-right: 1rem;
  padding-top: 20px ;
`;

const SidebarNav = styled.nav`
  background: rgb(4, 38, 76);
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
  border:#fff;

`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [click, setClick] = useState(true);
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
  if (location.pathname === '/'|| location.pathname=== '/about-us-container' || location.pathname=== '/our-team'
  || location.pathname=== '/network-partners'|| location.pathname=== '/contact' || location.pathname === '/login' || location.pathname === '/sign-up' || location.pathname === '/login/forgot' 
  )
    return;


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h5>One <FaHeartPulse />Heart</h5>                  
            <h1>McKINNEY</h1>
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
                </Link>
              </li>
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



              {button && <Button onClick={() => {
              sessionStorage.removeItem("token");
            }} buttonStyle='btn--outline' to="login"> <div className="user-icon">
            <i className="fas fa-user"></i>
          </div>
            </Button>}

            </ul>

            
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