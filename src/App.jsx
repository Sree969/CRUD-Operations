//rafc
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetUser from './Pages/GetUser'
import Add from './Pages/Add.jsx'
import UpdateUser from './Pages/Update.jsx'
import Error from './Pages/Error.jsx'
import './index.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetUser/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path='/update/:id' element={<UpdateUser/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
