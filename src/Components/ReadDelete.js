import React from 'react'
import {  useEffect, useState } from 'react';
import axios from 'axios';

function ReadDelete() {
  const [state, setState] = useState([])


  useEffect(()=> {
    axios.get("https://6362424b7521369cd068e00e.mockapi.io/DayCare").then((res) =>{
      console.log(res.data);
      setState(res.data);
      
    })
  },[])

  const onDelete =(id)=> {
    console.log(id);
    axios.delete(`https://6362424b7521369cd068e00e.mockapi.io/DayCare/${id}`).then((res) =>{
      console.log(res);
      setState(state.filter(del =>{
        return del.id != id
      }));
      
    })
  }

return (
    
        
        <div className="App">
          {state.map(items=>{
            return(
              <>
              <p>Course name:{items.course}</p>
              <br></br>
              <p>Short Description:{items.shortDesc}</p>
              <br></br>
              <p>Age:{items.age}</p>
              <br></br>

              <img src={items.cover_url}></img>
              <button onClick={() =>{onDelete(items.id)} }>Delete</button>
              </>
              
            )
          })}

    
        </div>
  )
}

export default ReadDelete