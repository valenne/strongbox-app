import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login.jsx'
import FormNewKey from './components/createKey/FormNewKey.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Header from './components/header/Header.jsx'

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
        <Route path='/card' element={<FormNewKey />} />
      </Routes>
    </main>
  )
}

export default App
