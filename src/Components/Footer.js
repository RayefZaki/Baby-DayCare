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
                        <a href='#demo'>Contect<br></br>
                        Phone.No :+966 5555 555 5
                        <br></br>
                        twetter : @M.A.R.N
                        </a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    
                    <h3> &copy; 2022 Tuwaiq Acadimy Project</h3>
                    <p>M.A.R.N Team Students In Tuwaiq Acadimy</p>
                    <p>Majed abdullah</p>
                    <p>Anwar Alanzi</p>
                    <p>Rayef Zaki</p>
                    <p>Nawaf Alhmadi</p>

                                    </div>
            </div>
        </div>
        </div>
    )
}

export default Footer