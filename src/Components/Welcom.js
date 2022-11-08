import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Singandlog2 from './Singandlog2'
import Bgimg from './video/production ID_4016504.mp4'
import Footer from './Footer'
import Login from './Login'
import Activites from './Activites'
import Whyt from './Whyt'

function Welcom() {
  return (
    
    <div className='video'>
        <Navbar/>


<video className='vd' autoPlay loop muted>
 
    <source src={Bgimg} type = "video/mp4" />
</video>
<div className='welcome'>
  <h1>🅳🅰🆈 🅲🅰🆁🅴
</h1>
 <p> ...𝑓𝑜𝑟 𝑦𝑜𝑢𝑟 𝑐ℎ𝑖𝑙𝑑𝑟𝑒𝑛 𝑐𝑎𝑟𝑒

 </p>
 <div>
    
 </div>
</div>
<h1> Our Acitvity</h1>
<p>We make sure it's not just daycare</p>
<div id='Activity' className='Activity1'>

<Activites Name ="Trips daycare" Img = 'https://cdn.discordapp.com/attachments/1032613167446102037/1039583611000721408/pexels-thirdman-8926648.jpg'/>

<Activites Name ="Recreational Activities" Img = 'https://cdn.discordapp.com/attachments/1032613167446102037/1039583543384354916/pexels-ksenia-chernaya-8535230.jpg'/>

<Activites Name ="Educational activities" Img = 'https://cdn.discordapp.com/attachments/1032613167446102037/1039583535926870175/pexels-anna-shvets-11286067.jpg'/>
</div>

<Whyt/>
<Footer/>


    </div>
  )
}

export default Welcom