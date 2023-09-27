 import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    One Heart Mckinney <i className='fab fa-typo3' />
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' :'fas fa-bars'} />

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Dashboard
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Clients
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Export
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Insight
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                My Network
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
