import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Singandlog2 from './Singandlog2'
import Bgimg from './video/production ID_4016504.mp4'
import Footer from './Footer'
import Login from './Login'

function Welcom() {
  return (
    
    <div className='video'>
        <Navbar/>


<video className='vd' autoPlay loop muted>
 
    <source src={Bgimg} type = "video/mp4" />
</video>
<div className='welcome'>
  <h1>Welcome</h1>
  <p>Hello Majed </p>
</div>
<Singandlog2/>
<Search/>
<Login/>
<Footer/>


    </div>
  )
}

export default Welcom