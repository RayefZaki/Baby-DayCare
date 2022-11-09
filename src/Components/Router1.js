import React from 'react'
import {Routes,Route}from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Welcom from './Welcom';
import Home from './Home';


function Router1() {
  return (
  <>
 <Welcom />
    <Routes>
         
 <Route exact path="/Home" element={<Home/>} />
 {/* <Route path="Store" element={<Store/>} /> */}
 {/* <Route path="Get" element={<Get/>} /> */}
 <Route path="/Login" element={<Login/>}/>
 {/* <Route path="/Sign_up" element={<Signup/>} /> */}
</Routes>
</>

 
 




  )
}

export default Router1