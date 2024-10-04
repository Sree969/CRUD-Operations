import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateUser = () => {
    let [values,setValues]=useState({username:"",email:""})
    let navigate=useNavigate()
    let change=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    let {id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:3000/users/"+id).then(x=>setValues(x.data));
    },[])

    function updates(e){
        e.preventDefault();
            axios.put("http://localhost:3000/users/"+id,values).then(x=>navigate("/"))
    }

  return(
    <div className='container'>
        <h1 className='had'>Edit Profile</h1>
        <form className='forms' action="">
            <input className='ipad' type="text" placeholder='Name' name="name" value={values.name} onChange={change}/>
            <input className='ipad' type="text" placeholder='Username' name="username" value={values.username} onChange={change}/><br />
            <input className='ipad' type="email" placeholder='Email Address' name="email" value={values.email} onChange={change}/><br />
            <button className='bad' onClick={updates}>UpdateUser</button>
        </form>
    </div>
  )
}
export default UpdateUser

