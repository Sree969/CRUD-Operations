import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Add = () => {
    let [values,setValues]=useState({username:"",email:""})
    let navigate=useNavigate()
    let change=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    function Adduser(e){
        e.preventDefault();
        axios.post("http://localhost:3000/users",values).then(()=>navigate("/"))
    }
  return(
    <div className='container'>
        <h1 className="had">Add a new user</h1>
        <form className="forms" action="">
            <input className='ipad' type="text" placeholder='Name' name="name" value={values.name} onChange={change}/><br />
            <input className='ipad' type="text" placeholder='Username' name="username" value={values.username} onChange={change}/><br />
            <input className='ipad' type="email" placeholder='Email Address' name="email" value={values.email} onChange={change}/><br />
            <button className="bad" onClick={Adduser}>AddUser</button>
        </form>
    </div>
  )
}
export default Add

