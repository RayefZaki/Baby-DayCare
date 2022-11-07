import React, {useState} from 'react'
import axios from 'axios'
// import {useNavigate} from "react-router-dom"

function Create() {
    const[course,setCourse]=useState()
    const[shortDesc,setShortDesc]=useState()
    const[description,setDescription]=useState()
    const[city,setCity]=useState()
    
    let url = "https://6362424b7521369cd068e00e.mockapi.io/DayCare"

    // let navigate = useNavigate();
    const postData=()=>{
        axios.post(url,{
            course,description,city,shortDesc

        }).then(res =>{
            console.log(res)

        })
        // navigate('/GitCreate');
    }
  return (
    <div className='Create'>


        <input placeholder='Course Name' onChange={e=>{setCourse(e.target.value) }}></input>
        <br/>
        <input placeholder='Short Description' onChange={e=>{setShortDesc(e.target.value) }}></input>
        <br/>
        <input placeholder='Description' onChange={e=>{setDescription(e.target.value) }}></input>
        <br/>
        <input placeholder='City' onChange={e=>{setCity(e.target.value) }}></input>
        <br/>
        <button onClick={postData}>Add New Course</button>



    </div>
  )
}

export default Create