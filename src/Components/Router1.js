import React from 'react'
import {Routes,Route}from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Welcom from './Welcom';
import Home from './Home';
import Register from './Register'

// import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar'

function Router1() {
  return (
  
 
    <>
    {/* <Navbar /> */}
    <Routes>

 <Route exact path="/" element={<Welcom/>} />


 {/* <Route path="Store" element={<Store/>} /> */}
 {/* <Route path="Get" element={<Get/>} /> */}
 <Route path="/Login" element={<Login/>}/>

 <Route path="/Sign_up" element={<Signup/>} />

 <Route path="/Home" element={<Home/>}/>
 <Route path="/Signup" element={<Signup/>} />
 <Route path="/Register" element={<Register/>} />



</Routes>
 
 




</>

 
 

  )
}

export default Router1