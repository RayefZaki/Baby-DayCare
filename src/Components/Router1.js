import React from 'react'
import {Routes,Route}from 'react-router-dom';


function Router1() {
  return (
    <div>
    
    <Routes>

 <Route exact path="/" element={<LoginView/>} />
 <Route path="Store" element={<Store/>} />
 <Route path="Get" element={<Get/>} />
 <Route path="/Get/:id" element={<Gett/>}/>
 <Route path="Sign_up" element={<Sign_up/>} />


 
 



</Routes>
   </div>
  )
}

export default Router1