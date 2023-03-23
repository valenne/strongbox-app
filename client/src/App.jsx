import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'
import Login from './components/Login.jsx'

import Dashboard from './components/Dashboard.jsx'

// importing components
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

function App () {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </main>
  )
}

export default App
