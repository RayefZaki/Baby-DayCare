import React, {useState} from 'react'
import axios from 'axios'
// import {useNavigate} from "react-router-dom"

function Create() {
    const[course,setCourse]=useState()
    const[imge,setImge]=useState()
    const[shortDesc,setShortDesc]=useState()
    const[age,setAge]=useState()
    
    let url = "https://6362424c7521369cd068e027.mockapi.io/ToDO"

    // let navigate = useNavigate();
    const postData=()=>{
        axios.post(url,{
            course,age,shortDesc,imge

        }).then(res =>{
            console.log(res)

        })
        // navigate('/GitCreate');
    }
  return (
    <div className='Create'>


        <input placeholder='Course Name' onChange={e=>{setCourse(e.target.value) }}></input>
        <br/>
        <input placeholder='Imge' onChange={e=>{setImge(e.target.value) }}></input>
        <br/>
        <input placeholder='Short Description' onChange={e=>{setShortDesc(e.target.value) }}></input>
        <br/>
        <input placeholder='Age' onChange={e=>{setAge(e.target.value) }}></input>
        <br/>
        <button onClick={postData}>Add New Course</button>



    </div>
  )
}

export default Create