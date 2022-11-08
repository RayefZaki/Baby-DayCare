import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
const [navbar,setNavbar]=useState (false);


const changebk = ()=>{
if(window.scrollY>=80) {setNavbar(true)
}else{
    setNavbar(false)
}

}         

window.addEventListener('scroll',changebk);
    return (
        <div className='header'>
            <nav className={navbar? 'navbar active':'navbar'}>
                {/* <a href='/' className='logo'> */}
                    {/* <img  width={10} src='https://cdn.discordapp.com/attachments/1032613167446102037/1039311430899466260/unknown.png'alt='logo' /> */}
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