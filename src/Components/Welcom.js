import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Singandlog2 from './Singandlog2'
import Bgimg from './video/production ID_4016504.mp4'

function Welcom() {
  return (
    
    <div className='video'>
        <Navbar/>

<video autoPlay loop muted>
    <source src={Bgimg} type = "video/mp4" />
</video>

<Singandlog2/>
<Search/>


    </div>
  )
}

export default Welcom