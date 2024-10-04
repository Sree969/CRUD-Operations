//rafce
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const GetUser = () => {
    let [state,setState]=useState([]);
    let [thead,setThead]=useState([]);
    let navigate=useNavigate()
    useEffect(()=>{
        //2. axios.get("http://localhost:3000/users").then(x=>setState(x.data));
        // to check
        //1. console.log(axios.get("http://localhost:3000/users"));
        axios.get("http://localhost:3000/users").then(x=>{
            setState(x.data);
            setThead(Object.keys(x.data[0]).slice(0,4))
        }).catch(e=>console.log(e));
    },[state])

    // 1.1 console.log(state);
    // let x=()=>navigate("/add");

    function deletes(id){
        // axios.delete(`http://localhost:3000/users/${id}`)
        axios.delete(`http://localhost:3000/users/${id}`).then(()=>{
            navigate("/")
        });
    }
  return (
    <>
        {/* <div>GetUser</div> */}
        <table border={1}>
            <caption>
                <strong>CRUD OPERATIONS</strong>
                <button id="ad" onClick={()=>navigate("/add")}>Add +</button>
            </caption>
            <thead>
                <tr>
                    {thead.map((x,ind) => <th key={ind}> {x} </th>)}
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {state.map(x=>{
                    return(
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            <td>{x.email}</td>
                            <td>
                                <Link to={`/update/${x.id}`}><button>Update</button>&nbsp;</Link>
                                <button onClick={()=>deletes(x.id)}>DELETE</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default GetUser