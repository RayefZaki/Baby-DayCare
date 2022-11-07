import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                {/* <a href='/' className='logo'> */}
                    {/* <img src={logo} alt='logo' /> */}
                {/* </a> */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a spy={true} smooth={true} offset={50} duration={500} githref='#footer' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#search1' onClick={closeMenu}>Programs</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>our servise</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar