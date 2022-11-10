import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Search from './Search'
import './Home.css'
import Slid from './Slid'
import NavbarH from './NavbarH'
import WEBHOME from './WEBHOME'
import { Center } from '@chakra-ui/react'
import "./Search.css"
export default function Home() {
  return (
    <div>

<Navbar/>
<div className='anm-img'>
<div className='opa'>
			<Center><h1>outdoor activities</h1></Center>
			<Center><p>Many outdoor activities and sports practices</p></Center>
			</div>
</div>
      {/* <Slid/> */}
      <WEBHOME/>

      <Search />
      <Footer />
    </div>
  )
}
