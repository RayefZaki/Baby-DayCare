import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer'>
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#search1'>Programs</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Demo</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p> &copy; 2022 Tuwaiq Acadimy Project</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer