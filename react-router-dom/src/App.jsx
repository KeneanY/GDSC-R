import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
  <ul>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Link to="/login">login</Link>
    <Link to="/signup">signup</Link>
  </ul>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/about' element={<h1>about</h1>} />
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/signup' element={<h1>signup</h1>} />
    </Routes>
    </>
  )
}

export default App
