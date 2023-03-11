import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'
import Login from './components/Login.jsx'

// importing components
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
