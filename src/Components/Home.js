import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Search from './Search'
import './Home.css'
import Slid from './Slid'
export default function Home() {
  return (
    <div>

<Navbar/>

      <Slid/>
      <Search />
      <Footer />
    </div>
  )
}
