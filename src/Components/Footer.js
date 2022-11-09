import React from 'react'
import './Footer.css'
import {PhoneIcon} from '@chakra-ui/icons'
const Footer = () => {
    return (
        
        <div className='footer'>
            <div className='container-footer'>
            <div>
                    <p>M.A.R.N Team Students In Tuwaiq Acadimy</p>
                    
                    </div>
               
                    <div>                    
                    <h3> &copy; 2022 Tuwaiq Acadimy Project</h3>
                    </div>
                    </div>
                    <div className='cont-links'>
                    <hr></hr>
                    <div className='links'>
                        
                        <a href='#'><PhoneIcon /></a>
                        <a href='#'><i class="fa fa-twitter"></i></a>
                        <a href='#'><i class="fa fa-instagram"></i></a>
                        <a href='#'><i class="fa fa-facebook"></i></a>
                        </div>
                        </div>           
           
        </div>
       
    )
}

export default Footer