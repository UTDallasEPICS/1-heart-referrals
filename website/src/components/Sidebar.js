import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';
import "./Navbar.css"
// const Nav = styled.div`
//   background: #800000;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   font-family: "Gill Sans", sans-serif;
// `;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Gill Sans", sans-serif;
`;

const SidebarNav = styled.nav`
  background: #800000;
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
              <img src="/images/ohm-logo.jpg" to="/" alt="" height="80px"></img>
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

              <li className='nav-item'>
                <div className="user-icon">
                  {/* <h3>{ad.FirstName} {ad.LastName}</h3> */}
                  <i className="fas fa-user"></i>
                </div>
              </li>


            </ul>

            {button && <Button onClick={() => {
              sessionStorage.removeItem("token");
            }} buttonStyle='btn--outline' to="login">Log out</Button>}
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