import React from 'react'
import {Routes,Route}from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Welcom from './Welcom';


function Router1() {
  return (
    
    <Routes>

 <Route exact path="/welcome" element={<Welcom/>} />
 {/* <Route path="Store" element={<Store/>} /> */}
 {/* <Route path="Get" element={<Get/>} /> */}
 <Route path="/Login1" element={<Login/>}/>
 <Route path="/Sign_up" element={<Signup/>} />


 
 



</Routes>
  )
}

export default Router1